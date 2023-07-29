import React, { useState } from 'react';
import CompoA from "./CompoA"

const Parents = () => {
  const [show,setShow]=useState(true);
  const toggle=()=>{
    setShow(!show);
  }
  return (
    <div>
      <h2 className="">{show && <CompoA/>}</h2>
      <button onClick={toggle} className="">{show?"hide":"show"}</button>
    </div>
  )
}

export default Parents
