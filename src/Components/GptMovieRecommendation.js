import React from "react";

import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import GptMovieList from "./GptMovieList";
import ShimmerUi from "./ShimmerUi";

const GptMovieRecommendation = () => {
  const { movieTitles, gptMovies } = useSelector((store) => store.gpt);
  const searchButtonClickStatus = useSelector(
    (store) => store.gpt.showSearchClick
  );
  // console.log(gptMovies);
  // console.log(movieTitles);
  // console.log(searchButtonClickStatus);
  const movie = gptMovies[0];
  return searchButtonClickStatus ? (
    // <div>
    //   <h1 className="text-white text-xl">Loading...</h1>

    // </div>
    <ShimmerUi />
  ) : (
    <div>
      <MainContainer movie={movie} />
      <div className="-mt-[12%]">
        {/* {movieTitles.map((movie, index) => ( */}
        <GptMovieList titles={movieTitles} movies={gptMovies} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default GptMovieRecommendation;
