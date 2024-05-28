import Board from "../../componets/board/Board.tsx";
import TetrisBoard from "../../classes/TetrisBoard.tsx";

function GamePage() {
  const tetrisBoard = new TetrisBoard();

  return (
    <div>
      <Board render={tetrisBoard.board} cellSize={30} />
    </div>
  );
}

export default GamePage;
