
import SectionProjets from "../components/SectionProjets";
import { useEffect, useState } from "react";
import DerniersProjets from "../components/DerniersProjets";
import SectionImages from "../components/SectionImages";

export default function Home() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    fetch("/data/projets.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Projets chargés:", data); // 👀 Vérifie dans la console
        setProjets(data);
      })
      .catch((err) => console.error("Erreur JSON:", err));
  }, []);

  return (
    <>
      <section id="accueil" style={{ marginTop: "-70px" }}>
        <div
          className="arriereplanavion"
          style={{
            backgroundImage: "url('/img/fondhome.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "105vh"
          }}
        >
          <div className="color-overlay d-flex align-items-end" style={{ minHeight: "105vh" }}>
            <div
              className="container-fluid text-white mb-5 mx-5"
              style={{ paddingBottom: "40px" }} // ✅ ajoute un espace en bas
            >
              <div className="row w-100">
                {/* Colonne gauche : titre + rôles */}
                <div className="col-lg-7 col-12">
                  <h1 className="fw-bold display-4 mb-4">PORTFOLIO ABI</h1>
                  <div className="skills-block fs-6">
                    <span>Graphiste</span>
                    <span>Développeur web</span>
                    <span>UI/UX Design</span>
                  </div>
                </div>

                {/* Colonne droite : texte justifié */}
                <div className="col-lg-5 col-12 mt-3 mt-md-0">
                  <p className="fw-lighter text-justify" style={{ fontSize: "18px" }}>
                    Bienvenue dans mon portfolio, dans mon univers où vous pouvez découvrir l’ensemble
                    de mes créations, explorant différents domaines du multimédia avec passion et curiosité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION BLOCS */}
      <section className="container-fluid py-5 px-3">
        <div className="row" style={{ minHeight: "400px" }}>
          {/* Colonne gauche = rouge */}
          <div className="col-md-5 mt-2">
            <div className="text-white p-4 h-100 d-flex flex-column align-items-center" style={{ backgroundColor: "#BB6D5B" }}>
              <h5 className="fw-regular text-dark mt-5">ABI VIGNESWARAN</h5>
              <img
                src="/img/abi.png"
                alt="Portrait"
                className="img-fluid my-3"
                style={{ maxHeight: "1000px", objectFit: "cover" }}
              />
              <p className="text-center px-5">
                Chaque projet est une histoire, chaque design une vision, bienvenue dans l'espace où je donne vie à mes idées
              </p>
            </div>
          </div>


          {/* Colonne droite = vert + gris empilés */}
          <div className="col-md-7 d-flex flex-column mt-3 mt-md-0">
            <div className="text-white p-5 flex-fill mb-3" style={{ backgroundColor: "#58583B" }}>
              <h1 className="fw-regular mt-5">PORTFOLIO</h1>
              <p className="fw-regular all-caps mt-5" style={{ color: "#EBE7E5", textAlign: "justify", fontWeight: "300", fontSize: "18px" }}>
                Salut ! Je suis Abi, un passionné de graphisme. Mon amour pour le graphisme m'a poussé à partager mes créations sur les réseaux sociaux, accumulant aujourd'hui près de 2700 abonnés sur Instagram.
              </p>
              <p className="fw-regular all-caps mt-4" style={{ color: "#EBE7E5", textAlign: "justify", fontWeight: "300", fontSize: "18px" }}>
                Actuellement en troisième année à l'université Gustave Eiffel en BUT MMI (Métiers du Multimédia et de l'Internet), je poursuis mes études pour approfondir mes connaissances dans le domaine numérique, notamment le graphisme et le développement web.
              </p>
              <p className="fw-regular all-caps mt-4" style={{ color: "#EBE7E5", textAlign: "justify", fontWeight: "300", fontSize: "18px" }}>
                Découvrez mon portfolio varié, allant de la musique aux vêtements en passant par les affiches jusqu'à des créations de sites internet. J'espère que vous prendrez plaisir à explorer mes créations. Bon visionnage !
              </p>
            </div>
            <div className="bg-secondary text-white p-4 flex-fill mt-3 mt-md-0">
              <SectionImages />
            </div>
          </div>
        </div>

        {/* Ligne suivante = noir pleine largeur */}
        <div className="row mt-4">
          <div className="col-12 ">
            <div className="text-white p-5" style={{ backgroundColor: "#4B3B35" }}>
              <div className="row">
                <div className="col-md-8">
                  <h6 className="fw-regular all-caps" style={{ color: "#EBE7E5" }}>
                    COMPÉTENCES
                  </h6>
                  <h4 className="all-caps">
                    Un profil polyvalent, capable de maîtriser plusieurs domaines et de s’adapter à chaque projet
                  </h4>
                </div>

                {/* col-12 sur mobile, col-md-4 sur desktop */}
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                  <a
                    href="/about"
                    className="btn btn-outline-light border-1 rounded-0 px-4 btn-competences w-100 w-md-auto"
                  >
                    VOIR MES COMPÉTENCES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-fluid px-4">
   <div className="row align-items-center">
  {/* Colonne gauche : texte */}
  <div className="col-md-7">
    <h6 className="fw-bold">PORTFOLIO</h6>
    <h1 className="fw-medium">MES PROJETS</h1>
    <p className="all-caps mt-3">
      Découvrez ci-dessous mes projets organisés par catégories. Bonne exploration !
    </p>
  </div>

  {/* Colonne droite : bouton responsive */}
<div className="col-12 col-md-5 d-flex justify-content-md-end justify-content-center align-items-center mt-3 mt-md-0">
<a
  href="./projets"
  className="btn btn-outline-dark px-4 py-2 rounded-0 btn-projets"
>
  VOIR TOUS MES PROJETS
</a>
</div>
</div>
        </div>
      </section>
      <SectionProjets />
   <section className="bg-dark text-white py-5 mt-5">
  {/* container-fluid avec py-5 par défaut, mais désactivé sur mobile */}
  <div className="container-fluid py-sm-5 py-0">
    <div className="row align-items-center">
      {/* Bloc texte à gauche */}
      <div className="col-md-5 px-4 px-md-5 pt-5">
        <h6 className="text-uppercase fw-regular mb-3">À propos</h6>
        <h1 className="text-uppercase fw-medium mb-4">Mes objectifs</h1>
        <p
          className="text-justify all-caps"
          style={{ fontSize: "18px", color: "#EBE7E5", fontWeight: "300" }}
        >
          « Je ne me suis jamais endormi un soir de ma vie sans apprendre quelque chose »,
          disait Charles Aznavour.
          <br />
          Dans cet esprit, je cherche chaque jour à progresser dans les différents domaines du multimédia, à affiner mon sens du design et à partager des créations qui inspirent.
        </p>
        <p
          className="text-justify all-caps"
          style={{ fontSize: "18px", color: "#EBE7E5", fontWeight: "300" }}
        >
          Mon ambition est de bâtir des projets qui reflètent ma vision, tout en restant attentif aux détails et à l’harmonie visuelle. Chaque réalisation est une étape vers un portfolio plus riche, plus professionnel et toujours en évolution.
        </p>
      </div>

      {/* Image ou visuel à droite */}
      <div className="col-md-7 px-3">
        <img
          src="/img/mesobjectif.jpg"
          alt="Visuel artistique"
          className="img-fluid w-100"
          style={{ objectFit: "cover", height: "100%" }}
        />
      </div>
    </div>
  </div>
</section>
      <DerniersProjets data={projets} />

<section className="bg-brown text-white py-5 mt-5">
  <div className="container-fluid">
    <div className="row px-4">
      {/* Bloc texte */}
      <div className="col-12 col-md-6">
        <h1 className="text-uppercase fw-medium mb-3">Suivez-moi</h1>
        <p
          className="text-justify all-caps"
          style={{ fontWeight: "300" }}
        >
          Je partage régulièrement mes travaux de design sur Instagram et mes actualités professionnelles ainsi que mes projets de développement web sur LinkedIn. Mon ambition est de mettre en avant mon travail et mes créations auprès d'un maximum de personnes.
        </p>
      </div>
    </div>

    {/* Visuels ou blocs */}
    <div className="row mt-2 gx-4 gy-4 px-4">
      {/* Bloc Instagram */}
      <div className="col-md-6">
        <a
          href="https://www.instagram.com/abdouble7/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-block"
          style={{
            backgroundImage: "url('/img/instagram.png')",
          }}
        >
          <span className="overlay-text fw-medium all-caps">Instagram</span>
        </a>
      </div>

      {/* Bloc LinkedIn */}
      <div className="col-md-6">
        <a
          href="https://www.linkedin.com/in/abi-vigneswaran-9b5552294/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-block"
          style={{
            backgroundImage: "url('/img/Linkedin.png')",
          }}
        >
          <span className="overlay-text fw-medium all-caps">LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
</section>

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


    </>
  );
}
