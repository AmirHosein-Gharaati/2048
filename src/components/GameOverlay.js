import TryAgainLogo from "../assets/images/try-again.gif";

const GameOverlay = ({ onRestart, board }) => {
  if (board.hasWon()) {
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    return (
      <div className="game-over" onClick={onRestart}>
        <img className="game-over__image" src={TryAgainLogo} alt="Try Again" />
      </div>
    );
  }

  return null;
};

export default GameOverlay;
