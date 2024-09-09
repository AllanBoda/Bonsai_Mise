import React from 'react';
import './styles/ProductCard.css';

const ProductCard = () => {
  return (
    <div className="card">
      <div className="image"></div>
      <div className="product-info">
        <h3>Nome do Item</h3>
        <p>R$ 0,00</p>
        <p>Breve descrição</p>
        <button className="button">Comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;
