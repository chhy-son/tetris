import { PositionType, TetrominoType } from "./Types.tsx";

abstract class Tetromino {
  private _position: PositionType = { x: 0, y: 0 };
  private _color: string = "white";
  protected _shape: TetrominoType = [[1]];

  get shape(): TetrominoType {
    return this._shape;
  }

  get position(): PositionType {
    return this._position;
  }

  set position(value: PositionType) {
    this._position = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}

export default Tetromino;
