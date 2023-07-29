import React, { useEffect, useState } from 'react'
import { Routes, useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const [show,setShow] = useState(false);
    const {id}=useParams();
    const [data,setData]=useState({});
    const climb=useNavigate();
    const run=async()=>{
const fetchApi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
const {meals}=await fetchApi.json();
setData(meals[0]);
console.log(data);
    }
    useEffect(()=>{
        run()
    },[]);
  return (
    <div className="container py-1">
      <div className=" row py-3 justify-content-center justify-content-md-between align-items-center">
        <div className="col-md-5 col-12 align-middle">
          <img src={data.strMealThumb} alt="" className="detail-img w-100" />
        </div>
        <div className="col-md-7 col-12" style={{minHeight:"85vh"}}>
          <div className="p-3">
            <h2 className="fw-bold text-center text-primary">
              {data.strMeal}
              <div className="border border-3 border-primary w-50 mx-auto text-primary mt-1"></div>
            </h2>
            <h5 className=" fw-bold py-3">
              Category : {data.strCategory},{data.strArea} Dish
            </h5>
            <div className={show ? "d-none" : ""}>
              <h3 className="">Instructions</h3>
              <p className="small lh-lg  mono-space pb-0 mb-0">
                {data.strInstructions}
              </p>
              <a
                href={data.strYoutube}
                className="text-decoration-none"
                target={"_blank"}
              >
                <i
                  className="ri-youtube-fill ri-3x"
                  style={{ color: "red" }}
                ></i>
              </a>
              <button
                onClick={() => {
                  setShow(!show);
                }}
                className="d-block ms-auto btn btn-primary btn-sm text-white fw-bold align-bottom"
              >
                Go to Ingredients
                <i className="ri-arrow-right-line text-white ms-2"></i>
              </button>
            </div>
            <div className={show ? "" : " d-none"}>
              <h3 className="">Ingredients</h3>
              <div className="row">
                <div className="">
                  <ul className="">
                    {Object.keys(data).map((key) => {
                      if (key.includes("strIngredient") && data[key]) {
                        return (
                          <li style={{ listStyleType: "circle" }} key={key}>
                            {data[key]}
                          </li>
                        );
                      }
                      return "";
                    })}
                  </ul>
                </div>
                <a
                  href={data.strYoutube}
                  className="text-decoration-none"
                  target={"_blank"}
                >
                  <i
                    className="ri-youtube-fill ri-3x"
                    style={{ color: "red" }}
                  ></i>
                </a>
              </div>
              <button
                onClick={() => {
                  setShow(!show);
                }}
                className="d-block ms-auto btn btn-primary btn-sm text-white fw-bold align-bottom"
              >
                Go to Instructions
                <i className="ri-arrow-right-line text-white ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details
