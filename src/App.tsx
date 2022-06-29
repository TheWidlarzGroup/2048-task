import "./App.css";
import { Board } from "./components/Board/Board";
import { useGameBoard } from "./components/Board/useGameBoard";

function App() {
  const { tiles, generateInitialTiles } = useGameBoard();
  return (
    <div className="App" style={{ marginTop: "75px" }}>
      <button onClick={generateInitialTiles}>Start game</button>
      <Board tiles={tiles} />
    </div>
  );
}

export default App;
