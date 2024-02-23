import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispach = useDispatch();
  useEffect(() => {
    movies();
  }, []);
  const movies = async () => {
    const popularMovies = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await popularMovies.json();

    dispach(addPopularMovies(jsonData.results));
  };
};

export default usePopularMovies;
