import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const [item,setItem] = useState([])
    const {id}=useParams();
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const run = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data=await run.json();
        console.log(data);
        setItem(data);
        console.log(item);
    }
  return (
    <div>
      Details
    </div>
  )
}

export default Details
