import React from "react";
import { POSTER_IMG_URL } from "../utils/constant";
import { useSelector } from "react-redux";

const MovieCard = ({ moviesData }) => {
  const gptStatus = useSelector((store) => store.gpt.showGptSearch);
  if (!moviesData) return;

  const title = moviesData?.original_title;

  const imagePath = moviesData.backdrop_path;

  return (
    <div className="md:w-60 w-40">
      {gptStatus && (
        <h1 className="text-white font-semibold md:text-lg text-xs">{title}</h1>
      )}
      <img className="w-full" src={POSTER_IMG_URL + imagePath} alt="Movies" />
    </div>
  );
};

export default MovieCard;
