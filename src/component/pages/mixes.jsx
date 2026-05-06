import React from "react";
import "../pages/mixes.css";

export default function Mezcla() {
  const mixes = [
    {
      title: "Summer vibes 2026",
      genre: "Deep House",
      duration: "62:30",
      listeners: "3.45K",
    },
    {
      title: "Summer vibes 2026",
      genre: "Deep House",
      duration: "62:30",
      listeners: "3.45K",
    },
    {
      title: "Summer vibes 2026",
      genre: "Deep House",
      duration: "62:30",
      listeners: "3.45K",
    },
  ];

  return (
    <section className="mixes-container py-5" id="mixes">
      <h2 className="mb-3  title">ÚLTIMAS MEZCLAS</h2>

      {mixes.map((mix, index) => (
        <div className="mix-card d-flex gap-4 mb-3 p-3 rounded" key={index}>
          <div className="d-flex align-items-center">
            <i className="bi bi-disc me-3 disc-icon"></i>
          </div>

          <div className="mix-info">
            <h3 className="mix-title m-0">{mix.title}</h3>
            <span className="mix-genre">{mix.genre}</span>
          </div>

          <div className="text-end">
            <p className="m-0 mix-duration">{mix.duration}</p>
            <p className="m-0 listeners">{mix.listeners} Oyentes</p>
          </div>
        </div>
      ))}
    </section>
  );
}
