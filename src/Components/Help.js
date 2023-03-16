import React, { useState } from "react";

function Help() {
  // we use a react hook for our help popup, initally set to false
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // if the showPopup state is true, it will show the 'rules' of the game
  // a close button then toggles the popup state back to false
  return (
    <>
      <button className="help-btn" onClick={togglePopup}>
        Help
      </button>

      {showPopup && (
        <div className="popup">
          <h2>Help</h2>
          <ul>
            <li>Guess the country by clicking on a letter.</li>
            <li>
              Countries comprising more than one word are included with no
              spaces
            </li>
            <li>
              Special characters like ' aren't included. Accents like "á" are
              listed as "a".
            </li>
            <li>If you are correct, the letter will be revealed.</li>
            <li>
              If you are wrong, the drawing of the hanged man will progress.
            </li>
            <li>
              If the stick man is drawn in full, before you guess the country,
              you lose.
            </li>
            <li>
              If you can guess the country without getting too many wrong
              letters, you win!
            </li>
            <li>You can reset this game with the reset button. Good luck!</li>
          </ul>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </>
  );
}

export default Help;
