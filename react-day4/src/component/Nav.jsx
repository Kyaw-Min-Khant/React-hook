import React from 'react'
import { NavLink } from 'react-router-dom';
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="flex justify-start">
        <li className=" mr-5">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className=" mr-5">
          <NavLink to="/About">About</NavLink>
        </li>
        <li className=" mr-5">
          <NavLink to="/Contant">Contant</NavLink>
        </li>
        <li className=" mr-5">
          <NavLink to="/Services">Services</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav
