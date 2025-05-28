import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import { json, useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constant";
import Header from "./Header";
const MovieInfoPage = () => {
  const [movieData, setMovieData] = useState();
  console.log(movieData);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getMovie();
  }, [id]);
  const getMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();
    // const movieData = data;
    setMovieData(data);
  };
  if (!movieData) return <div>Loading...</div>;
  return (
    <div className="pb-10">
      <Header />
      <MainContainer movieId={movieData} />

      <div>MovieInfoPage</div>
    </div>
  );
};

export default MovieInfoPage;
