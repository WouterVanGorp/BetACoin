import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SquareState {
  games: { id: number; rows: number; cols: number }[];
}

// Define the initial state using that type
const initialState: SquareState = {
  games: [],
};

export const squareSlice = createSlice({
  name: "square",
  initialState,
  reducers: {
    addGame: (state) => {
      state.games.push({ id: state.games.length + 1, rows: 4, cols: 4 });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGame } = squareSlice.actions;

export default squareSlice.reducer;
