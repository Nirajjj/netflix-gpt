import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);
  useMovieTrailer(movieId);
  // if (!movieTrailer) return;
  return (
    <div className="absolute -top-14 -z-20 ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?autoplay=1&mute=1&showinfo=0&fs=0&rel=0&controls=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; modestbranding; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
