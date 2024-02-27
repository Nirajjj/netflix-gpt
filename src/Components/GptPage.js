import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieRecommendation from "./GptMovieRecommendation";
// import { useSelector } from "react-redux";

const GptPage = () => {
  // const gptMoviesStatus = useSelector((store) => store.gpt.gptMovies);
  return (
    <div>
      <GptSearchBar />
      <GptMovieRecommendation />
    </div>
  );
};

export default GptPage;
