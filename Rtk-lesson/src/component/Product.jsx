import React from 'react'
import {useDispatch} from "react-redux"
import { Add_to_Card } from '../Services/CardSlice';

const Product = (props) => {
    const { id, title, price, description, thumbnail } = props;
    const dispatch=useDispatch()
  return (
    <div>
      <div className="w-[200px]">
        <img src={thumbnail} alt="" className="h-[200px] w-[200px]" />
        <h2 className=" truncate ">{title}</h2>
        <h2 className="">{price}</h2>
        <button
          onClick={()=> dispatch(Add_to_Card(props))}
          className=" px-5 py-1  bg-purple-700 rounded text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product
