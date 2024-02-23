import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);
  useMovieTrailer(movieId);
  // if (!movieTrailer) return;
  return (
    <div className="absolute -top-14 -z-20 pointer-events-none ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?modestbranding=1&autohide=1&autoplay=1&mute=1&showinfo=0&loop=1&fs=0&rel=0&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
