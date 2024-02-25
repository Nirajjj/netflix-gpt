import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
  name: "configure",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = configureSlice.actions;

export default configureSlice.reducer;
