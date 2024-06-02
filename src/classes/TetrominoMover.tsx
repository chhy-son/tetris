import { Tetromino } from "./Tetromino";

class TetrominoMover {
  public moveLeft(tetromino: Tetromino) {
    tetromino.position.x -= 1;

    return true;
  }

  public moveRight(tetromino: Tetromino) {
    tetromino.position.x += 1;

    return true;
  }

  public softDrop(tetromino: Tetromino) {
    tetromino.position.y += 1;

    return true;
  }

  public hardDrop(tetromino: Tetromino, yPos: number) {
    tetromino.position.y = yPos;

    return true;
  }

  public rotateRight(tetromino: Tetromino) {
    tetromino;
  }
}

export default TetrominoMover;
