import React, { useEffect, useState } from "react";
import { GPT_KEY } from "../utils/constant";
import ShimmerUi from "./ShimmerUi";

const MovieInfo = ({ movie }) => {
  const [movieData, setMovieData] = useState({});
  useEffect(() => {
    handleGptSearchMovies();
  }, []);
  const headers = {
    Authorization: GPT_KEY,
    "Content-Type": "application/json",
  };
  const handleGptSearchMovies = async () => {
    // const inputText = searchText.current.value;
    // if (!inputText) return;
    // dispach(onShowSearchClick());

    const query =
      "Assume you are a movie expert. Now write all important information about this movie: " +
      movie.original_title +
      ". Return only a complete JSON object without any explanation or extra text. " +
      "Use this json object format:" +
      `{
          "movie": {
            "title": "string",
            "posterUrl": "string",
            "trailerEmbedUrl": "string",
            "releaseDate": "YYYY-MM-DD",
            "duration": "string",
            "genre": ["string"],
            "language": "string",
            "castAndCrew": [
              ["string"],
            ],
            "shortSynopsis": "string",
            "ratings": {
              "IMDB": number,
              "RottenTomatoes": "string%",
              "Metacritic": number
            },
            "screenshots": ["string"]
          },
          "aiFeatures": {
            "personalizedSummary": {
              "general": "string",
              "forFansOfThriller": "string",
              "forCasualViewers": "string",
              "forYoungerAudience": "string"
            },
            "aiExplanation": "string"
          }
        }`;

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          model: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
          messages: [
            {
              role: "user",
              content: query,
            },
          ],
        }),
      });

      console.log("res", res);
      const movieArray = await res.json();
      console.log("movieArray", movieArray);
      const movieObjet = movieArray.choices[0].message.content;
      const movieObjetParse = JSON.parse(movieObjet);

      console.log("movieArrayTitle", movieObjetParse);
      setMovieData(movieObjetParse);
      //   const moviePromiseArray = movieArrayTitle.map((movie) =>
      //     handleMovieSearch(movie)
      //   );
      //   const resolveAllMoviePromises = await Promise.all(moviePromiseArray);

      //   dispach(
      //     addGptMovies({ movieTitles, gptMovies: resolveAllMoviePromises })
      //   );
      //   dispach(onShowSearchClick());
    } catch (error) {
      console.error(error);
    }

    // const movieArrayString = gptResults.choices?.[0]?.message?.content;
  };
  if (!movieData?.movie?.title) {
    return <ShimmerUi />;
  }
  return (
    <div className="text-[#F1F2F4] md:mt-[-9rem]  mt-[3rem] font-bold ml-10">
      <p>Duration: {movieData.movie.duration}</p>
      <p>genre: {movieData.movie.genre.join(",")}</p>
      <p>cast and crew: {movieData.movie.castAndCrew.join(",")}</p>
      <h6>&bull; Ratings: </h6>
      <div className="m-3">
        <p>IMDB: {movieData.movie.ratings["IMDB"]}</p>
        <p>RottenTomatoes: {movieData.movie.ratings["RottenTomatoes"]}</p>
      </div>
      <div>
        <h5>&bull; Ai summary: </h5>
        <p className="m-3 ">{movieData.aiFeatures.aiExplanation}</p>
        <h5>&bull; Personalized summary: </h5>
        <div className="m-3 ">
          {Object.entries(movieData.aiFeatures.personalizedSummary).map(
            ([key, value]) => (
              <>
                <h6>{key}: </h6>
                <p className="m-3">{value}</p>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
