import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieRecommendation from "./GptMovieRecommendation";

const GptPage = () => {
  return (
    <div>
      <GptSearchBar />
      <GptMovieRecommendation />
    </div>
  );
};

export default GptPage;
