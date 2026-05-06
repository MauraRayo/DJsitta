import React from "react";
import "../pages/gallery.css";
import img1 from "../../assets/img/dj1.jpg";
import img2 from "../../assets/img/dj2.jpg";
import img3 from "../../assets/img/dj3.jpg";
import img4 from "../../assets/img/dj4.jpg";
import img5 from "../../assets/img/dj5.jpg";
import img6 from "../../assets/img/dj6.jpg";

export default function gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="gallery-container container py-5" id="gallery">
      <h2 className="mb-3  title">Galeria</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="gallery-item big">
            <img src={images[0]} alt="Foto 1" />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column gap-3">
          <div className="gallery-item vertical">
            <img src={images[1]} alt="Foto 2" />
          </div>
          <div className="gallery-item vertical">
            <img src={images[2]} alt="Foto 3" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="gallery-item small">
            <img src={images[3]} alt="Foto 4" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="gallery-item small">
            <img src={images[4]} alt="Foto 5" />
          </div>
        </div>

        <div className="col-md-4">
          <div className="gallery-item small">
            <img src={images[5]} alt="Foto 6" />
          </div>
        </div>
      </div>
    </section>
  );
}
