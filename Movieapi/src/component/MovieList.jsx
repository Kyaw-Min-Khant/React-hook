import React, { useContext } from "react";
import { StateContext } from "../context/StateContext";

const MovieList = ({Movie,Price,rating}) => {
  return (
    <div>
      <ul>
        <li>{Movie}</li>
        <li>{Price}</li>
        <li>{rating}</li>
      </ul>
    </div>
  );
};

export default MovieList;
