import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";


const StateContext= createContext();
const StateContextCustom=({children})=>{
    const [products,setProducts]=useState();
    const initialState={
        item:[],
        card:[],
    }
    const dataFetch = async () => {
      const apiFetch = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
      );
      const { meals } = await apiFetch.json();
      setProducts(meals);
      console.log(products)
    };
    useEffect(()=>{
      dataFetch();
    },[])
    const [state,dispatch]=useReducer(reducer,initialState);

    return(
        <StateContext.Provider>
          {children}
        </StateContext.Provider>
    )
}