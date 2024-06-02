import { Tetromino, TetrominoI, TetrominoO } from "./Tetromino";

class TetrominoCreator {
  private tetrominos: Array<Tetromino> = [new TetrominoO(), new TetrominoI()];

  public createTetromino(): Tetromino {
    const idx = Math.floor(Math.random() * this.tetrominos.length);

    return this.tetrominos[idx];
  }
}

export default TetrominoCreator;
