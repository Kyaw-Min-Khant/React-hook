import React from 'react'
import { Link } from 'react-router-dom';
const Productcard = ({products}) => {
  return (
    <div className=" shadow w-[300px]">
      <img
        src={products.image}
        alt=""
        className="w-[200px] h-[200px] object-contain mx-auto"
      />
      <div className="">
        <h3 className="mt-[8px] text-lg font-bold p-[5px] ">
          {products.title.substring(0, 20)}....
        </h3>
        <p className=" mb-[8px] p-[5px] ">${products.price}</p>
      </div>

      <div className="flex justify-between">
        <button className="border-3 bg-blue-500 px-3 py-1 mx-1 rounded  mb-[10px]">
          Add
        </button>
        <Link to={`/Details/${products.id}`} >
          <button className="border-3 bg-blue-500 px-3 py-1 mx-1 rounded  mb-[10px]">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Productcard
