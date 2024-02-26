import React from "react";
import { useSelector } from "react-redux";
import Title from "./Title";
import BackgroundVideo from "./BackgroundVideo";

const MainContainer = () => {
  const gptStatus = useSelector((store) => store.gpt.showGptSearch);
  const gptMovies = useSelector((store) => store.gpt?.gptMovies);
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const movies = gptStatus ? gptMovies : nowPlayingMovies;
  if (!movies) return;
  const randomNumber = Math.floor(Math.random() * movies.length - 1) + 1;

  const movie = movies[randomNumber];
  const { original_title, overview, id } = movie;
  return (
    <div className=" md:h-[75vh] h-[9vh]">
      <div
        className="w-screen aspect-video absolute top-0 -z-10  "
        id="gradient"
      ></div>
      <Title title={original_title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
