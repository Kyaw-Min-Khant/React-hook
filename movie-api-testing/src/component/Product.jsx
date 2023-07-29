import React, { useEffect, useState } from 'react'

const Product = () => {
    useEffect(()=>{movieData()},[])
    const [movies,setMovies]=useState([]);
    const movieData=async ()=>{
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '543de81e9bmshfd78462d45b08d9p1210bcjsnefaf8f0d11c3',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
 const fetchApi=await fetch('https://imdb-top-100-movies.p.rapidapi.com/', options);
 const data=await fetchApi.json();
 setMovies(data);
 console.log(movies);
    }
  return (
    <div className="row justify-content-between">
      {movies.map((movie) => (
        <div className="col-3" style={{ minWidth: "12rem" }}>
          <div className="card" key={movie.id} >
            <img src={movie.image} alt=""/>
            <div className="card-body">
              <p className="fw-bold">{movie.title}</p>
              <p className="">{movie.genre[0]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product
