import React from 'react'
import { StateContextCustom } from '../context/StateContext';

const Three = () => {
    const {dispatch}=StateContextCustom();
  return (
    <div>
      <button onClick={()=>dispatch({type:"decrease",payload:20})} className="  px-3 py-1 bg-red-500 text-white rounded hover:bg-red-900">
        Reduce
      </button>
    </div>
  );
}

export default Three
