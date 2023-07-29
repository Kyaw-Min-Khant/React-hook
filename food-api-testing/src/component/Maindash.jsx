import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

const Maindash = () => {
             const words = (text, maxlength = 40) => {
               if (text.length > maxlength) {
                 return text.substring(0, maxlength) + "...";
               }
               return text;
             };
             const [meals, setMeal] = useState("");
             const run = async () => {
               const foodApi = await fetch(
                 "https://www.themealdb.com/api/json/v1/1/categories.php"
               );
               const api = await foodApi.json();
               setMeal(api.categories);
             };
             useEffect(() => {
               run();
             }, []);
  return (
    <div className="container">
      <h3 className="text-center fw-bold d-block display-4 my-1 text-primary border-primary">
        Main
        <span className="ms-3 border-bottom border-primary border-5 title">
          Dishes
        </span>
      </h3>
      <div className="row gy-3 justify-content-center justify-content-md-start align-items-center py-3">
        {[...meals].map((meal) => (
          <div className="col-6 col-md-3 col-xl-2" key={meal.idCategory}>
            <div className="card  border-0 shadow-sm" id="card">
              <div className="">
                <img
                  src={meal.strCategoryThumb}
                  alt=""
                  className="card-img-top w-100 pt-2 card-img"
                />
              </div>
              <div className="card-body p-2 pt-3" style={{ height: "130px" }}>
                <h6 className="fw-bold text-primary">{meal.strCategory}</h6>
                <p className="text-black-50 small text-justify mb-1 text-wrap">
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

export default Maindash
