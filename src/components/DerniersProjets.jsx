import React, { useEffect, useState } from "react";

export default function DerniersProjets() {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    fetch("/data/projets.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur de chargement JSON :", err));
  }, []);

  const next = () => {
    if (startIndex + visibleCount < data.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleProjects = data.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="p-2 bg-white mt-5">
      <div className="container-fluid">
        {/* Header + boutons */}
        <div className="row align-items-center mb-4">
          <div className="col-12 col-md-7">
            <h6 className="fw-bold">PORTFOLIO</h6>
            <h1 className="fw-medium text-uppercase">
              Découvrez mes créations récentes
            </h1>
            <p className="all-caps mt-3">
              Voici mes derniers projets, reflétant créativité, innovation et
              passion à travers chacun de mes travaux
            </p>
          </div>

          {/* Boutons visibles uniquement à partir de md */}
          <div className="col-12 col-md-5 d-none d-md-flex justify-content-end gap-3 mt-3 mt-md-0">
            <button
              onClick={prev}
              className="btn btn-green-circle"
              disabled={startIndex === 0}
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <button
              onClick={next}
              className="btn btn-green-circle"
              disabled={startIndex + visibleCount >= data.length}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Grille de 5 cartes */}
        <div className="row gx-4 gy-5">
          {visibleProjects.map((item) => {
            const first = item.projets && item.projets[0];
            const nom = first?.nom || "Projet";
            const img = first?.imageduprojet || item.image; // fallback si jamais manquant

            return (
              <div
                key={item.id}
                className="col-5th d-flex flex-column align-items-center h-100"
              >
                {/* Carte grise avec image centrée */}
                <div className="card bg-light border-0 rounded-0 text-center p-4 w-100 h-100">
                  <div className="d-flex align-items-center justify-content-center w-100 projet-image-container">
                    <img src={img} alt={nom} className="img-fluid" />
                  </div>
                </div>

                {/* Nom du projet en dessous */}
                <div className="mt-3 text-start w-100">
                  <h6 className="fw-regular text-uppercase">{nom}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
