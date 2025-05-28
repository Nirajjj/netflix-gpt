import React from "react";
import { POSTER_IMG_URL } from "../utils/constant";
import { useSelector } from "react-redux";

const MovieCard = ({ moviesData }) => {
  const gptStatus = useSelector((store) => store.gpt.showGptSearch);
  if (!moviesData) return;

  const title = moviesData?.original_title;

  const imagePath = moviesData.backdrop_path;

  return (
    <div className="md:w-60 w-40 relative group  transition-transform duration-300 transform hover:scale-105 rounded-md overflow-hidden">
      <h1 className="text-white font-semibold md:text-lg text-xs absolute bottom-0 z-20 ml-3 mb-1">
        {title}
      </h1>
      <div className="  bg-gradient-to-t from-black to-transparent w-full h-[50%] absolute bottom-[-30%] group-hover:bottom-0 transition-all duration-300 z-10"></div>
      <div className="rounded-md ">
        <img
          className="w-full object-cover"
          src={POSTER_IMG_URL + imagePath}
          alt="Movies"
        />
      </div>
    </div>
  );
};

export default MovieCard;
