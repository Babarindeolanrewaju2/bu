import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./choicesSlice";

export const store = configureStore({
  reducer: {
    choices: gameReducer,
  },
});
