import React from "react";
import { useSelector } from "react-redux";
import Title from "./Title";
import BackgroundVideo from "./BackgroundVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const movie = movies[5];
  const { original_title, overview, id } = movie;
  return (
    <div
      className="bg-gradient-to-t from-black from-10% h-[75vh]"
      id="gradieant"
    >
      <Title title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
