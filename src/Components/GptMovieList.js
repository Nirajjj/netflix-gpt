import React from "react";
import MovieCard from "./MovieCard";

const GptMovieList = ({ titles, movies }) => {
  if (!movies && !titles) return;

  return (
    <div>
      <div className="flex gap-7 flex-wrap justify-center md:mt-0 mt-16">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} moviesData={movie} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieList;
