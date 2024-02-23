import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispach = useDispatch();
  useEffect(() => {
    movies();
  }, []);
  const movies = async () => {
    const topRatedMovies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const jsonData = await topRatedMovies.json();

    dispach(addTopRatedMovies(jsonData.results));
  };
};

export default useTopRatedMovies;
