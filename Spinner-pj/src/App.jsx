import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
const App = () => {
  const [loading,setLoading]=useState(true);
  const [name,setName]=useState([]);
  useEffect(()=>{
    fetchapi();setLoading(false);
  },[])

  const fetchapi=async()=>{
const { data } = await axios.get("https://fakestoreapi.com/products");
setName(data)
  }
  return (
    <div>
      {loading ? (
        <ClimbingBoxLoader color="#36d7b7" />
      ) : (
<div className="">Running</div>
      )}
    </div>
  );
}


export default App
