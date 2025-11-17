import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard"; // (masqué)
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
// import PublicationCard from "../../components/publicationsCard/PublicationCard"; // (masqué)
import { Fade } from "react-reveal";
import { projectsHeader /*, publicationsHeader, publications */ } from "../../portfolio.js";
// import ProjectsData from "../../shared/opensource/projects.json"; // (masqué)
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

/** ======= PROJETS MIS EN AVANT (éditables) ======= */
const featuredProjects = [
  {
    title: "Oseille App — Gestion financière",
    description:
      "Budgets, revenus/dépenses, épargne & tontines, multi-devises (XOF ⇄ USD ⇄ EUR), graphiques, authentification. Front React/Tailwind, back Laravel & MySQL, API REST, déploiement O2Switch.",
    stack: ["React/Tailwind", "Laravel", "MySQL", "API REST", "Chart.js"],
    screenshot: "https://cdn.builder.io/api/v1/image/assets/TEMP/25a9ecb604a40e1a829ee63ce7ec1573089efa88", // <- mets ton image dans src/assets/images/
    color: "#431F87",
    demo: "https://oseille-app.com/login.php", // ex: "https://oseilleapp.example.com"
    repo: null, // ex: "https://github.com/ton-user/oseille-app"
  },
  {
    title: "UrDesire — Boutique e-commerce",
    description:
      "E-commerce anonyme (pseudo & token), panier, wishlist, catégories, suivi de commande, paiements crypto (NOWPayments). PHP/MySQL + Bootstrap/Tailwind.",
    stack: ["PHP", "MySQL", "Bootstrap/Tailwind", "NOWPayments"],
    screenshot: "logo.png",
    color: "#C50E40",
    demo: "https://oseille-app.com/urdesire1/login.php", // ex: "https://urdesire.example.com"
    repo: null,
  },
  {
    ttitle: "Ma Belle — ChatBot d’aide aux victimes",
  description:
    "Chat anonyme et bienveillant pour l’orientation et la sécurité : messages guidés, bouton SOS/alerte, accès rapide à l’appel, répertoire de ressources locales, interface discrète.",
  stack: ["React/Tailwind", "Laravel API", "LLM/NLP", "WebSocket/Realtime", "MySQL"],
  screenshot: "1.jpg",   // déjà déposé dans src/assets/images/
  color: "#0B5C57",         // vert canard assorti à la capture
    demo: "https://chat-mabelle.com/",
    repo: null,
  },
];

class Projects extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="projects-main">
        <Header theme={theme} />

        {/* Header */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
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

        {/* ======= Projets mis en avant (avec screenshot + bandeau couleur) ======= */}
        <div className="basic-projects">
          <Fade bottom duration={1200} distance="20px">
            <div className="featured-grid">
              {featuredProjects.map((p) => (
                <div className="featured-card" key={p.title} style={{ borderTopColor: p.color }}>
                  <div className="featured-media" style={{ backgroundColor: p.color }}>
                    {p.screenshot && (
                      <img
                        src={require(`../../assets/images/${p.screenshot}`)}
                        alt={`${p.title} - capture d’écran`}
                      />
                    )}
                  </div>

                  <div className="featured-content">
                    <h3 className="featured-title" style={{ color: theme.text }}>
                      {p.title}
                    </h3>
                    <p className="featured-desc" style={{ color: theme.secondaryText }}>
                      {p.description}
                    </p>

                    <div className="featured-tags">
                      {p.stack.map((tech) => (
                        <span className="tag" key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="featured-actions">
                      {p.demo && (
                        <Button text="Démo" newTab={true} href={p.demo} theme={theme} />
                      )}
                      {p.repo && (
                        <Button text="Code" newTab={true} href={p.repo} theme={theme} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>

        {/* ======= GitHub & Publications (COMMENTÉS pour masquer) ======= */}
        {/*
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => (
            <GithubRepoCard key={repo.id || repo.name} repo={repo} theme={theme} />
          ))}
        </div>

        <Button
          text={"Tous mes projets"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} theme={theme} />
          ))}
        </div>
        */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
