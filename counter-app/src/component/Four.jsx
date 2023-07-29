import React, { useRef, useState } from 'react'

const Four = () => {
  const inputRef=useRef(null);
  const clickHandler=()=>{
    event.preventDefault();
    inputRef.current.focus();
  }
  const [search,setSearch]=useState([]);
  console.log(search);
  return (
    <div className="mt-3">
      <form onSubmit={clickHandler} className="">
        <input
        value={search}
        ref={inputRef}
        // onChange={(e)=>setSearch(e.target.value)}
          type="text"
          className=" w-[300px] h-[50px] rounded text-center  outline-none bg-slate-500 text-white"
          placeholder="Search"
        />
        <button className=" bg-teal-600 px-3 py-1 rounded block mx-auto mt-3 text-white">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Four