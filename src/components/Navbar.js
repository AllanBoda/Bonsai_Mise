import React from 'react';
import './styles/Navbar.css';
import { FaShoppingCart,FaUserNinja } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src="./images/bonsai_mise.png" alt="Logo Bonsai" className="logo-image" />
        <h1 className="logo-text">Bonsai-Mise</h1>
      </div>
      <input type="text" placeholder="Buscar" className="search-bar" />
      <div className="account-section">
        <span className="myaccount"><FaUserNinja />Minha conta</span>
        <div className="cart">
          0 itens <br/>
          R$ 0,00
        <FaShoppingCart className="cartImage" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
