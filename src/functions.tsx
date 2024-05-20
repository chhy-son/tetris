type TetrominoType = { [key: string]: number[][] };

const TETROMINOS: TetrominoType = {
  TetrominoI: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  TetrominoO: [
    [1, 1],
    [1, 1],
  ],
};

export function getTetromino() {
  const getRandomTetrominoType = () => {
    const typeValue = Object.keys(TETROMINOS);
    const typeIndex = Math.floor(Math.random() * typeValue.length);
    return typeValue[typeIndex];
  };

  const getColor = () => {
    return "brown";
  };

  return TETROMINOS[getRandomTetrominoType()].map((cell) => cell && getColor());
}

export function drawBoard() {
  return [["white"]];
}
