import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-inner">
        {/* Makaze SVG */}
        <svg
          className="scissors"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          stroke="#f5f5dc"
          strokeWidth="2"
        >
          <circle cx="16" cy="48" r="8" />
          <circle cx="48" cy="48" r="8" />
          <line x1="16" y1="48" x2="32" y2="16" />
          <line x1="48" y1="48" x2="32" y2="16" />
          <line x1="32" y1="16" x2="40" y2="32" />
          <line x1="32" y1="16" x2="24" y2="32" />
        </svg>

        {/* Češalj SVG */}
        <svg
          className="comb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          stroke="#f5f5dc"
          strokeWidth="2"
        >
          <rect x="8" y="20" width="48" height="8" rx="2" />
          <line x1="12" y1="28" x2="12" y2="44" />
          <line x1="16" y1="28" x2="16" y2="44" />
          <line x1="20" y1="28" x2="20" y2="44" />
          <line x1="24" y1="28" x2="24" y2="44" />
          <line x1="28" y1="28" x2="28" y2="44" />
          <line x1="32" y1="28" x2="32" y2="44" />
          <line x1="36" y1="28" x2="36" y2="44" />
          <line x1="40" y1="28" x2="40" y2="44" />
          <line x1="44" y1="28" x2="44" y2="44" />
          <line x1="48" y1="28" x2="48" y2="44" />
        </svg>
      </div>
      <h2 className="loader-text">Agapo</h2>
    </div>
  );
}
