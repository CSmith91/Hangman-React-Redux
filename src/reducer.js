import { createSlice } from "@reduxjs/toolkit";

// we establish our button array using the alphabet, creating a new array
// of objects for each letter that includes the pressed boolean
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let arr = [];
let i = 0;

for (i = 0; i < alphabet.length; i++) {
  let object = {
    letter: alphabet[i],
    pressed: false
  };
  arr.push(object);
}

// draw on this array of countries and select one using random indexing
const countries = [
  "afghanistan",
  "albania",
  "algeria",
  "andorra",
  "angola",
  "argentina",
  "armenia",
  "australia",
  "austria",
  "azerbaijan",
  "bahamas",
  "bahrain",
  "bangladesh",
  "barbados",
  "belarus",
  "belgium",
  "belize",
  "benin",
  "bhutan",
  "bolivia",
  "bosnia",
  "botswana",
  "brazil",
  "brunei",
  "bulgaria",
  "burkina",
  "burundi",
  "cambodia",
  "cameroon",
  "canada",
  "chad",
  "chile",
  "china",
  "colombia",
  "comoros",
  "congo",
  "costarica",
  "croatia",
  "cuba",
  "cyprus",
  "czechia",
  "denmark",
  "djibouti",
  "dominica",
  "dominicanrepublic",
  "ecuador",
  "egypt",
  "elsalvador",
  "equatorialguinea",
  "eritrea",
  "estonia",
  "eswatini",
  "ethiopia",
  "fiji",
  "finland",
  "france",
  "gabon",
  "gambia",
  "georgia",
  "germany",
  "ghana",
  "greece",
  "grenada",
  "guatemala",
  "guinea",
  "guineabissau",
  "guyana",
  "haiti",
  "honduras",
  "hungary",
  "iceland",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "ireland",
  "israel",
  "italy",
  "jamaica",
  "japan",
  "jordan",
  "kazakhstan",
  "kenya",
  "kiribati",
  "kuwait",
  "kyrgyzstan",
  "laos",
  "latvia",
  "lebanon",
  "lesotho",
  "liberia",
  "libya",
  "liechtenstein",
  "lithuania",
  "luxembourg",
  "madagascar",
  "malawi",
  "malaysia",
  "maldives",
  "mali",
  "malta",
  "marshallislands",
  "mauritania",
  "mauritius",
  "mexico",
  "micronesia",
  "moldova",
  "monaco",
  "mongolia",
  "montenegro",
  "morocco",
  "mozambique",
  "myanmar",
  "namibia",
  "nauru",
  "nepal",
  "netherlands",
  "newzealand",
  "nicaragua",
  "niger",
  "nigeria",
  "northkorea",
  "northmacedonia",
  "norway",
  "oman",
  "pakistan",
  "palau",
  "palestine",
  "panama",
  "papuanewguinea",
  "paraguay",
  "peru",
  "philippines",
  "poland",
  "portugal",
  "qatar",
  "romania",
  "russia",
  "rwanda",
  "saintkittsandnevis",
  "saintlucia",
  "saintvincentandthegrenadines",
  "samoa",
  "sanmarino",
  "saotomeandprincipe",
  "saudiarabia",
  "senegal",
  "serbia",
  "seychelles",
  "sierraleone",
  "singapore",
  "slovakia",
  "slovenia",
  "solomonislands",
  "somalia",
  "southafrica",
  "southsudan",
  "spain",
  "srilanka",
  "sudan",
  "suriname",
  "sweden",
  "switzerland",
  "syria",
  "taiwan",
  "tajikistan",
  "tanzania",
  "thailand",
  "togo",
  "tonga",
  "trinidadandtobago",
  "tunisia",
  "turkey",
  "turkmenistan",
  "tuvalu",
  "uganda",
  "ukraine",
  "unitedarabemirates",
  "unitedkingdom",
  "unitedstates",
  "uruguay",
  "uzbekistan",
  "vanuatu",
  "vatican",
  "venezuela",
  "vietnam",
  "yemen",
  "zambia",
  "zimbabwe"
];

const randomIndex = Math.floor(Math.random() * countries.length);
const country = countries[randomIndex];

// with our selected country, we create an array of objects, adding the revealed boolean
// to each letter
function secretCountryObject(country) {
  // console.log(inputArray)

  let wordArray = [];
  let i = 0;
  for (i = 0; i < country.length; i++) {
    let object = {
      letter: country[i],
      revealed: false
    };
    wordArray.push(object);
  }

  return wordArray;
}

// this is out initialState. We have the buttons setup.
// We set 10 lives, we have our selected country as an array of objects,
// our gameOver state as false (so we can play)
// we have our winCountdown, which reduces each time a letter is revealed
// when every letter in the country is marked as revealed, we win.
// but is lives get to 0 first, we lose
const initialState = {
  buttons: arr,
  lives: 10,
  secretCountry: secretCountryObject(country),
  winCountdown: country.length,
  gameOver: false,
  answer: country
};

// our slice
const gameSlice = createSlice({
  name: "game",
  initialState,

  reducers: {
    clicked: (state, action) => {
      // first, we check if we can play
      if (state.gameOver === true) {
        return console.log(`Game is over, click restart to play again.`);
      }

      // set letter to be the string value of our action.payload
      const letter = String(action.payload);

      // this covers the state of our button
      let index = -1;
      for (let i = 0; i < state.buttons.length; i++) {
        // if the letter of our button is the same as the input letter, we have
        // identfied the index of our button object
        if (String(state.buttons[i].letter) === String(letter)) {
          index = i;
          break;
        }
      }
      if (index !== -1) {
        // we then have our button selected and, if not pressed previously, we set to pressed
        const button = state.buttons[index];
        if (button.pressed === false) {
          // we also set up a variable called success
          let success = false;
          button.pressed = !button.pressed;
          // check if the clicked button 'letter' is in our secretCountry state by looping through the secretCountry array by letter

          for (i = 0; i < state.secretCountry.length; i++) {
            if (state.secretCountry[i].letter === letter) {
              // if the pressed letter matches a letter in the secretCountry word
              // we set the letter in the country to 'revealed' so it shows on our board
              // we also decrease the winCountdown and mark the success as 'true'
              state.secretCountry[i].revealed = !state.secretCountry[i]
                .revealed;
              state.winCountdown--;
              success = true;
            }
          }
          // if the for loop has completed and no match was found, the player loses a life
          if (success === false) {
            state.lives--;
          }
        }
      }
      // lastly, check win or loss status
      if (state.winCountdown === 0) {
        state.gameOver = !state.gameOver;
      }
      if (state.lives === 0) {
        state.gameOver = !state.gameOver;
      }
    },
    // resetting the current game back to it's initial state
    resetCurrent: () => {
      return initialState;
    }
  }
});

export const { clicked, resetCurrent } = gameSlice.actions;
export default gameSlice.reducer;
