import React from "react";
import MovieCard from "./MovieCard";

const GptMovieList = ({ titles, movies }) => {
  if (!movies && !titles) return;
  console.log(titles);
  return (
    <div>
      <div className="flex gap-7 flex-wrap justify-center">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} moviesData={movie} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieList;
