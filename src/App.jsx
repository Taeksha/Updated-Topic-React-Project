import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/products';
import Men from './pages/Men';
import Cart from './components/Cart';
import About from './components/About';
import Kids from './components/About';

const App = () => {
  return (
   <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/products" element={<Products />} />
        <Route path="/About" element={<Kids/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </>
  );
};

export default App;