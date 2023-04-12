import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import gameService from "./gameService";

const initialState = {
  games: [],
  current: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create game
export const createGame = createAsyncThunk(
  "game/create",
  async (gameData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await gameService.creategame(gameData, token);
    } catch (error) {
      console.log(error);
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user games
export const getGames = createAsyncThunk("game/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await gameService.getGames(token);
  } catch (error) {
    console.log(error);
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete user game
export const deleteGame = createAsyncThunk(
  "game/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await gameService.deleteGame(id, token);
    } catch (error) {
      console.log(error);
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    unsetCurrent: (state) => {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createGame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.games.push(action.payload);
      })
      .addCase(createGame.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.games = action.payload;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteGame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteGame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.games = state.games.filter(
          (game) => game._id !== action.payload.id
        );
      })
      .addCase(deleteGame.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setCurrent, unsetCurrent } = gameSlice.actions;
export default gameSlice.reducer;
