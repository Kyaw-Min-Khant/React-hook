import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Chicekenpage = () => {
    // const addCheck=(key)=>{
    //     if(event.target.id==key){
    //      return setCheck(!check)
    //     }
    // }
    const [chicken,setChicken]=useState("");
    const [check,setCheck]=useState(true);
    const run=async()=>{
            const fetchData = await fetch(
              "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
            );
            const data = await fetchData.json();
            setChicken(data.meals);
    }
    useEffect(()=>{run()},[]);
         const except = (text, maxlength = 25) => {
           if (text.length > maxlength) {
             return text.substring(0, maxlength) + "...";
           }
           return text;
         };
  return (
    <div className="container">
      <h3 className="text-center fw-bold d-block display-4 my-1 text-primary border-primary">
        Ingredient with
        <span className="ms-3 border-bottom border-primary border-5 title">
          Fish
        </span>
      </h3>
      <div
        className="row gy-3 justify-content-center justify-content-md-start align-items-center py-3"
        id={Math.random()}
      >
        {[...chicken].map((each) => (
          <div className="col-5 col-md-3 col-xl-2 " key={each.idMeal}>
            <div className="card  border-0 shadow-lg overflow-hidden" id="card">
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
              <button
                id={each.idMeal}
                key={each.idMeal}
                // onClick={addCheck(each.idMeal)}
                className={
                  "mb-2 mt-1 btn btn-sm btn-outline-primary d-block mx-auto"
                }
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chicekenpage;
