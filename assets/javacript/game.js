//////// I STILL NEED TO: ///////
//  *REMOVE THE GOD DAMN COMAS FOR LETTERS GUESSED BECAUSE JOINE METHOD DONT WORK!!! 
//  *Make a counter for id="guessesLeft" that starts at 12 and decreases by 1 for every
//   letter in wrongGuess[]
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

//This array is where the randomly selected hipHopArtist will appear 
var selectedArtist;

//Function sets a variable equal to a random hipHopArtist index, generated by the Math.random mehtod
//This hipHopArtist index is then pushed to the selected artist array
function selection() {
    var choice = hipHopArtist[Math.floor(Math.random() * hipHopArtist.length)];
    return choice;
};

selectedArtist = selection();


console.log(selectedArtist);

//The output of selection() is saved to the variable chosenWord

var chosenWord = selection();
//var wordWithComa = selectionOutput.split('');
//var chosenWord = wordWithComa.join('');


console.log(chosenWord);
console.log(chosenWord.length);
console.log(chosenWord);

//Create an array where all letters guessed will be pushed
var lettersGuessed = [];

//Create an where incorrect guesses will be pushed
var wrongGuess = [];

//Creat a variable to hold guesses remaining
var guessCounter = 12; 

//create a function that checks the chosenWord with the eventKey (eventKey is defined as event.key when I define addKeyPressListener) 
//If all indexes of chosenWord do not match eventKey, then add (or push) the eventKey to the wrongGuess array and decrease the counter by one

function updateWrongGuessesAndCount(eventKey) {
    if(containsChar(wrongGuess, eventKey)) {
        guessCounter += 0;   
        return;
    }
    if(!containsChar(chosenWord, eventKey) && containsChar(lettersGuessed, eventKey)) {
        wrongGuess.push(eventKey + " ");
        guessCounter -= 1;
    }
}

//This function updates the screen by placing the generated string into the Word section, updating the Number Of Guesses Remaining with the var guessCounter
//...and logging the guessed letters into your Already Guessed space
function updateScreen() {
    buildWordOutput = buildWordDisplay(lettersGuessed, chosenWord);
    document.getElementById("currentWord").innerHTML = buildWordOutput;
    document.getElementById("guessesLeft").innerHTML = guessCounter;
    var guessInput = wrongGuess.toString();
    var guessInputCapital = guessInput.toUpperCase();
    document.getElementById("guessSpace").innerHTML = guessInputCapital;
};

//This function checks if you have zero guesses left and alerts the user "You lose" if guesses are zero, resets the letters guessed
function determineWinOrLose() {
    if(guessCounter == 0) {
        alert("You lose!");
        lettersGuessed = [];
        wrongGuess = [];
        guessCounter += 12;
        chosenWord = selection();
        buildWordDisplay();
    } else if(!containsChar(buildWordOutput, "_" )) {
        lettersGuessed = [];
        wrongGuess = [];
        guessCounter += 12;
        chosenWord = selection();
        buildWordDisplay();
        alert("winner");
    }
}

//Create a function that saves the key pressed to a variable
//Within the function, push the variable (x) to the array of lettersGuessed so that the key pressed goes into the array to compare with the chosenWord
//On key up, log the key pressed to letters guessed, run the updateWrongGuessesAndCount function to check the event key with the current word and update the screen
function addKeyPressListener() {
    document.addEventListener("keyup", function logLetter() {
        var x = event.key;
        lettersGuessed.push(x);
        updateWrongGuessesAndCount(x);
        updateScreen();
        determineWinOrLose();
    })
};

//Make a function that compares the parameters of array and char
//Loop through every index of array and check if it is equal to char
//  if it is equal, return true         else, return false

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
        if (chosenWord[i] == " ") {
            returnString += "  ";
        } else if (containsChar(lettersGuessed, chosenWord[i])) {
            returnString += chosenWord[i] + " ";
        } else {
            returnString += "_ ";   
        }
    }
    return returnString;  
}

console.log(chosenWord);

var buildWordOutput = buildWordDisplay();



/* function determineWinOrLose(buildWordOutput, guessesRemaining){
    if (guessesRemaining == 0) {
        alert("You Lose!")
    }
    for(i=0; i<buildWordOutput.length; i++) {
        if(buildWordOutput.charAt(i) == "_") {
            return     
        } 
    }
    alert("You win!");
} */



/* console.log(determineWinOrLose("_ _ _ _ _ _", 1));
console.log(determineWinOrLose("_ anana", 0));
console.log(determineWinOrLose("bana_a", 1));
console.log(determineWinOrLose("banana", 1));
console.log(determineWinOrLose("_ _ _", 12));
 */

addKeyPressListener();
//determineWinOrLose(guessCounter);
/* determineWinOrLose(buildWordOutput, guessCounter); */
/* determineWinOrLose */
console.log(lettersGuessed);
console.log(wrongGuess);







