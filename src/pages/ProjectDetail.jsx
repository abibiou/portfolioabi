import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const [projet, setProjet] = useState(null);

  useEffect(() => {
    fetch("/data/travaux.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProjet(found);
      });
  }, [id]);

  if (!projet) return <p>Chargement...</p>;

  return (
    <div className="container-fluid px-5">
      <div className="row" style={{ minHeight: "400px" }}>
        {/* Colonne gauche : context centré */}

        <div className="col-md-5 d-flex flex-column justify-content-center">
          <Link to="/projets" className="btn-retour mt-4 py-2 border-0">
            ← Retour
          </Link>
          <h1 className="fw-medium mt-4 all-caps">{projet.type}</h1>
          <p className="text-justify all-caps mt-4">{projet.context}</p>
        </div>

        <div className="col-md-1"></div>

{/* Colonne droite : projets avec scroll interne */}
<div
  className="col-md-6 scroll-hidden p-5 p-sm-5 px-3 px-sm-5"
  style={{
    maxHeight: "600px",
    overflowY: "auto",
    paddingRight: "10px",
  }}
>
  <div className="row">
    {projet.projets.map((p, idx) => (
      <div className="col-12 mb-5" key={idx}>
        {/* Titre au-dessus */}
        <h6 className="fw-medium all-caps mb-3">{p.nom}</h6>

        {/* Image ou vidéo */}
        {p.videoUrl ? (
          <div className="ratio ratio-16x9">
            <iframe
              src={p.videoUrl}
              title={p.nom}
              allowFullScreen
              style={{
                border: "none",
              }}
            ></iframe>
          </div>
        ) : (
          <img
            src={p.imageduprojet}
            alt={p.nom}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              border: "none",
              boxShadow: "none",
            }}
          />
        )}
      </div>
    ))}
  </div>
</div>

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
    </div>
    
  );
};

export default ProjectDetail;
