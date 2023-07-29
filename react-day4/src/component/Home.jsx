import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav=useNavigate();
    const run=()=>{
        nav('/Services')
    }
  return (
    <div>
      <div className="">
        <h2 className="text-4xl text-red-800 font-extrabold">Home</h2>
        <button
          className=" border-grey-500 py-2 px-4 bg-stone-700 text-white border-4"
          onClick={run}
        >
          Click
        </button>
      </div>
      <div className="flex justify-center bg-orange-500 items-center min-h-screen">
        <div className="p-5 bg-gray-500 w-6 h-6"></div>
        <div className="p-5 bg-red-500 w-6 h-6"></div>
        <div className="p-5 bg-blue-500 w-6 h-6"></div>
      </div>
    </div>
  );
}

export default Home
