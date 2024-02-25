import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configureSlice from "./configureSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
    gpt: gptSlice,
    config: configureSlice,
  },
});

export default appStore;
