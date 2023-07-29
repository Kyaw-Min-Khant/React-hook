import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
const use =useNavigate();
     const store=useRef();
     const run=()=>{
        use('/Services',{state:{test:store.current.value}})
console.log(store.current.value)
     }
  return (
    <div>
      <h2 className=" text-3xl font-bold text-grey-500">About</h2>
      <input type="text" ref={store} className=" border-4 border-red-700 border-spacing-1 mr-2"/>
      <button className=" border-4 px-2 bg-rose-900 text-blue-400" onClick={run}>Click</button>
    </div>
  )
}

export default About
