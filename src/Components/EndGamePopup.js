import React, { useState } from "react";

function EndGamePopup(props) {
  // we use react hooks for this popup. It is set to be ready to popup from first load
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // this component only shows when the game is over, and checks whether the player has any remaining lives
  // if so, we get the victory popup. If not, the lost popup
  // the close button then changes the popup state
  if (props.gameOver === true && props.lives === 0 && showPopup === true) {
    return (
      <div className="popup">
        <p>Alas, earwax! The country was... {props.answer}!</p>
        <button className="close-btn" onClick={togglePopup}>
          Close
        </button>
      </div>
    );
  } else if (props.gameOver === true && props.lives !== 0 && showPopup === true)
    return (
      <div className="popup">
        <p>You got it! Well done!</p>
        <div className="btn-container">
          <button className="close-btn" onClick={togglePopup}>
            Close
          </button>
        </div>
      </div>
    );
}

export default EndGamePopup;
