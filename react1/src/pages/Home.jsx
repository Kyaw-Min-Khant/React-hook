import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <NavLink to={"/About"}>
      <button>Go to About</button>
      </NavLink>
    </div>
  )
}

export default Home
