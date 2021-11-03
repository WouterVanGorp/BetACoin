import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../models";

// Define a type for the slice state
interface SquareState {
  games: Game[]
}

// Define the initial state using that type
const initialState: SquareState = {
  games: []
};

export const squareSlice = createSlice({
  name: "square",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = squareSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default squareSlice.reducer;
