import React from "react";
import "../pages/about.css";

export default function About() {
  return (
    <section className="py-5 about">
      <div className="container">
        <div className="row align-items-center">
          {/* Columna izquierda */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3 ">SOBRE SITTA</h2>

            <p className="mb-4 info">
              DJ especializado en mezclas electrónicas, eventos privados y
              sesiones exclusivas. Experiencia en clubs, festivales y
              producciones personalizadas. DJ especializado en mezclas
              electrónicas, eventos privados y sesiones exclusivas. Experiencia
              en clubs, festivales y producciones personalizadas. DJ
              especializado en mezclas electrónicas, eventos privados y sesiones
              exclusivas. Experiencia en clubs, festivales y producciones
              personalizadas. DJ especializado en mezclas electrónicas, eventos
              privados y sesiones exclusivas. Experiencia en clubs, festivales y
              producciones personalizadas. DJ especializado en mezclas
              electrónicas, eventos privados y sesiones exclusivas. Experiencia
              en clubs, festivales y producciones personalizadas. DJ
              especializado en mezclas electrónicas, eventos privados y sesiones
              exclusivas. Experiencia en clubs, festivales y producciones
              personalizadas.
            </p>

            <div className="d-flex gap-3 ">
              <a className="btn" href="#">
                <i className="bi bi-youtube"></i>
              </a>

              <a className="btn " href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a className="btn" href="#">
                <i className="bi bi-disc"></i>
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="col-md-6  mt-4 mt-md-0 stats-box">
            <div className="statistics">
              <p>2+ </p>
              <span>Años de experiencia</span>
            </div>
            <div className="statistics">
              <p>50+ </p>
              <span>Show en 2025</span>
            </div>
            <div className="statistics">
              <p>10K </p>
              <span>Seguidores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
