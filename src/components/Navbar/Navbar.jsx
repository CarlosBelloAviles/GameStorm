import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "reactfire";
import "./Navbar.css";
import Search from "../Search/Search";


const Navbar = () => {
  const { data: user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <Link className="logo" to="/">
            🎮 GameStorm
          </Link>
        </div>
          <Search/>
         <div className="navbar-right-wrapper">
          {/* Botón hamburguesa (solo móvil) */}
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Links (desktop visibles, móvil toggle) */}
          <div className={`navbar-right ${isOpen ? "open" : ""}`}>
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
        </div>

        {/* <div className="navbar-right">
          
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
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
