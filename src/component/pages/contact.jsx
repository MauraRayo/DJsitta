import React from "react";
import "../pages/contact.css";

export default function ContactForm() {
  const eventOptions = [
    "Boda",
    "Fiesta privada",
    "Discoteca",
    "Cumpleaños",
    "Evento corporativo",
  ];

  return (
    <section className="contact-container py-5" id="contact">
      <h2 className="mb-3 title">Contacto</h2>
      <p className="col-md-6 subtitle">
        Reserva a DJSitta para tu próximo evento. Rellena el formulario y te
        responderé lo antes posible.
      </p>

      <form className="contact-form col-md-6" id="contact">
        <div className="row-form">
          <input type="text" className="input" placeholder="Nombre" />
          <input type="email" className="input" placeholder="tu@email.com" />
        </div>

        <div className="row-form">
          <select className="input">
            <option selected>Tipo de evento</option>
            <option value="1">Boda</option>
            <option value="2">Fiesta privada</option>
            <option value="3">Discoteca</option>
            <option value="4">Cumpleaños</option>
            <option value="5">Evento corporativo</option>
          </select>

          <input type="date" className="input" />
        </div>

        {/* Mensaje */}
        <textarea
          className="textarea"
          rows="4"
          placeholder="Cuéntame más sobre tu evento..."
        ></textarea>

        <button type="submit" className="btn btn-send">
          Enviar <span className="arrow">›</span>
        </button>
      </form>
    </section>
  );
}
