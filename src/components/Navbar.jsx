import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">🎮 GameStorm</h1>
        </div>
        <ul className="navbar-menu">
          <li><button>Nosotros</button></li>
          <li><button>Contacto</button></li>
        </ul>
        <div className="navbar-right">
          <button className="register-btn">Regístrate</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
