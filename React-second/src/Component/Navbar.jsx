import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({items,setItems}) => {
    const [search,setSearch]=useState("")
    const submit = e =>{
    e.preventDefault();
 const filterdata=items.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
 setItems(filterdata);
    }
    useEffect(()=>{return console.log(items)},[])
  return (
    <div className=" flex justify-between p-4">
      <Link to={"/"}>
          <h3 className="">Shop</h3>
      </Link>
      <form onSubmit={submit}>
        <input
          value={search}
          type="text"
          className="border-5 border-black  shadow bg-slate-100"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Navbar
