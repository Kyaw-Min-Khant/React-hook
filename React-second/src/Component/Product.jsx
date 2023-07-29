import React, { useState,useEffect } from 'react'
import Productcard from './Productcard';

const Product =({products})=> {
  useEffect(() => console.log(products), []);
  return (
    <div className="flex justify-between flex-wrap gap-3">
      {products.map((el)=>{
        return(
            <Productcard key={el.id} products={el}/>
        )
      })}
    </div>
  )
}

export default Product
