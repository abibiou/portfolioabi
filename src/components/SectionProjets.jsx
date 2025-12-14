import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SectionProjets = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    fetch("/data/travaux.json")
      .then((res) => res.json())
      .then((data) => setProjets(data))
      .catch((err) => console.error("Erreur de chargement JSON :", err));
  }, []);

  return (
    <section className="p-2 bg-white">
      <div className="container-fluid">
        <div className="row gx-4 gy-5">
          {projets.slice(0, 10).map((item) => (
            <div
              key={item.id}
              className="col-5th d-flex flex-column align-items-center h-100"
            >
              {/* Carte cliquable */}
              <Link
                to={`/projets/${item.id}`}
                className="card bg-light border-0 rounded-0 text-center p-4 w-100 h-100 text-decoration-none"
              >
                <div className="d-flex align-items-center justify-content-center w-100 projet-image-container">
                  <img src={item.image} alt={item.type} className="img-fluid" />
                </div>
              </Link>

              {/* Type en dessous */}
              <div className="mt-3 text-start w-100">
                <h6 className="fw-regular text-uppercase">{item.type}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProjets;
