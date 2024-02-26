import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageConstant from "../utils/languageConstant";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispach = useDispatch();
  const currentLanguage = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const handleMovieSearch = async (movie) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );
    const movieJsonData = await movieData.json();
    return movieJsonData?.results[0];
  };
  const handleGptSearchMovies = async () => {
    const inputText = searchText.current.value;

    const query =
      "assume you are movie expert now write 10 movies related to" +
      inputText +
      'and make sure to not write any explanation and only write  10 movie name in this format (strictly), format: ["aanand", "golmal", "Inception", "dangle", "hera-pheri"]';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      console.log("loading...");
    }

    const movieArrayString = gptResults.choices?.[0]?.message?.content;
    const movieArray = JSON.parse(movieArrayString);

    const movieTitles = movieArray.map((string) => string.replace(/'/g, "'"));

    const moviePromiseArray = movieTitles.map((movie) =>
      handleMovieSearch(movie)
    );
    const resolveAllMoviePromises = await Promise.all(moviePromiseArray);

    dispach(addGptMovies({ movieTitles, gptMovies: resolveAllMoviePromises }));
  };

  return (
    <div className="flex justify-center ">
      <form
        className="md:py-2 py-5  grid grid-cols-12 md:w-5/12 w-11/12 absolute"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          className="md:py-3 py-1 px-4 rounded-md col-span-9"
          type="search"
          placeholder={languageConstant[currentLanguage].placeholder}
        />
        <button
          className="md:py-2 py-1 px-4 bg-gradient-to-tr from-purple-700 via-blue-700 to-cyan-700 text-yellow-400 rounded-xl font-semibold  ml-2 col-span-3  rounded-br-none"
          onClick={handleGptSearchMovies}
        >
          {languageConstant[currentLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
