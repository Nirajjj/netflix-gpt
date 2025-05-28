import React from "react";
import Title from "./Title";
import BackgroundVideo from "./BackgroundVideo";

const MainContainer = ({ movie }) => {
  // const gptStatus = useSelector((store) => store.gpt?.showGptSearch);
  // const gptMovies = useSelector((store) => store.gpt?.gptMovies);
  // const nowPlayingMovies = useSelector(
  //   (store) => store.movies?.nowPlayingMovies
  // );
  // const movies = gptStatus ? gptMovies : nowPlayingMovies;
  if (!movie) return;

  const { original_title, overview, id } = movie;
  console.log(id);
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
