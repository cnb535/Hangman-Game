
// $(document).ready(function() {});

// <!-- Game sarts when a (any) button is pressed -->

// <!-- A random word from a group of words is secretly selected -->

	//An object that stores 5 arrays with 1 strng.
const words = {
	o1: ["Shipoopi"], 
	o2: ["Cool Whip"],
	o3: ["Evil Monkey"], 
	o4: ["Surfin' Bird"], 
	o5: ["Road House"]
};

let score = 0;


let guesses = 0;
let wordIndex = 0;
 
//An array that stores all of the hangman word options
let wordsArray = [words.o1, words.o2, words.o3, words.o4, words.o5];

function selectWord() {
	if (wordIndex <= (wordsArray.length - 1)) {
		document.querySelector("#word").innerHTML = 
		wordsArray[wordIndex][0];
	} else {
		alert("Game Over");
	}
}

function updateScore() {
	document.querySelector("#score").innerHTML = score;
}


selectWord();
updateScore();

// <!-- User presses a letter key to guess a letter -->

    // const alreadyGuessed = document.querySelector("#already-guessed");

    window.addEventListener('keyup', function(event) {
      // alreadyGuessed.textContent = event.key;
      
      const userInput = String.fromCharCode(event.keyCode).toLowerCase();
  	  console.log(userInput);
    });  


// <!-- If they are wrong, that letter is displayed (at the bottom) and taken out of the options. The count for the number of guesses decreases. -->

// <!-- If they run out of guesses, the a "you lose" song plays and a display pops up -->

// <!-- If they are right the letter is displayed (at the top) and taken out of the options -->

// <!-- If they guesses all the right letters, A photo/video pops us and a song plays. -->





// <!-- The game restarts -->
// 
