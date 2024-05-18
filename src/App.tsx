import "./App.css";
import Board from "./componets/board/Board.tsx";

function App() {
  const render: string[][] = Array.from(Array(20), () =>
    Array(10).fill("brown"),
  );

  return (
    <div>
      this is board
      <Board render={render} cellSize={30} />
    </div>
  );
}

export default App;
