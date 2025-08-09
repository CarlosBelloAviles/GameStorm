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
        </div>

        <div className="navbar-menu">
          <input
            type="text"
            placeholder="Buscar juegos..."
            className="search-input"
          />
          <button className="InputButton">buscar</button>
        </div>
        <div className="navbar-right">
          <NavLink
            className={({ isActive }) => (isActive ? "Active" : "Inactive")}
            to="admin/favorites"
          >
            Favoritos
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "Active" : "Inactive")}
            to="/auth/login"
          >
            Login
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "Active" : "Inactive")}
            to="/auth/register"
          >
            Register
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "Active" : "Inactive")}
            to="/admin/usuario"
          >
            Mi Perfil
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
