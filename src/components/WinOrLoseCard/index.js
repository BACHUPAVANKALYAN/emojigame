// Write your code here.
import './index.css'

const LOST_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLossCard = props => {
  const {onClickPlayAgain, isWon, score} = props
  const imageUrl = isWon ? WON_IMG : LOST_IMG
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button type="button" className="play-again" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imageUrl} className="win-or-lose-image" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
