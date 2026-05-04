export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
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
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                Mezcla
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                Fechas
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                Galeria
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>

            <li className="nav-item ms-lg-2 mx-4">
              <a className="nav-link btn_reservas" href="#">
                Reservas
                <i className="bi bi-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
