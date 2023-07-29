import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About</h2>
   <NavLink to={"/"}>
   <button>Go to Home</button>
   </NavLink>
    </div>
  )
}

export default About
