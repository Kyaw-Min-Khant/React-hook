import React from 'react'
import FoodCard from "./FoodCard.jsx";
import Chicken from "./Chickencard.jsx";
import Secondesection from './Secondesection.jsx';

const Card = () => {
  return (
    <div className="container">
      <div>
          <FoodCard  />
      </div>
          <Chicken />
    </div>
  );
}

export default Card
