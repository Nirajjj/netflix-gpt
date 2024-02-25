import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieTitles: null,
  },
  reducers: {
    toggleShowGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, actions) => {
      const { movieTitles, gptMovies } = actions.payload;
      state.movieTitles = movieTitles;
      state.gptMovies = gptMovies;
    },
  },
});

export const { toggleShowGptSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
