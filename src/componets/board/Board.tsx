import Cell from "./Cell.tsx";
import "./Board.css";

export type BoardType = string[][];

interface IProps {
  render: BoardType;
  cellSize: number;
}

function Board(props: IProps) {
  return (
    <div className="board">
      {props.render.map((row, rowIdx) => (
        <div className="board row" key={"BoardRow-" + rowIdx}>
          {row.map((color, colIdx) => (
            <Cell
              key={"Cell" + colIdx}
              color={color}
              cellSize={props.cellSize}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
