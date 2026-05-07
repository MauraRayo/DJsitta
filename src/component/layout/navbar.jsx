export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand logo" href="#">
          <i className="bi bi-disc"></i>SITTA
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-4">
              <a className="nav-link active" href="#about">
                About
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link" href="#mixes">
                Mezcla
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link" href="#date">
                Fechas
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link" href="#gallery">
                Galería
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>

            <li className="nav-item ms-lg-2 mx-4">
              <a className="nav-link btn_reservas" href="#contact">
                Reservas <i className="bi bi-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
