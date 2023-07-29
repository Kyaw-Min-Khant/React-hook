import { createContext, useState } from "react";


 export const StateContext=createContext();
export const StateContextProvider=({children})=>{
  const [movie, setMovie] = useState([
    {
      id: 1,
      Movie: "Iron Man",
      Price: "400",
      rating: 4,
    },
    {
      id: 2,
      Movie: "Bet Man",
      Price: "500",
      rating: 5,
    },
    {
      id: 3,
      Movie: "Super Man",
      Price: "300",
      rating: 3,
    },
    {
      id: 4,
      Movie: "Fast and Furious",
      Price: "500",
      rating: 2,
    },
    {
      id: 5,
      Movie: "Iron Man",
      Price: "400",
      rating: 4,
    },
  ])
  const data={setMovie,movie};
return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
}
