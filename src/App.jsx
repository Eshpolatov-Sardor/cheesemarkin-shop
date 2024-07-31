import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Products from './products/Products';
import Card from './products/Card';
import Footer from './components/Footer';
import Home from './products/Home';
import ProductPag from './products/ProductPag';
import ProductCart from './products/ProductCart';

const App = () => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <React.Fragment>
      <Header length={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product-pag" element={<ProductPag addToCart={addToCart} />} />
        <Route path="/item" element={<Products />} />
        <Route path="/cart" element={<Card cart={cart} />} />
        <Route path="/product-cart" element={<ProductCart />} />
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default App;
