import { useEffect, useState } from "react";
import Secondesection from "./Secondesection.jsx";
import Card from "./Card.jsx";
import Lottie from "lottie-react-web";
import CookingAnimation from "./lottie/woman.json";
const Carousel = () => {
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetchapi();
  // }, []);
  // const fetchapi = async () => {
  //   const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
  //   const data = await api.json();
  //   setItems(data);
  //   console.log(items)
  // };
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="col-10 col-md-7 py-5">
          <div className="">
            <h3 className="display-3 text-primary">
              What <br />
              Would You Like <br />
              <span className="title"> To Order Today?</span>
            </h3>
            <p className="text-black-50 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto temporibus magni qui mollitia in? Eos numquam beatae
              dolores quo vitae.
            </p>
            <div className="w-50 text-primary d-flex pt-3">
              <a href="" className="nav-link">
                <i className="ri-facebook-circle-fill ri-xl me-3"></i>
              </a>
              <a href="" className="nav-link">
                <i className="ri-instagram-line ri-xl me-3"></i>
              </a>
              <a href="" className="nav-link">
                <i className="ri-twitter-line ri-xl me-3"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <Lottie animationData={CookingAnimation} />
        </div>
      </div>
      <hr />
      <Secondesection />
      <Card />
    </div>
  );
};

export default Carousel;
