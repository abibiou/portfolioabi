import React, { useEffect, useState } from "react";

const SoftwareGrid = () => {
  const [softwareData, setSoftwareData] = useState([]);

  useEffect(() => {
    fetch("/data/software.json")
      .then((res) => res.json())
      .then((data) => setSoftwareData(data))
      .catch((err) => console.error("Erreur de chargement du JSON :", err));
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {softwareData.map((item, index) => (
            <div key={index} className="col-6 col-md-3 mb-4 text-start">
              <img
                src={item.logo}
                alt={item.name}
                className="logo-hover" // ✅ applique la classe définie dans index.css
              />
             <p className="mt-2 mb-0" style={{ fontSize: "13px" }}>
  {item.name}
</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareGrid;
