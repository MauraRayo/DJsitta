import React from "react";
import "../pages/date.css";

export default function Date() {
  const dates = [
    {
      title: "BEC: Bilbao Exhibition Centre",
      location: "Bilbao",
      date: "28/04/2026",
      ticketType: "Entrada Gratis",
    },
    {
      title: "BEC: Bilbao Exhibition Centre",
      location: "Bilbao",
      date: "28/04/2026",
      ticketType: "Comprar Entrada",
    },
    {
      title: "BEC: Bilbao Exhibition Centre",
      location: "Bilbao",
      date: "28/04/2026",
      ticketType: "Comprar Entrada",
    },
  ];

  return (
    <section className="dates-container py-5" id="date">
      <h2 className="mb-4 title">PRÓXIMAS FECHAS</h2>

      {dates.map((date, index) => (
        <div
          className="date-card d-flex justify-content-between align-items-center mb-3 p-3 rounded"
          key={index}
        >
          <h2 className="date-number m-0">{date.date}</h2>

          <div className="date-info">
            <h3 className="event-title m-0">{date.title}</h3>
            <span className="event-location">
              <i class="bi bi-geo-alt-fill  me-1"></i>
              {date.location}
            </span>
          </div>

          <a className="btn btn-ticket" href="#">
            <i className="bi bi-lightning-charge-fill me-2"></i>
            {date.ticketType}
          </a>
        </div>
      ))}
    </section>
  );
}
