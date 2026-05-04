import React from "react";
import aboutImg from "../../assets/about.jpg";

export default function Home() {
  return (
    <section className="py-5 home">
      <div className="container">
        <div className="row align-items-center">
          {/* Columna izquierda */}
          <div className="col-md-6">
            <span className="title">DJ / Productora</span>
            <h1 className="fw-bold mb-3 name">SITTA</h1>

            <p className="mb-4 description">
              DJ especializado en mezclas electrónicas, eventos privados y
              sesiones exclusivas. Experiencia en clubs, festivales y
              producciones personalizadas.
            </p>

            <div className="d-flex gap-3">
              <a className="btn btn-primary" href="#">
                Escuchar
              </a>

              <a className="btn btn-outline-light" href="#">
                Contacto
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={aboutImg}
              alt="DJ Sitta"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
