import React from "react";
import "./navbar.scss";

const navLinks = ["Products", "About Us", "Claims", "Contact"];

const Navbar: React.FC = () => {
  return (
    <nav className="lp-nav">
      <a href="/" className="lp-nav__logo">
        <div className="lp-nav__logo-text">
          Proffer Insurance<span>Smart Risk Solutions</span>
        </div>
      </a>

      <ul className="lp-nav__links">
        {navLinks.map((l) => (
          <li key={l}>
            <a href="#">{l}</a>
          </li>
        ))}
      </ul>

      <button className="lp-nav__cta">Get a Quote</button>
    </nav>
  );
};

export default Navbar;