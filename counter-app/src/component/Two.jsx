import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Two = () => {
    const {dispatch}=StateContextCustom()
  return (
    <div>
      <button onClick={()=>dispatch({type:"increase",payload:20})} className=" px-3 py-1 bg-red-500 text-white rounded hover:bg-red-900">Add</button>
    </div>
  )
}

export default Two
