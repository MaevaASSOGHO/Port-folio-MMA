import React, { Component } from "react";

export default class ProjectsImg extends Component {
  render() {
    const { theme } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        width="800"
        height="600"
      >
        {/* Quelques bulles décoratives comme dans l'ancien visuel */}
        <circle cx="80" cy="90" r="8" fill={theme.imageHighlight} opacity="0.35" />
        <circle cx="710" cy="140" r="6" fill="#47e6b1" opacity="0.5" />
        <circle cx="120" cy="500" r="6" fill="#4d8af0" opacity="0.4" />
        <circle cx="720" cy="460" r="8" fill="#f55f44" opacity="0.4" />

        {/* Ombre au sol */}
        <ellipse
          cx="400"
          cy="480"
          rx="260"
          ry="30"
          fill="#000"
          opacity="0.08"
        />

        {/* Écran du laptop */}
        <rect
          x="150"
          y="110"
          width="500"
          height="300"
          rx="26"
          fill="#0f172a"
          stroke={theme.imageHighlight}
          strokeWidth="4"
        />

        {/* Contenu de l'écran (grille de projets) */}
        <rect
          x="180"
          y="140"
          width="190"
          height="110"
          rx="12"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        <rect
          x="410"
          y="140"
          width="190"
          height="110"
          rx="12"
          fill={theme.imageHighlight}
          opacity="0.12"
        />
        <rect
          x="180"
          y="270"
          width="190"
          height="110"
          rx="12"
          fill={theme.imageHighlight}
          opacity="0.12"
        />
        <rect
          x="410"
          y="270"
          width="190"
          height="110"
          rx="12"
          fill={theme.imageHighlight}
          opacity="0.2"
        />

        {/* Petites barres de titre dans les cards */}
        <rect
          x="195"
          y="155"
          width="120"
          height="10"
          rx="5"
          fill="#ffffff"
          opacity="0.9"
        />
        <rect
          x="425"
          y="155"
          width="120"
          height="10"
          rx="5"
          fill="#ffffff"
          opacity="0.9"
        />
        <rect
          x="195"
          y="285"
          width="120"
          height="10"
          rx="5"
          fill="#ffffff"
          opacity="0.9"
        />
        <rect
          x="425"
          y="285"
          width="120"
          height="10"
          rx="5"
          fill="#ffffff"
          opacity="0.9"
        />

        {/* Petites pastilles type boutons / tags */}
        <circle cx="205" cy="185" r="5" fill="#4d8af0" opacity="0.9" />
        <circle cx="225" cy="185" r="5" fill="#f59e0b" opacity="0.9" />
        <circle cx="245" cy="185" r="5" fill="#22c55e" opacity="0.9" />

        <circle cx="435" cy="185" r="5" fill="#4d8af0" opacity="0.9" />
        <circle cx="455" cy="185" r="5" fill="#f59e0b" opacity="0.9" />
        <circle cx="475" cy="185" r="5" fill="#22c55e" opacity="0.9" />

        <circle cx="205" cy="315" r="5" fill="#4d8af0" opacity="0.9" />
        <circle cx="225" cy="315" r="5" fill="#f59e0b" opacity="0.9" />
        <circle cx="245" cy="315" r="5" fill="#22c55e" opacity="0.9" />

        <circle cx="435" cy="315" r="5" fill="#4d8af0" opacity="0.9" />
        <circle cx="455" cy="315" r="5" fill="#f59e0b" opacity="0.9" />
        <circle cx="475" cy="315" r="5" fill="#22c55e" opacity="0.9" />

        {/* Barre de titre de la fenêtre */}
        <rect
          x="150"
          y="110"
          width="500"
          height="34"
          rx="26"
          fill="#020617"
          opacity="0.8"
        />
        <circle cx="176" cy="127" r="5" fill="#f97373" />
        <circle cx="194" cy="127" r="5" fill="#facc15" />
        <circle cx="212" cy="127" r="5" fill="#4ade80" />

        {/* Base du laptop */}
        <rect
          x="120"
          y="390"
          width="560"
          height="40"
          rx="12"
          fill="#0b1120"
        />
        <rect
          x="180"
          y="400"
          width="440"
          height="22"
          rx="8"
          fill="#020617"
        />

        {/* Pavé tactile */}
        <rect
          x="340"
          y="402"
          width="120"
          height="18"
          rx="6"
          fill="#111827"
        />

        {/* Petite étiquette "Projects" */}
        <rect
          x="320"
          y="210"
          width="160"
          height="32"
          rx="16"
          fill="#020617"
          opacity="0.7"
        />
        <text
          x="400"
          y="231"
          textAnchor="middle"
          fontSize="14"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fill={theme.text}
        >
          Mes projets
        </text>
      </svg>
    );
  }
}
