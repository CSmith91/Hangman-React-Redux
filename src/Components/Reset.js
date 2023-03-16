import { resetCurrent } from "../reducer";
import { useDispatch } from "react-redux";

function Reset(props) {
  // we use the dispatch for our reset
  const dispatch = useDispatch();

  function handleReset() {
    dispatch(resetCurrent());
  }
  // this button only shows for the ongoing game. If the game is over,
  // this button is not shown, and a 'New Game' button replaces it.
  if (props.gameOver === false) {
    return (
      <>
        <button className="startButton" onClick={handleReset}>
          Reset
        </button>
      </>
    );
  }
}

export default Reset;
