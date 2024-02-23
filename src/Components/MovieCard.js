import React from "react";
import { POSTER_IMG_URL } from "../utils/constant";

const MovieCard = ({ moviesData }) => {
  const imagePath = moviesData.backdrop_path;
  return (
    <div className="w-60">
      <img className="w-full" src={POSTER_IMG_URL + imagePath} alt="Movies" />
    </div>
  );
};

export default MovieCard;
