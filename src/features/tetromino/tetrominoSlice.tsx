import { createSlice } from "@reduxjs/toolkit";

interface TetrominoState {
  position: { x: number; y: number };
  shape: TetrominoType;
}

const initialState: TetrominoState = {
  position: { x: 0, y: 0 },
  shape: TETROMINOS["TetrominoI"],
};

export const tetrominoSlice = createSlice({
  name: "tetromino",
  initialState,
  reducers: {
    moveLeft: (state) => {
      state.position.x -= 1;
    },
    moveRight: (state) => {
      state.position.x += 1;
    },
    moveUp: (state) => {
      state.position.y -= 1;
    },
    moveDown: (state) => {
      state.position.y += 1;
    },
    nowTetrominoIs: (state, action) => {
      state.shape = action.payload.tetromino;
    },
  },
});
