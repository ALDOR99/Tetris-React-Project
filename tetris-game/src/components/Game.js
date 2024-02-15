import Menu from "./Menu";
import Tetris from "./Tetris";
import { useGameOver } from "../hooks/useGameOver";
//-------------------------------------
const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
  };

  return (
    <div className="Game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <p>
          <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
        </p>
      )}
    </div>
  );
};
//-------------------------------------
export default Game;
