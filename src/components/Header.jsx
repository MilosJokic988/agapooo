import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-olive">
        <div className="container">
          <NavLink
            className="navbar-brand d-flex align-items-center"
            to="/"
          >
            <img
              src="/logo.jpeg"
              alt="Agapo logo"
              style={{ width: "32px", height: "32px", marginRight: "8px" }}
            />
            Agapo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Početna
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usluge">
                  Usluge
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kontakt">
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
