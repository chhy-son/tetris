interface ITetromino {
  [key: string]: number[][];
}

const TETROMINOS: ITetromino = {
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

  return TETROMINOS[getRandomTetrominoType()];
}
