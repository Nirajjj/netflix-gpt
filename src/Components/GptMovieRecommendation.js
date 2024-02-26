import React from "react";

import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import GptMovieList from "./GptMovieList";

const GptMovieRecommendation = () => {
  const { movieTitles, gptMovies } = useSelector((store) => store.gpt);
  if (!gptMovies && !movieTitles) return;

  return (
    <div>
      <MainContainer movies={gptMovies} />
      <div className="-mt-[12%]">
        {/* {movieTitles.map((movie, index) => ( */}
        <GptMovieList titles={movieTitles} movies={gptMovies} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default GptMovieRecommendation;
