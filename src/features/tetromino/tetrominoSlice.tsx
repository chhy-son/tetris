import { createSlice } from "@reduxjs/toolkit";
import { TetrominoType } from "../../classes/Tetromino";

interface TetrominoState {
  position: { x: number; y: number };
  shape: TetrominoType;
}

const initialState: TetrominoState = {
  position: { x: 0, y: 0 },
  shape: [],
};

export const tetrominoSlice = createSlice({
  name: "tetromino",
  initialState,
  reducers: {
    nowTetrominoIs: (state, action) => {
      state.shape = action.payload.tetromino;
    },
  },
});
