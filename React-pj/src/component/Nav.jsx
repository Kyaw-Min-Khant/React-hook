import React from 'react'
import {ImSpoonKnife} from "react-icons/im"
const Nav = () => {
  return (
    <div className=' flex justify-around p-7 rounded-lg shadow'>
    <ImSpoonKnife className="text-3xl"/>
    <div className="">
        <input type="text" className=' bg-gray-400' />
    </div>
    </div>
  )
}

export default Nav
