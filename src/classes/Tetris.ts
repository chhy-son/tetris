import TetrisBoard from "./TetrisBoard.tsx";
import TetrominoCreator from "./TetrominoCreator.tsx";
import TetrominoMover from "./TetrominoMover.tsx";

class Tetris {
  private board: TetrisBoard;
  private creator: TetrominoCreator;
  private mover: TetrominoMover;

  constructor() {
    this.board = new TetrisBoard();
    this.creator = new TetrominoCreator();
    this.mover = new TetrominoMover();
  }

  public play() {
    this.board.clearBoard();

    const nowTetromino = this.creator.createTetromino();

    this.mover.softDrop(nowTetromino); //todo every 200ms
  }
}

export default Tetris;
