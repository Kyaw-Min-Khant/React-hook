import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Chicken = () => {
  const [meal,setMeal]=useState([]);
  const [fish,setFish]=useState("")
  const run=async()=>{
    const fetchData = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    const {meals}=await fetchData.json();
    setMeal(meals);
     const dataAccept=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
     const fishData=await dataAccept.json();
     setFish(fishData.meals);  
  }
  useEffect(()=>{run()},[])
     const except = (text, maxlength = 30) => {
       if (text.length > maxlength) {
         return text.substring(0, maxlength) + "...";
       }
       return text;
     };
  return (
    <div className="">
      <div className="" style={{ overflow: "hidden" }}>
        <h3 className="fw-bold d-flex justify-content-between my-3 text-primary  border-start border-5 ps-3 border-primary ">
          <span className="">Ingredient with chicken</span>
          <i className="ri-arrow-right-line me-5 ri-xl animate__fadeOutRight animate__animated animate__delay-3s animate__slower animate__infinite	infinite"></i>
        </h3>
        <div
          className="row flex-row justify-content-between align-items-center flex-nowrap scroll py-3 mb-3"
          id={Math.random()}
        >
          {meal.map((each) => (
            <div className="col-6 col-md-3 col-xl-2 " key={each.idMeal}>
              <div
                className="card  border-0 shadow-sm overflow-hidden"
                id="card"
              >
                <div className="overflow-hidden ps">
                  <img
                    src={each.strMealThumb}
                    alt=""
                    className="card-img-top w-100 fish-card overflow-hidden"
                  />

                  <Link to={`/Details/${each.idMeal}`}>
                    <span className="image-control bg-primary rounded-circle animate__bounce animate__animated animate__delay-2s animate__slow animate__infinite">
                      <i className="ri-product-hunt-line d-block fs-3 mx-auto text-center"></i>
                    </span>
                  </Link>
                </div>
                <div className="card-body p-2 mt-1" style={{ height: "70px" }}>
                  <h6 className="fw-bold text-primary fs-6">
                    {except(each.strMeal)}
                  </h6>
                </div>
                <button className="mb-2 mt-1 btn btn-sm btn-outline-primary d-block mx-auto">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h3 className="fw-bold my-3 text-primary d-flex justify-content-between  border-start border-5 ps-3 border-primary">
          <span className="">Ingredient with fishes</span>
          <i className="ri-arrow-right-line me-5 ri-xl animate__fadeOutRight animate__animated animate__delay-3s animate__slower animate__infinite	infinite"></i>
        </h3>
        <div
          className="row flex-row justify-content-between align-items-center flex-nowrap scroll py-3 mb-3"
          id={Math.random()}
        >
          {[...fish].map((each) => (
            <div className="col-6 col-md-3 col-xl-2 " key={each.idMeal}>
              <div
                className="card  border-0 shadow-sm overflow-hidden"
                id="card"
              >
                <div className=" overflow-hidden ps">
                  <img
                    src={each.strMealThumb}
                    alt=""
                    className="card-img-top w-100 fish-card overflow-hidden"
                  />

                  <Link to={`/Details/${each.idMeal}`}>
                    <span className="image-control bg-primary rounded-circle animate__bounce animate__animated animate__delay-2s animate__slow animate__infinite">
                      <i className="ri-product-hunt-line d-block fs-3 mx-auto text-center"></i>
                    </span>
                  </Link>
                </div>
                <div className="card-body p-2 mt-1" style={{ height: "70px" }}>
                  <h6 className="fw-bold text-primary fs-6">
                    {except(each.strMeal)}
                  </h6>
                </div>
                <button className="mb-2 mt-1 btn btn-sm btn-outline-primary d-block mx-auto">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chicken
