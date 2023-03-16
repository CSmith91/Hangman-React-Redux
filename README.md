# Hangman-React-Redux
Hangman for the countries of the world, built using React-Redux

![image](https://user-images.githubusercontent.com/10632213/225597595-0076db8c-e0f5-48dc-99a4-3387a7530c50.png)

## Contents
<ol>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a><ol>
  <li><a href="#buttons">Buttons</a></li>
    <li><a href="#word-board">Word Board</a></li>
      <li><a href="#gallows">Gallows</a></li>
        <li><a href="#reset-button">Reset Button</a></li>
          <li><a href="#help-button">Help Button</a></li>
            <li><a href="#game-over">Game Over</a></li>
  </ol>
  </li>
  <li><a href="#improvements">Improvements</a></li>
  <li><a href="#credits">Credits</a></li>
</ol>


## Installation
Download the Hangman-React-Redux folder to your local machine, or otherwise copy the files to <a href="https://codesandbox.io">Code Sandbox</a> for instant use. Please note that the node modules are not included. You will need to install React and Redux on your machine to run this (or otherwise use Code Sandbox).

## Usage
The app demonstrates the utility of React-Redux, making use of reducers, of 'configureStore' and 'useState'. The user can click on the buttons as an attempt at guessing if that corrresponding letter appears on the word board. 

### Buttons
The buttons are one of the states kept in our store, and are styled to show whehter they've been pressed or not.

![image](https://user-images.githubusercontent.com/10632213/225598551-bbb6d2d7-c6e8-4640-a360-8d348fd61a44.png)

![image](https://user-images.githubusercontent.com/10632213/225600916-016f1a97-efbf-4188-bdce-280d5f62939e.png)


### Word Board
Our board starts as an array of underscores. 

![image](https://user-images.githubusercontent.com/10632213/225600458-f5d8a0a1-a8b5-4ada-9aca-51773804d196.png)

If a pressed button's corresponding letter matches a letter listed in the country, the word board updates to reveal this letter.

![image](https://user-images.githubusercontent.com/10632213/225600636-b08dd193-fbdb-47b7-9d47-e0cd066e6131.png)

![image](https://user-images.githubusercontent.com/10632213/225600784-7b0707b2-b2c5-4471-8e6c-8a9e0e13cb6e.png)


### Gallows
Whenever an incorrect button is pressed, the gallows updates.

![image](https://user-images.githubusercontent.com/10632213/225600417-93581dab-daab-4e1f-a5fc-e116cee22695.png)

![image](https://user-images.githubusercontent.com/10632213/225600533-d9baa474-07b3-4d52-b128-6afc4f408968.png)



### Reset Button
The Reset Button returns the state back to its initial state. <em>Please note, this resets the current game, it does not create a new game.</em>

![image](https://user-images.githubusercontent.com/10632213/225601773-4b313d47-a807-449d-aa6f-12577a46efd0.png)

![image](https://user-images.githubusercontent.com/10632213/225601816-1bbe3125-e7dd-4b13-b5a0-74de39eb69b0.png)


### Help Button
The help button is a popup as per the below, and is toggled as showing or not.

![image](https://user-images.githubusercontent.com/10632213/225601884-6aa78a5b-700b-4d09-8e89-f3b9dd1b1464.png)


### Game Over
The game ends with a message that changes depending on whether the player wins or loses the game. The message is a popup, and when closed, returns the game state as 'frozen', allowing the player to bask or lament in their win or loss. The buttons are locked in their state and the reset button is replaced with a new game button.

Win message:

![image](https://user-images.githubusercontent.com/10632213/225602621-5ec69322-79e1-4b47-ab6c-581fac2f36fe.png)

Loss message:

![image](https://user-images.githubusercontent.com/10632213/225603002-f60e3009-bc70-4529-9eee-6fd1f1117765.png)


#### New Game Button
The new game button allows the user to play a new game with a new random country. It only appears when the current game has been won or lost.

![image](https://user-images.githubusercontent.com/10632213/225602704-4297e360-4ecb-4150-9b9e-defabaf905a8.png)

![image](https://user-images.githubusercontent.com/10632213/225602761-e8371bb9-13cc-41e9-9dd2-95ad86be3087.png)

![image](https://user-images.githubusercontent.com/10632213/225602794-37f14bdd-e6c3-49f7-915d-05cce8f8ea15.png)


## Improvements
The game's reset button could benefit from a confirmation popup to cover the event that a player accidentally presses it. It would be preferable for the new game button to reset the state to its initial state whilst indexing a new random countrym, rather than just refreshing the page.

## Credits
This project was made by me and is maintained by me. The list of countries is up to date as of 2023, which countries with special characters not included, and countries will multiple words listed as one single word.
