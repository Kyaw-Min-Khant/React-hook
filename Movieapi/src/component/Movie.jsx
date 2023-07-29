import React, { useContext, useEffect, useState } from 'react';
import { StateContext } from '../context/StateContext';
import MovieList from './MovieList';

const Movie = () => {
    const { movie, setMovie } = useContext(StateContext);
    useEffect(()=>{console.log(movie)},[])
  return (
    <div>
        {movie.map((movies)=>{
           return <MovieList key={movies.id} {...movies} />;
        })}
      
    </div>
  )
}

export default Movie
