import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./Reducer";

const StateContext=createContext();
export const StateContextProvider=({children})=>{

  const initialState={
    count:0,
    values:10,
  }
  const [state,dispatch]=useReducer(reducer,initialState)
  const data={state,dispatch}
  return(
    <StateContext.Provider value={data}>
      {children}
    </StateContext.Provider>
  )
};
export const StateContextCustom=()=>useContext(StateContext);
