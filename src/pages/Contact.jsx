import React from "react";
import "./Contact.css";

export default function Kontakt() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Ulica+Pohorska+bb,+Podgorica,+Crna+Gora";

  return (
    <div className="page-container">
      <h1>Kontaktirajte nas</h1>
      <p>
        <strong>Tijana Djukic</strong>
      </p>
      <p>
        Adresa:{" "}
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="address-link">
          Ulica Pohorska bb, Podgorica, Crna Gora
        </a>
      </p>
      <p>Telefon: +382 67 123 456</p>
    </div>
  );
}
