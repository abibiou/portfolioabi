import React, { useEffect, useState } from "react";

const SectionImages = () => {
  const images = [
  "/img/theweeknd.jpg",
  "/img/bob.jpg",
  "/img/vetement.png",
  "/img/1jour1marque.png",
  "/img/affichesport.jpg",
  "/img/logo.png",
  "/img/siteweb.png",
  "/img/thisisspotify.jpg",
  "/img/mag.png",
  "/img/afficheconcert.png",
  "/img/hamza.png",
  "/img/jolagreen.png",
  "img/bobpatrick.png",
  "img/bdlmtiakola.png",
  "img/badbunny.png",
  "img/kyky2bondy.png",
  "img/leonmarchand.png",
  "img/sanai.png",
  "img/simpson.png"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // change toutes les 1 seconde

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  return (
    <div className="bg-secondary text-white p-4 flex-fill d-flex justify-content-center align-items-center">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="img-fluid rounded-0"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
    </div>
  );
};

export default SectionImages;
