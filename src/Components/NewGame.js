function NewGame(props) {
  // we re-render the game with a refresh of the page
  function handleNewGame() {
    window.location.reload(false);
  }

  // this button only shows when the gameOver state/prop is true
  if (props.gameOver === true) {
    return (
      <>
        <button className="new-Button" onClick={handleNewGame}>
          New Game
        </button>
      </>
    );
  }
}

export default NewGame;
