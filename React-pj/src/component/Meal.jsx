import React, { useEffect, useState } from 'react'

const Meal = () => {
    const [food,setFood]=useState([]);
        useEffect(() => {
          run();
        }, []);
    const run=async()=>{
   const fetchapi = await fetch(
     "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
   );
   const {meals} =await fetchapi.json();
   setFood(meals);
    }

  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}

export default Meal


