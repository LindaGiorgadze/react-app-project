import './App.css';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import Product from './components/Product';


export default function App() {

  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/:productId" element={<Product />} />
      </Routes>

      
    </div>
  );
}

