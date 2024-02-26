import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="md:ml-12 ml-4 bg-transparent ">
      <h2 className="text-white md:text-2xl text-sm font-semibold my-3">
        {title}
      </h2>

      <div className="flex overflow-x-scroll " id="scrollbar">
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} moviesData={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
