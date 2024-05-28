export type CellType = string;
export type BoardType = CellType[][];

const initialState = {
  fillColor: "black",
  height: 20,
  weight: 10,
};

const initialBoard = Array.from(Array(initialState.height), () =>
  Array(initialState.weight).fill(initialState.fillColor),
);

class TetrisBoard {
  private _board: BoardType = initialBoard;

  get board(): BoardType {
    return this._board;
  }

  public clearRow() {
    const isFullRow = (cell: CellType) => cell !== initialState.fillColor;
  }

  public clearBoard() {
    this._board = initialBoard;
  }
}

export default TetrisBoard;
