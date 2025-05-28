import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="md:ml-12 ml-4 bg-transparent ">
      <h2 className="text-white md:text-2xl mb-0 text-sm font-semibold my-3">
        {title}
      </h2>

      <div className="flex overflow-x-scroll overflow-y-hidden" id="scrollbar">
        <div className="flex gap-2 p-3">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <MovieCard key={movie.id} moviesData={movie} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
