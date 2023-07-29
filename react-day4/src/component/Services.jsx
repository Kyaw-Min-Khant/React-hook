import React from 'react'
import { useLocation } from 'react-router-dom'

const Services = () => {
    const location=useLocation();
    console.log(location)
  return (
    <div>
      <h2 className="">Services</h2>
      {/* <p className="">{location.state.test}</p> */}
      {/* <p className="">{location.state ? location.state.test : null }</p> */}
<p className="">{location.state?.test}</p>
    </div>
  )
}

export default Services
