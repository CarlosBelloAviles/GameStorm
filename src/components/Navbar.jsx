import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <Link className="logo" to="/">
            🎮 GameStorm
          </Link>
          <NavLink
            className={({ isActive }) => (isActive ? "Active" : "Inactive")}
            to="/Favorites"
          >
            Favoritos
          </NavLink>
        </div>

        <ul className="navbar-menu">
          <li>
            <button>Nosotros</button>
          </li>
          <li>
            <button>Contacto</button>
          </li>
        </ul>
        <div className="navbar-right">
          <button className="register-btn">Regístrate</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
