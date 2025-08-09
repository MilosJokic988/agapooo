import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer bg-olive text-center py-3">
      <p className="mb-0">
        © {new Date().getFullYear()} Agapo Frizerski Salon. Sva prava zadržana.
      </p>
    </footer>
  );
}
