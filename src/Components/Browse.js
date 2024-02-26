import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useUpcomingMovies();

  const gptStatus = useSelector((store) => store.gpt.showGptSearch);
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  return (
    <div className="pb-10">
      <Header />
      {gptStatus ? (
        <GptPage />
      ) : (
        <>
          <MainContainer movies={nowPlayingMovies} />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
