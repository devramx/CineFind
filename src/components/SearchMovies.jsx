import React, { useState } from "react";
import "./SearchMovies.css";
import MovieCard from "./MovieCard";


export default function SearchMovies() {
  // states
  // input query
  const [query, setQuery] = useState("interstellar");
  // movies
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.CINEFIND_API_KEY;

  const searchMovie = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query">
          Search for:
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Interstellar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
      </div>
    </>
  );
}
