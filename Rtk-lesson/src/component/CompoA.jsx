import React, { useEffect } from 'react'

const CompoA = () => {
    const changelog=e=>{
        console.log(e.clientX);
        console.log(e.clientY);
    }
    useEffect(()=>{
  window.addEventListener("mousemove",changelog);
  return ()=>{
    window.removeEventListener("mousemove",changelog);
  }
    })
  return (
    <div>
CompoA      
    </div>
  )
}

export default CompoA
