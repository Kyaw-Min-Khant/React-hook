import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContext'

const Nav = () => {
    const {setMovie,movie}=useContext(StateContext);
    useEffect(()=>{
        console.log(movie)
    },[])
  return (
    <div className="" style={{display:"flex", justifyContent:"space-around",alignContent:"center",backgroundColor:"#b1b1b1"}}>
<h2 className="">Rann Cinema</h2>  
<div className="">
    <h2 className="">MovieList-{movie.length} </h2>
</div>
    </div>
  )
}

export default Nav
