import React from "react";
import aboutImg from "../../assets/about.jpg";

export default function Home() {
  return (
    <section className="py-5 home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6  card-izq">
            <span className="title">DJ / Productora</span>
            <h1 className="mb-3 name">
              <span className="lyric">SI</span>TTA
            </h1>

            <p className="mb-4 description">
              DJ con amplia trayectoria en reggaeton y música latina, fusionando
              los grandes clásicos de los 80s y 90s con los hits más actuales.
              Disponible para eventos privados, celebraciones y producciones
              personalizadas.
            </p>

            <div className="d-flex gap-4">
              <a className="btn btn-listen" href="#">
                Escuchar
              </a>

              <a className="btn btn-contact" href="#">
                Contacto
              </a>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <img src={aboutImg} alt="DJ Sitta" className="img-fluid img-der" />
          </div>
        </div>
      </div>
    </section>
  );
}
