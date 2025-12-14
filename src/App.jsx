// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}
