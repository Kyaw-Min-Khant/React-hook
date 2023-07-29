import React from 'react'
import Navs from "./component/Nav.jsx";
import Card from "./component/Card.jsx";
import "remixicon/fonts/remixicon.css";
import Carousel from './component/Carousel.jsx';
import * as bootstrap from "bootstrap";
import Search from './component/Search.jsx';
import Footer from './component/Footer.jsx';
import Chicekenpage from './component/Fishpage.jsx';
import Fishpage from './component/Chickensection.jsx';
import Details from './component/Details.jsx';
import Maindash from './component/Maindash.jsx';
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navs />
      <Routes>
          <Route path='/' element={<Carousel/>}/>
        <Route path="/chickenpage" element={<Chicekenpage />} />
        <Route path="/fishpage" element={<Fishpage />} />
        <Route path="/Maindash" element={<Maindash />} />
        <Route path="*" element={<Carousel />}/>
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Search/:sea" element={<Search />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App

