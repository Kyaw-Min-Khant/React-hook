import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './component/Nav'
import Services from './component/Services';
import Home from './component/Home';
import About from './component/About';
import Contant from './component/Contant';
import Error from './component/Error';

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={< About/>} />
    <Route path='/Contant' element={<Contant/>}/>
        <Route path="/Services" element={<Services />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App

