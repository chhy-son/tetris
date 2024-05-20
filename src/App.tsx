import "./App.css";
import Board from "./componets/board/Board.tsx";

function App() {
  const render: string[][] = Array.from(Array(20), () =>
    Array(10).fill("black"),
  );

  return (
    <div>
      <Board render={render} cellSize={30} />
    </div>
  );
}

export default App;
