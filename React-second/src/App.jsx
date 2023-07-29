import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Details from './Component/Details';
import { useState,useEffect } from 'react';
const App = () => {
      const [items, setItems] = useState([]);
      useEffect(() => {
        run();
      }, []);
      const run = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();
        console.log(products);
        setItems(products);
        console.log(items);
      };
  return (
    <div>
      <Navbar setItems={setItems} items={items} />
      <Routes>
        <Route path="/" element={<Product products={items}/>} />
        <Route path="/Details/:id" element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App
