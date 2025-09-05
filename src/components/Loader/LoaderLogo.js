import React from "react";
import "./LoaderLogo.css";
import { greeting } from "../../portfolio.js";

class LogoLoader extends React.Component {
  nameGroupRef = React.createRef();
  nameFillRef = React.createRef();

  componentDidMount() {
    this.fitName();
    window.addEventListener("resize", this.fitName);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.theme !== this.props.theme ||
      prevProps.name !== this.props.name ||
      prevProps.tagline !== this.props.tagline
    ) {
      this.fitName();
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.fitName);
  }

  fitName = () => {
    // Auto-scale horizontal pour que le nom ne déborde jamais
    const fillEl = this.nameFillRef.current;
    const groupEl = this.nameGroupRef.current;
    if (!fillEl || !groupEl) return;

    // ViewBox (voir plus bas) = 900 x 420 -> centre X = 450
    const VIEW_W = 900;
    const marginX = 90; // marge intérieure pour respirer
    const bbox = fillEl.getBBox();
    const available = Math.max(1, VIEW_W - marginX * 2);
    const scale = Math.min(1, available / bbox.width);

    groupEl.setAttribute(
      "transform",
      `translate(450 0) scale(${scale}) translate(-450 0)`
    );
  };

  render() {
    // Palette “fond violet + texte rose”
    const palette = {
      bg: "#1A0B2E",     // violet profond
      bgAlt: "#0F0720",  // violet + sombre (pour le dégradé de fond)
      primary: "#FF4DA1", // rose néon principal
      onBg: "#FFD8EE",    // rose clair lisible
    };

    // Permet quand même d’honorer un thème existant si présent
    const theme = this.props.theme || {};
    const bg = theme.body || palette.bg;
    const bgAlt = palette.bgAlt;
    const primary = theme.accent || palette.primary;
    const onBg = theme.text || palette.onBg;

    const rawName =
      this.props.name ||
      (greeting && (greeting.title || greeting.logo_name)) ||
      "Maïva MOTOMBI ASSOGHO";
    const displayName = String(rawName).trim().toUpperCase();

    const tagline =
      this.props.tagline ||
      "Développeuse Web — Front-end • UI • Accessibilité";

    return (
      <div
        className="logo-loader"
        style={{
          "--bg": bg,
          "--bgAlt": bgAlt,
          "--primary": primary,
          "--onBg": onBg,
        }}
      >
        <svg
          className="logo-svg"
          viewBox="0 0 900 420"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`Chargement — ${displayName}`}
        >
          <defs>
            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--onBg)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
            <linearGradient id="textFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--onBg)" />
            </linearGradient>
            <linearGradient id="textStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--onBg)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>

            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.4" result="sg" />
              <feMerge>
                <feMergeNode in="sg" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Badge hexagonal */}
          <g className="badge">
            <path
              className="hex outer"
              d="M450 40 L590 120 L590 280 L450 360 L310 280 L310 120 Z"
            />
            <path
              className="hex inner"
              d="M450 80 L555 140 L555 260 L450 320 L345 260 L345 140 Z"
            />
          </g>

          {/* Orbiteurs */}
          <g className="orbit">
            <circle cx="450" cy="52" r="3.2" className="orb" />
            <circle cx="450" cy="52" r="2.1" className="orb trail1" />
            <circle cx="450" cy="52" r="1.4" className="orb trail2" />
          </g>

          {/* Nom (groupe autoscalé) */}
          <g className="name" ref={this.nameGroupRef}>
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              className="text-stroke"
            >
              {displayName}
            </text>
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              className="text-fill"
              ref={this.nameFillRef}
            >
              {displayName}
            </text>
          </g>

          {/* Tagline */}
          <text x="50%" y="70%" textAnchor="middle" className="tagline">
            {tagline}
          </text>
        </svg>
      </div>
    );
  }
}

export default LogoLoader;
