import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieTitles: null,
    showSearchClick: false,
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
    onShowSearchClick: (state) => {
      state.showSearchClick = !state.showSearchClick;
    },
  },
});

export const { toggleShowGptSearch, addGptMovies, onShowSearchClick } =
  gptSlice.actions;
export default gptSlice.reducer;
