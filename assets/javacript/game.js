//////// I STILL NEED TO: ///////
//  ***** DONE: Turn the artist name into a string of "_" or "*" without the spaces between letters
//  *Log keys pressed into lettersGuessed[]
//      *If key in lettersGuessed[] matches one of the letters in chosenWord, then make
//       the letter appear 
//      *Else, log the letter into an incorrectGuess[] array and make the letters appear
//       in id="alreadyGuessed"
//  *Make a counter for id="guessesLeft" that starts at 12 and decreases by 1 for every
//   letter in incorrectGuess[]
//      *If guesses left reaches 0, generate a new chosenWord and start the guesses back to 12
//  *Make a counter for id="winCounter" that starts at 0 and increases for every win
//      *If all letters in currentWord are correctly guessed and the number of guesses left
//      does NOT equal 0, display a picture of the correctly guessed artist, generate a new
//      word, increase the win counter by one and reset the number of guesses remaining


//Array with list of hip-hop artists
var hipHopArtist = [
    "Notorious Big",
    "Ja Rule",
    "Big L",
    "Immortal Technique",
    "Afu Ra",
    "Gift Of Gab",
    "Atmosphere"
];

//Function sets a variable equal a random hipHopArtist index
//Math.random generates a random number between 0 and 1 and multiplies that number by the length of hipHopArtist
//Math.floor rounds it down to the nearest whole number so the answer is never a decimal

///I NEED TO MAKE IT SO THE SAME HIP HOP ARTIST IS NOT CHOSEN TWICE BEFORE THE ARRAY HAS BEEN COMPLETELY RUN THROUGH!!!
//Create an array that logs all the artists randomly selected (selectedArtist)
//Push the outcome of selection() into the array
//Compare the contents of selectedArtist with choice
//  If the choice matches one of the indexes of selectedArtist, return false and don't run the selection
//  Else, return the choice and write it into the id="currentWord"

var selectedArtist = [];

function selection() {
    choice = hipHopArtist[Math.floor(Math.random() * hipHopArtist.length)];
    selectedArtist.push(choice);
    return choice;
};

selection();
console.log(selectedArtist);

//Take the randomly accessed hipHopArtist index and turn each letter into a string
//Create a function that takes the array and puts it into the space of the id="currentWord" with the .innerHTML method
//Setting the style.visibility to "hidden", I hide the array from view but still allow it to take up space on the page with each letter underlined
//***** SOLVED: I need to get the output of selection function to turn the word into strings around each individual letter *****/
//***** SOLVED: I need to  hide the aray but put it in the id="currentWord" space  *****/
//***** SOLVED: Console tells me that I "cannot set property 'innerhtml' to null". Why is hiddenWord() returning null when it plugs wordToArray in the inner html of id="currentWord"? *****// 

var selectionOutput = selection();
var wordWithComa = selectionOutput.split('');
var chosenWord = wordWithComa.join('');


console.log(chosenWord);
console.log(chosenWord.length);
console.log(chosenWord);

//Create an array where all letters guessed will be pushed
//Create an array where correct and incorrect guesses will be pushed

var lettersGuessed = [];
var correctGuess = [];
var wrongGuess = [];

//Create a function that saves the key pressed to a variable
//Within the function, push the variable (x) to the array of lettersGuessed so that the 
//...key pressed goes into the array to compare with the chosenWord

//create a function that sets the inner HTML of id="currentWord" to the output of 
//...buildWordDisplay(lettersGuessed, chosenWord), which is returnString. I've 
//...built returnString within the function so that 

function addKeyToCorrectArray(eventKey) {
    if(containsChar(currentWord, eventKey)) {
        
    }
}

function updateCurrentWord() {
    document.getElementById("currentWord").innerHTML = buildWordDisplay(lettersGuessed, chosenWord);
}

function addKeyPressListener() {
    document.addEventListener("keyup", function logLetter() {
        var x = event.key;
        addKeyToCorrectArray(x);
        updateCurrentWord();
    })
};

//Make a function that compares lettersGuessed[x] with chosenWord[i]
//Set this function up with a for loop the cycles through each index 
//...of array up to array.length
//  if array[x] is equal to char, it returns a true value
//  if array[x] is not eqaul to char, it returns a false value and 
//...pushes the character to wrongGuess

function containsChar(array, char) {
    for(x=0; x<array.length; x++) {    
        if(array[x].toUpperCase() == char.toUpperCase()) {
            return true;
        } 
    }
    return false;
}

//For every letter in the chosenWord,
//  If any of the letters guessed are identical to a letter in chosenWord
//      add the correctly guessed letter into the return string
//  Else, add an asterik mark for the respective letter and log the 

function buildWordDisplay() {
    var returnString = "";
    for(i=0; i<chosenWord.length; i++) { 
        if (containsChar(lettersGuessed, chosenWord[i])) {
            returnString += chosenWord[i] + " ";
            } else {
            returnString += "_ ";   
        }
    }
    return returnString;  
}

console.log(chosenWord);

//Add event listener to fire buildWordDisplay() everytime a key is pressed up
//This will ensure that everytime a new letter is added to the lettersGuessed, buildWordDisplay()
//...will run, using the updated array in it's parameter 


addKeyPressListener();
updateCurrentWord();
buildWordDisplay();
console.log(wrongGuess);
console.log(lettersGuessed);







