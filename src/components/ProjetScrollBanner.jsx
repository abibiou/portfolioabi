import React from "react";

const ProjectsScrollBanner = ({ direction = "left" }) => {
  // Liste des images que tu veux afficher
  const images = [
    "/img/theweeknd.jpg",
    "/img/bdlmtiakola.png",
    "/img/dembele.png",
    "/img/bob.jpg",
    "/img/theodora.png",
    "/img/hamza.png",
    "/img/affichesport.jpg",
    "/img/thisisspotify.jpg",
  ];

  // Dupliquer la piste pour un scroll infini
  const track = [...images, ...images];

  return (
    <div className="scroll-banner">
      <div
        className={`scroll-track ${
          direction === "right" ? "scroll-right" : "scroll-left"
        }`}
      >
        {track.map((src, idx) => (
          <div className="scroll-item" key={idx}>
            <img src={src} alt={`banner-${idx}`} className="scroll-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsScrollBanner;
