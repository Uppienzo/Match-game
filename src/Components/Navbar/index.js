import './index.css'

const Navbar = props => {
  const {seconds, score} = props

  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-timer-text">
        <p className="score-text">
          Score: <span>{score}</span>
        </p>
        <div className="score-text">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p>{seconds} sec </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
