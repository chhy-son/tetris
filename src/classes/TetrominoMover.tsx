import { Tetromino } from "./Tetromino";

class TetrominoMover {
  public moveLeft(tetromino: Tetromino) {
    tetromino.position.x -= 1;
  }

  public moveRight(tetromino: Tetromino) {
    tetromino.position.x += 1;
  }

  public softDrop(tetromino: Tetromino) {
    tetromino.position.y += 1;
  }
}

export default TetrominoMover;
