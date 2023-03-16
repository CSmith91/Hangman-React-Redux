import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { clicked } from "./reducer";
import Gallows from "./Components/Gallows";
import NewGame from "./Components/NewGame";
import Reset from "./Components/Reset";
import Help from "./Components/Help";
import EndGamePopup from "./Components/EndGamePopup";

export default function App() {
  // we select the various state children from our reducer
  // which we will then manipulate
  const buttonLetters = useSelector((state) => state.game.buttons);
  const secretCountry = useSelector((state) => state.game.secretCountry);
  const lives = useSelector((state) => state.game.lives);
  const gameOver = useSelector((state) => state.game.gameOver);
  const answer = useSelector((state) => state.game.answer);
  const dispatch = useDispatch();

  // we create our word board by mapping the country word by letter
  // each letter has a revealed boolean, this is passed through a function
  // to determine whether that letter will show on the board.
  const wordBoard = secretCountry.map((letter, index) => {
    return (
      <div key={index} className="charContainer">
        <p id={letter.letter}>{handleBoardLetters(letter)}</p>
      </div>
    );
  });

  // we check the letter's revealed boolean. If false, we output an underscore,
  // otherwise we show the letter
  function handleBoardLetters(char) {
    if (char.revealed === false) {
      return "_";
    } else if (char.revealed === true) {
      return char.letter;
    }
  }

  // we map the buttons out from the letters set out in our reducer
  // each button letter also has a pressed boolean, and this state is handled
  // with the handleClass function for our CSS class styles
  // We also have an onClick listener for each button
  const buttonLetter = buttonLetters.map((char, index) => {
    return (
      <div key={index} className="buttonContainer">
        <button
          id={char.letter}
          className={handleClass(char.pressed)}
          onClick={(e) => handleClick(e)}
        >
          {char.letter}
        </button>
      </div>
    );
  });

  // this function determines the CSS style for our button based on whether
  // it's pressed or not
  function handleClass(pressed) {
    if (pressed === true) {
      return "clicked";
    } else {
      return "unclicked";
    }
  }

  // when a button is pressed, we pass it's id (letter) into our clicked dispatch
  function handleClick(e) {
    e.preventDefault();
    dispatch(clicked(e.target.id));
  }

  return (
    <div className="App">
      <h1>Hangman: Countries</h1>
      <h3>Can you guess the country?</h3>
      <div>
        <div>
          <Gallows lives={lives} />
          <span className="wordContainer">
            <span className="wordBoard"> {wordBoard}</span>
          </span>
        </div>
      </div>
      <span className="keyboardContainer">{buttonLetter}</span>
      <Reset gameOver={gameOver} />
      <NewGame gameOver={gameOver} />
      <Help />
      <EndGamePopup gameOver={gameOver} lives={lives} answer={answer} />
    </div>
  );
}
