import React from 'react'
import { StateContextCustom } from '../context/StateContext'
const One = () => {
    const { state:{count,values} } = StateContextCustom()
  return (
    <div>
      <h3 className=" text-slate-900 text-2xl"> Count : {count}, Value :{values}</h3>
    </div>
  )
}

export default One

