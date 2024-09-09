import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h4>Fale conosco</h4>
        <p>Telefone: +XXX XXXX-XXXX</p>
      </div>
      <div>
        <h4>Sobre</h4>
        <p>Política de Privacidade</p>
        <p>Termos e Condições</p>
      </div>
      <div>
        <h4>Minha conta</h4>
        <p>Histórico de pedidos</p>
      </div>
    </div>
  );
};

export default Footer;
