import React from "react";

function MovieList({ movies }) {
  return (
    <ul className="moviebox">
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3 className="color">{movie.Title}</h3>
          <img className="box" src={movie.Poster} alt={`${movie.Title} poster`} />
          <p>Movie Year: {movie.Year}</p>
         <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button className="button">Watch Movie</button></a> 
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
