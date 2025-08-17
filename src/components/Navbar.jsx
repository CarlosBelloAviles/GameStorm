import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "reactfire";


const Navbar = () => {
  const { data: user } = useUser();
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
          
          {user ? (
            <>
              <NavLink
                className={({ isActive }) => (isActive ? "Active" : "Inactive")}
                to="admin/favorites"
              >
                Favoritos
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "Active" : "Inactive")}
                to="/admin/usuario"
              >
                Mi Perfil
              </NavLink>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
