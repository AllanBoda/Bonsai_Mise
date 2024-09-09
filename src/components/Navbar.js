import React from 'react';
import './styles/Navbar.css';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src="./images/logo_bonsai.png" alt="Logo Bonsai" className="logo-image" />
        <h1 className="logo-text">Bonsai-Mise</h1>
      </div>
      <input type="text" placeholder="Buscar" className="search-bar" />
      <div className="account-section">
        <span>Minha conta</span>
        <div className="cart">
        <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
