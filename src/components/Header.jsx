import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// ⚡ Assure-toi d'avoir importé Bootstrap JS dans ton projet (index.js ou App.js) :
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vérifie si on est sur /projets ou /projets/:id
  const isProjectsPage = location.pathname.startsWith("/projets");

  return (
<nav
  className={`navbar navbar-expand-lg sticky-top ${
    scrolled ? "navbar-scrolled" : "navbar-transparent"
  } ${isProjectsPage ? "navbar-project" : ""}`}
>
  <div className="container-fluid mx-5">
    <Link className="navbar-brand fw-bold text-dark" to="/">
      ABI
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#nav"
      aria-controls="nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div id="nav" className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto gap-4">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/projets">Mes projets</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/about">Compétences</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}
