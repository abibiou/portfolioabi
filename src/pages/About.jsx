import React from "react";
import SoftwareGrid from "../components/SoftwareGrid";
import ProjectsScrollBanner from "../components/ProjetScrollBanner";
const About = () => {
    return (

<section id="about" style={{ marginTop: "-120px" }}>
  <div
  className="row p-5"
  style={{
    backgroundColor: "#58583B", // ton vert
    minHeight: "750px",
    display: "flex",
    justifyContent: "center",   // centre horizontalement
    alignItems: "center",       // centre verticalement
    textAlign: "center",        // centre le texte
  }}
>
  <div className="col-md-8">
    {/* Titre */}
    <h1 className="fw-bold mt-5" style={{ color: "#EBE7E5" }}>
      MES COMPÉTENCES
    </h1>

    {/* Image */}
    <img
      src="/img/abipiano.JPG" // remplace par ton image
      alt="Compétences"
      style={{
        maxWidth: "300px",
        height: "auto",
        marginBottom: "20px",
      }}
    />

    {/* Texte */}
    
    <p style={{ color: "#EBE7E5" }}>
      Polyvalent en UI/UX design, webdesign et création visuelle, mon parcours
      me permet de gérer à la fois la création graphique, le développement web
      et la gestion de projets, avec créativité et adaptabilité.
    </p>
  </div>
</div>

            <div className="container-fluid">
       <div className="row mt-5 p-5">
                    {/* Éducation */}
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-3">EXPERIENCES</h1>

                        {/* CONCILIUM*/}
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="list-unstyled">
                                    <li><strong>CONCILIUM - Assistant Chef de Projet Web/Créa</strong> </li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <ul className="list-unstyled">
                                    <li><strong>MAI 2025 - ACTUEL </strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-11">
                                <ul className="list-unstyled list-spaced" style={{ textAlign: "justify", fontSize: "13px" }}>
                                    <li>- Conception, refonte et maintenance de sites web</li>
                                    <li>- Création d’éléments graphiques (bannières, boutons, visuels promotionnels, etc.)</li>
                                    <li>- Publication d’articles, conception de mailings, gestion et animation des réseaux sociaux, mise en place du calendrier éditorial.</li>
                                    <li>- Participation aux rendez-vous clients, suivi de projets et contribution aux stratégies éditoriales, communication et techniques.</li>
                                </ul>
                            </div>
                        </div>
                        {/* FREELANCE */}
                        <div className="row mt-4">
                            <div className="col-md-8">
                                <ul className="list-unstyled">
                                    <li><strong>DESIGNER GRAPHIQUE EN FREELANCE</strong> </li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <ul className="list-unstyled">
                                    <li><strong>2021- ACTUEL </strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-11">
                                <ul className="list-unstyled list-spaced" style={{ textAlign: "justify", fontSize: "13px" }}>

                                    <li>- Création de designs graphiques variés : logos, affiches et carrousels, adaptés aux besoins print et digitaux.</li>
                                    <li>- Transformation créative de pochettes d'albums musicaux en personnages de dessin animé, avec retouche et illustration</li>
                                    <li>- Développement d'une marque de streetwear : identité visuelle, design textile et création de ptotoypes de vêtements.</li>
                                    <li>- Création d'affiches sportives, principalement football, alliant photographie dynamique et éléments graphiques immersifs.</li>

                                </ul>
                            </div>
                        </div>
                        {/* STACK 48 */}
                        <div className="row mt-4">
                            <div className="col-md-8">
                                <ul className="list-unstyled">
                                    <li><strong>STACK 48 - Développeur web / Graphiste</strong> </li>
                                </ul>
                            </div>

                            <div className="col-md-4 px-">
                                <ul className="list-unstyled">
                                    <li><strong>JUIN 2024 </strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-11">
                                <ul className="list-unstyled list-spaced" style={{ textAlign: "justify", fontSize: "13px" }}>

                                    <li>- Développement d'un tamplate de site e-commerce pour la vente de vêtement HTML, CSS, JavaScript, ReactJS</li>
                                    <li>- Conception d'une interface de site UI/UX pour un réseau d'entrepreneurs</li>
                                    <li>- Création de design graphiques (cartes de visite, logo, t-shirts...)</li>

                                </ul>
                            </div>
                        </div>

                        <h1 className="fw-bold all-caps mt-4">Diplôme</h1>         {/* Sous-grille à l'intérieur */}
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="list-unstyled d-flex flex-wrap gap-1">
                                    <li><strong>BUT Métiers du Multimédia et de l'Internet</strong></li>
                                    <li style={{ fontSize: "13px" }}>IUT Marne-la-Vallée - Meaux</li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li><strong>Sep 2023 - ACTUEL</strong></li>

                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="list-unstyled d-flex flex-wrap gap-1">
                                    <li><strong>Bac général - Mathémathiques & Physique-Chimie</strong></li>
                                    <li style={{ fontSize: "13px" }}>Lycée Gaston Bachelard - Chelles</li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    <li><strong>Sep 2020 - JUI 2023</strong></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row ">


                        </div>

                    </div>
                    {/* Langues */}
                 <div className="col-md-6">
  <h1 className="fw-bold">LOGICIELS</h1>
  <SoftwareGrid />

  {/* Bloc Langues avec margin-top sur mobile uniquement */}
  <div className="col-md-6 mt-md-0">
    <h1 className="fw-bold all-caps">Langues</h1>
    <ul className="list-unstyled list-spaced" style={{ fontSize: "13px" }}>
      <li>Français – Natif</li>
      <li>Anglais – B1</li>
      <li>Espagnol – B1</li>
    </ul>
  </div>
</div>

                </div>
            </div>
<div className="row mt-4">
  <div className="col-12">
    <div className="text-white p-5" style={{ backgroundColor: "#4B3B35" }}>
      <div className="row">
        <div className="col-md-8">
          <h6 className="fw-regular all-caps" style={{ color: "#EBE7E5" }}>MON CV</h6>
          <h4 className="all-caps">Emporte mon parcours avec toi</h4>
        </div>

        {/* col-12 sur mobile, col-md-4 sur desktop */}
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
      <a
  href="/img/CV_ABI.pdf"
  download="CV_ABI.pdf"
  className="btn btn-outline-light text-white border-1 rounded-0 px-4 w-100 w-md-auto"
>
  TÉLÉCHARGER MON CV
</a>
        </div>
      </div>
    </div>
  </div>
</div>
            <div className="mt-4">
                <ProjectsScrollBanner direction="left" />

                {/* Bandeau qui défile vers la droite */}
                <ProjectsScrollBanner direction="right" />
            </div>
              <section className="bg-white py-5">
        <div className="container-fluid px-4">
          <h1 className="text-uppercase fw-medium mb-4 text-center">Contactez-moi</h1>

          <div className="d-grid gap-4">
            {[
              { label: "LinkedIn", url: "https://www.linkedin.com/in/abi-vigneswaran-9b5552294/" },
              { label: "Instagram", url: "https://www.instagram.com/abdouble7" },
              { label: "vigneswaranabi@gmail.com", url: "mailto:vigneswaranabi@gmail.com" },
              { label: "07 68 05 85 07", url: "tel:0768058507" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="contact-block border border-dark py-3 px-4 d-flex justify-content-between align-items-center text-decoration-none"
              >
                <span className="fw-bold">←</span>
                <span className="text-uppercase fw-bold">{item.label}</span>
                <span className="fw-bold">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

        </section>

    );
};

export default About;
