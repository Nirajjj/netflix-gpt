import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispach = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);
  useEffect(() => {
    movieVideo();
  }, []);

  const movieVideo = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const dataJson = await movieData.json();

    const movieTrailers = dataJson.results?.filter(
      (video) => video.type === "Trailer"
    );
    const oneMovieTrailer = movieTrailers[0] || dataJson[0];

    dispach(addMovieTrailer(oneMovieTrailer));
  };
};

export default useMovieTrailer;
