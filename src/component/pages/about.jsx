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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
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
              <p>10K </p>
              <span>Seguidores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
