import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

/** ======= PROJETS MIS EN AVANT (éditables) ======= */
const featuredProjects = [
  {
    title: "Oseille App — Gestion financière",
    description:
      "Application pour gérer vos budgets, revenus/dépenses, épargne & tontines, multi-devises (XOF ⇄ USD ⇄ EUR) avec graphiques & authentification.",
    stack: ["React/Tailwind", "Laravel", "MySQL", "API REST", "Chart.js"],
    screenshot: "oseille_banner.png",
    color: "#431F87",
    site: "https://oseille-app.com/login.php",
    demoVideo: "/videos/oseille-demo.mp4",
  },
  {
    title: "UrDesire — Boutique e-commerce",
    description:
      "E-commerce anonyme (pseudo & token) avec panier, wishlist, catégories, suivi de commande, suivi de livraison avec chats privés et paiements en ligne.",
    stack: ["PHP", "MySQL", "Bootstrap/Tailwind", "NOWPayments"],
    screenshot: "urdesire_banner.png",
    color: "#C50E40",
    site: "https://oseille-app.com/urdesire1/login.php",
    demoVideo: "/videos/urdesire-demo.mp4",
  },
  {
    title: "Ma Belle — ChatBot d’aide aux victimes",
    description:
      "Chat anonyme et bienveillant pour l’orientation et la sécurité : messages guidés, bouton SOS/alerte, accès rapide à l’appel, répertoire de ressources locales, interface discrète.",
    stack: ["React/Tailwind", "Laravel API", "LLM/NLP", "WebSocket/Realtime", "MySQL"],
    screenshot: "mabelle_banner.png",
    color: "#0B5C57",
    site: "https://chat-mabelle.com/",
    demoVideo: "/videos/mabelle-demo.mp4",
  },
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDescription: null, // projet dont on affiche la description
      activeVideo: null,       // projet dont on affiche la vidéo
    };
  }

  openDescription = (project) => {
    this.setState({ activeDescription: project });
  };

  closeDescription = () => {
    this.setState({ activeDescription: null });
  };

  openVideo = (project) => {
    this.setState({ activeVideo: project });
  };

  closeVideo = () => {
    this.setState({ activeVideo: null });
  };

  render() {
    const theme = this.props.theme;
    const { activeDescription, activeVideo } = this.state;

    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* Header */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              {/* <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div> */}
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* ======= Projets mis en avant ======= */}
        <div className="basic-projects">
          <Fade bottom duration={1200} distance="20px">
            <div className="featured-grid">
              {featuredProjects.map((p) => (
                <div
                  className="featured-card"
                  key={p.title}
                  style={{ borderTopColor: p.color }}
                >
                  <div
                    className="featured-media"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.screenshot && (
                      <img
                        src={require(`../../assets/images/${p.screenshot}`)}
                        alt={`${p.title} - capture d’écran`}
                      />
                    )}
                  </div>

                  <div className="featured-content">
                    <h3
                      className="featured-title"
                      style={{ color: theme.text }}
                    >
                      {p.title}
                    </h3>

                    {/* On n'affiche qu'un extrait, la description complète est dans la modale */}
                    <p
                      className="featured-desc"
                      style={{ color: theme.secondaryText }}
                    >
                      {p.description.length > 140
                        ? p.description.slice(0, 140) + "..."
                        : p.description}
                    </p>

                    <div className="featured-tags">
                      {p.stack.map((tech) => (
                        <span className="tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="featured-actions">
                      {p.site && (
                        <a
                          href={p.site}
                          target="_blank"
                          rel="noreferrer"
                          className="featured-btn primary"
                        >
                          Visiter le site
                        </a>
                      )}

                      {p.demoVideo && (
                        <button
                          className="featured-btn"
                          onClick={() => this.openVideo(p)}
                        >
                          Voir la démo
                        </button>
                      )}

                      <button
                        className="featured-btn secondary"
                        onClick={() => this.openDescription(p)}
                      >
                        Description
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>

        {/* ======= MODALE DESCRIPTION ======= */}
        {activeDescription && (
          <div className="overlay">
            <div className="overlay-backdrop" onClick={this.closeDescription} />
            <div className="overlay-content">
              <button
                className="overlay-close"
                onClick={this.closeDescription}
                aria-label="Fermer la description"
              >
                ×
              </button>
              <h3 className="overlay-title">{activeDescription.title}</h3>
              <p className="overlay-text">{activeDescription.description}</p>

              <div className="overlay-tags">
                {activeDescription.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {activeDescription.site && (
                <div className="overlay-actions">
                  <a
                    href={activeDescription.site}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-link-btn"
                  >
                    Visiter le site
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======= MODALE VIDÉO ======= */}
        {activeVideo && (
          <div className="overlay">
            <div className="overlay-backdrop" onClick={this.closeVideo} />
            <div className="overlay-content overlay-video">
              <button
                className="overlay-close"
                onClick={this.closeVideo}
                aria-label="Fermer la vidéo"
              >
                ×
              </button>

              <h3 className="overlay-title">{activeVideo.title}</h3>

              <video
                className="overlay-video-player"
                src={activeVideo.demoVideo}
                controls
              />

              <div className="overlay-actions">
                {activeVideo.site && (
                  <a
                    href={activeVideo.site}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-link-btn"
                  >
                    Aller sur le site
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
