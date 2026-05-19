import React from "react";
import "../pages/about.css";

export default function About() {
  return (
    <section className="py-5 about" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-3 ">SOBRE SITTA</h2>

            <p className="mb-4 info">
              Soy DJ con dos años de trayectoria, especializándome en crear
              experiencias musicales únicas para eventos privados, bodas,
              comidas y celebraciones de todo tipo.<br></br>
              Mi sello es la mezcla: desde los clásicos atemporales de los 60s,
              70s, 80s y 90s hasta la electrónica más actual, pasando por el
              reggaeton —tanto el clásico que nos marcó como los hits de hoy.
              <br></br>
              Me adapto al ambiente y a la gente, porque cada evento merece su
              propia banda sonora. Con sede en Bilbao, he llevado mi música más
              allá de las fronteras, pinchando también en Malta. Si buscas a
              alguien que haga bailar a todos estás en el lugar correcto.
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
              <p>2K </p>
              <span>Seguidores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
