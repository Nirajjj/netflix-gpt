import { useDispatch } from "react-redux";
import { addNowPlayingMoives } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispach = useDispatch();
  useEffect(() => {
    movies();
  }, []);
  const movies = async () => {
    const nowPlayingMovies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await nowPlayingMovies.json();
    console.log(jsonData.results);
    dispach(addNowPlayingMoives(jsonData.results));
  };
};

export default useNowPlayingMovies;
