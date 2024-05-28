import "./Cell.css";

interface IProps {
  color: string;
  cellSize: number;
}

export type CellType = string;

function Cell(props: IProps) {
  return (
    <div
      className="cell-wrapper"
      style={{
        width: props.cellSize,
        height: props.cellSize,
      }}
    >
      <div className="cell" style={{ backgroundColor: props.color }}></div>
    </div>
  );
}

export default Cell;
