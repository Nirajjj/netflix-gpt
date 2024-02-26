import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlyaingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  if (!popularMovies) return;
  const reversePopularMovies = [...popularMovies].reverse();

  return (
    <div className="md:-mt-[12%] ">
      <div className=" ">
        <MovieList title={"Now Playing"} movies={nowPlyaingMovies} />
        <MovieList title={"Popular"} movies={reversePopularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
