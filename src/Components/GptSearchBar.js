import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageConstant from "../utils/languageConstant";
import openai from "../utils/openAi";
import { API_OPTIONS, GPT_KEY } from "../utils/constant";
import { addGptMovies, onShowSearchClick } from "../utils/gptSlice";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// import { config } from "dotenv";
// config();
// require("dotenv").config();
// const apiKey = process.env.REACT_APP_OPENAI_KEY;
// configure({ apiKey });
// const genAi = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_KEY);

const GptSearchBar = () => {
  const dispach = useDispatch();
  const headers = {
    Authorization: GPT_KEY,
    "Content-Type": "application/json",
  };
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
    if (!inputText) return;
    dispach(onShowSearchClick());

    const query =
      "assume you are movie expert now write 10 movies related to " +
      inputText +
      ' and make sure to not write any explanation and only write  10 movie name in this format (strictly), format: ["aanand", "golmal", "Inception", "dangle", "hera-pheri"]';
    // const modelName = "models/gemini-1.5-pro-002";
    // // const availableModel =
    // const model = genAi.getGenerativeModel({ model: modelName });
    // const result = await model.generateContent(query);
    // const response = await result.response;
    // const movieArrayJson = response.text();
    // console.log(movieArrayJson);

    // const gptResults = await openai.chat.completions.create({
    //   model: "microsoft/phi-4-reasoning-plus:free",
    //   messages: [{ role: "user", content: query }],
    // });
    // if (!gptResults) {
    //   console.log("loading...");
    // }
    // console.log("gptResults", gptResults);
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
      const movieTitles = movieArray.choices[0].message.content;
      const movieArrayTitle = JSON.parse(movieTitles);
      // map((string) =>
      //   string.replace(/'/g, "'")
      // );
      console.log("movieArrayTitle", movieArrayTitle);
      const moviePromiseArray = movieArrayTitle.map((movie) =>
        handleMovieSearch(movie)
      );
      const resolveAllMoviePromises = await Promise.all(moviePromiseArray);

      dispach(
        addGptMovies({ movieTitles, gptMovies: resolveAllMoviePromises })
      );
      dispach(onShowSearchClick());
    } catch (error) {
      console.error(error);
    }

    // const movieArrayString = gptResults.choices?.[0]?.message?.content;
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
          required
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
