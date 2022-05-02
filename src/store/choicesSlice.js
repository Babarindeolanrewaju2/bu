import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getOptions, getResult, capitalizeFirstLetter } from "../utils/helper";

const initialState = {
  userChoice: "",
  games: [],
  computerLoading: "",
  computerChoice: "",
  score: {},
  error: "",
  lastScores: [],
};

//it fetches all the choices from the endpoint
export const fetchChoices = createAsyncThunk("api/choices", async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/choices`
    );
    return response.data;
  } catch (e) {
    return e.response.data;
  }
});

//it fetches a random choice from the endpoint
export const fetchComputerChoice = createAsyncThunk(
  "api/computerChoice",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/choice`
      );
      return getOptions(response.data.id);
    } catch (e) {
      return e.response.data;
    }
  }
);

export const gameSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    // non-async reducers here
    setUserChoice: (state, { payload }) => {
      state.userChoice = payload;
      state.computerChoice = "";
    },
    setUserEmojiChoice: (state, { payload }) => {
      state.userEmojiChoice = payload;
    },
    resetScoreboard: (state) => {
      state.lastScores = [];
      state.userChoice = "";
      state.computerChoice = "";
      state.score = "";
    },
  },
  // async reducers here
  extraReducers: {
    [fetchChoices.pending]: (state) => {
      state.loading = true;
    },
    [fetchChoices.fulfilled]: (state, action) => {
      state.loading = false;
      // capitalizes the first letter of all choices
      state.games = action.payload.map((choice) => {
        return { ...choice, name: capitalizeFirstLetter(choice.name) };
      });
    },
    [fetchChoices.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchComputerChoice.pending]: (state) => {
      state.computerLoading = true;
    },
    [fetchComputerChoice.fulfilled]: (state, { payload }) => {
      state.computerLoading = false;
      state.computerChoice = payload;
      //returns the score
      let score = getResult(payload.choice, state.userChoice.choice);
      state.score = score;
      //spread previous scores and recent score
      state.lastScores = [score, ...state.lastScores];
    },
    [fetchComputerChoice.rejected]: (state, action) => {
      state.computerLoading = false;
      state.error = action.payload;
    },
  },
});
// Action creators
export const { setUserChoice, setUserEmojiChoice, resetScoreboard } =
  gameSlice.actions;
export default gameSlice.reducer;
