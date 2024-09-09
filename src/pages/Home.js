import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import Footer from '../components/Footer';
import './styles/Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <FilterSidebar />
        <div className="product-grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
