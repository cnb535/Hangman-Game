
// $(document).ready(function() {});

// <!-- Game sarts when a (any) button is pressed -->

// <!-- A random word from a group of words is secretly selected -->

// const wordSelection = ["Shipoopi", "Cool Whip", "Evil Monkey", "Surfin' Bird", "Road House"]

// const letters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
// 	"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"] 
// }



// <!-- User presses a letter key to guess a letter -->

    const alreadyGuessed = document.querySelector("#already-guessed");

    window.addEventListener('keyup', function(event) {
      alreadyGuessed.textContent = event.key;
    });  


// <!-- If they are wrong, that letter is displayed (at the bottom) and taken out of the options. The count for the number of guesses decreases. -->

// <!-- If they run out of guesses, the a "you lose" song plays and a display pops up -->

// <!-- If they are right the letter is displayed (at the top) and taken out of the options -->

// <!-- If they guesses all the right letters, A photo/video pops us and a song plays. -->

// <!-- The game restarts -->
// 
