import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [travaux, setTravaux] = useState([]);

  useEffect(() => {
    fetch("/data/travaux.json")
      .then((res) => res.json())
      .then((data) => setTravaux(data));
  }, []);

  return (
    <div className="projects-page">
      <h1 className="fw-bold mb-4 all-caps px-4 mt-5">Mes Projets</h1>
      <p className="px-4 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sit odit quas quam deleniti voluptas, molestiae earum nam dolor at! Eius veniam repellendus earum velit iusto qui adipisci consequatur voluptatibus.
      </p>

      {/* Ligne noire stylisée */}
      <div className="custom-line mt-5"></div>

      <div className="container-fluid row mt-5">
        {travaux.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 border-0 position-relative">
              <Link to={`/projets/${item.id}`} className="text-decoration-none">
                <img
                  src={item.image}
                  alt={item.type}
                  className="card-img-top"
                  style={{ height: "550px", objectFit: "cover", borderRadius: "0" }}
                />
                {/* Overlay au hover */}
                <div className="overlay d-flex align-items-center justify-content-center">
                  <h5 className="text-white fw-bold">{item.type}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
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

export default Projects;
