import React from 'react'
import { useSelector } from 'react-redux';
import CardDetail from './CardDetail';

const AddtoCard = () => {
    const { Card,Price,Quantity } = useSelector((state) => state.CardSlice)
  return (
    <div className="">
      <div className=" flex justify-center gap-4">
        <div className=" ">
          {Card?.map((item) => (
            <CardDetail key={item.id} {...item} />
          ))}
        </div>
      </div>
      <hr className=' w-[70%] mx-auto' />
      <div className=" flex justify-around">
        <h2 className="">Total</h2>
        <p className="">{Price}</p>
      </div>
    </div>
  );
}

export default AddtoCard