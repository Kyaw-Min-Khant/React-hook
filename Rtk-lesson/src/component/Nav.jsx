import React, { useEffect, useState } from "react";
import { BsBasket3Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Nav = () => {
  const [search,setSearch]=useState([])
       const [product, setProduct] = useState([]);
       useEffect(() => {
         fetchData();
        //  setLoad(true);
       }, []);
       const fetchData = async () => {
         const data = await fetch("https://dummyjson.com/products");
         const { products } = await data.json();
         setProduct(products)
        //  setLoad(false);
       };
       const filterProduct = product.filter((item) =>
         item.title.toLowerCase().includes(search)
       );
       console.log(filterProduct);
      //  if (load) {
      //    return <Loading />;
      //  }
  const nevigate=useNavigate();
  const submitHandler=(e)=>{
e.preventDefault();
nevigate('/Search',{state:{filterProduct}})
  }
  const {Card}=useSelector(state=>state.CardSlice)
  return (
    <div className=" container mx-auto flex justify-around p-3">
      <Link to="/">
        <h3 className=" text-3xl text-red-400">Sa Tr</h3>
      </Link>
      <form onSubmit={submitHandler} className="">
        <input type="Search" value={search} onChange={(e)=>setSearch(e.target.value)}   className=" bg-slate-200" />
      </form>
      <Link to="/AddtoCard">
        <div className=" relative">
          <BsBasket3Fill className="text-3xl" />
          <p className="bg-red-400 rounded-full absolute bottom-7 left-3 px-2">
            {Card.length}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
