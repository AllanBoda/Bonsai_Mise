import React from 'react';
import './styles/FilterSidebar.css';

const FilterSidebar = () => {
  return (
    <div className="sidebar">
      <h3>Filtro Item</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <h3>Filtro Preço</h3>
      <ul>
        <li>Preço 1</li>
        <li>Preço 2</li>
        <li>Preço 3</li>
        <li>Preço 4</li>
      </ul>
    </div>
  );
};

export default FilterSidebar;
