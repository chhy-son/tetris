import { Tetromino } from "./Tetromino";

export type CellType = string;
export type BoardType = CellType[][];

const initialState = {
  emptyColor: "black",
  height: 20,
  width: 10,
};

const initialBoard = Array.from(Array(initialState.height), () =>
  Array(initialState.width).fill(initialState.emptyColor),
);

class TetrisBoard {
  private _board: BoardType = initialBoard;

  get board(): BoardType {
    return this._board;
  }

  public getBoardWith(tetromino: Tetromino) {
    tetromino.shape.map((line, xIdx: number) => {
      line.map((cell, yIdx: number) => {
        this._board[tetromino.position.x + xIdx][tetromino.position.y + yIdx] =
          cell ? tetromino.color : initialState.emptyColor;
      });
    });

    return this._board;
  }

  public clearLine(): void {
    const isLineIsFull = (ALine: CellType[]) =>
      ALine.every((cell) => cell !== initialState.emptyColor);

    this._board = this._board.map((line: CellType[]): CellType[] => {
      if (isLineIsFull(line)) {
        line = Array.from(
          { length: initialState.width },
          () => initialState.emptyColor,
        );
      }

      return line;
    });
  }

  public clearBoard() {
    this._board = initialBoard;
  }
}

export default TetrisBoard;
