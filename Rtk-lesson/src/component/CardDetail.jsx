import React from 'react';
import {FaTrash} from "react-icons/fa"
import {FaPlus,FaMinus} from "react-icons/fa" 
import { useDispatch } from 'react-redux';
import { ADDQuantity, RemoveCard, DesQuantity } from "../Services/CardSlice";


const CardDetail = (props) => {
  const dispatch=useDispatch();
    const { id, title, price, description, thumbnail,Quantity}=props;
  return (
    <div className=" flex justify-between w-[70%] mt-6">
      <div className="">
        <img src={thumbnail} alt="" className="max-w-[150px] h-[150px]" />
      </div>
      <div className="p-5 w-[500px]">
        <div className=" flex justify-between">
          <h2 className=" capitalize text-xl">{title}</h2>
          <FaTrash
            onClick={() => dispatch(RemoveCard(props))}
            className=" cursor-pointer text-xl text-red-600"
          />
        </div>
        <p className="">${price}</p>
        <div className="mt-3 flex justify-start align-middle">
          <p
            onClick={() => dispatch(ADDQuantity(props))}
            className=" cursor-pointer p-2"
          >
            <FaPlus />
          </p>
          <p className="p-1">{Quantity}</p>
          <p
            onClick={() =>Quantity>1 && dispatch(DesQuantity(props))}
            className="p-2 cursor-pointer"
          >
            <FaMinus />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetail