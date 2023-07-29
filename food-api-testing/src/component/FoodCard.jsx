import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const FoodCard = () => {

         const words = (text, maxlength= 40) => {
           if (text.length > maxlength) {
             return text.substring(0, maxlength) + "...";
           }
           return text;
         };
  const [meals,setMeal]=useState("");
  const run=async()=>{
    const foodApi = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const api=await foodApi.json();
    setMeal(api.categories);
  };
  useEffect(()=>{
    run()
  },[])

  return (
    <div className="">
      <h3 className="fw-bold my-1 text-primary d-flex justify-content-between me-5 border-start border-5 ps-3 border-primary">
        <span className="">Main Dishes</span>
        <i className="ri-arrow-right-line animate__fadeOutRight animate__animated animate__delay-3s animate__slower animate__infinite	infinite ri-xl"></i>
      </h3>
      <div className="row flex-row justify-content-between align-items-center flex-nowrap scroll py-4">
        {[...meals].map((meal) => (
          <div className="col-6 col-md-3 col-xl-2" key={meal.idCategory}>
            <div className="card  border-0 shadow-sm" id="card">
              <div className=" ps">
                <img
                  src={meal.strCategoryThumb}
                  alt=""
                  className="card-img-top w-100 pt-2 card-img"
                />
              </div>
              <div className="card-body p-2 pt-3" style={{ height: "130px" }}>
                <h6 className="fw-bold text-primary">{meal.strCategory}</h6>
                <p className="text-black-50 small text-justify mb-1">
                  {words(meal.strCategoryDescription)}
                </p>
              </div>
              <button className="mb-2 mt-0 btn btn-sm btn-outline-primary d-block mx-auto">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodCard
