import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispach = useDispatch();
  useEffect(() => {
    movies();
  }, []);
  const movies = async () => {
    const upcomingMovies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const jsonData = await upcomingMovies.json();

    dispach(addUpcomingMovies(jsonData.results));
  };
};

export default useUpcomingMovies;
