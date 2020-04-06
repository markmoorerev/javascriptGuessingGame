let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
guessSubmit.addEventListener('click', checkGuess);

const guessField = document.querySelector('.guessField');

const invalidInput = document.querySelector('.invalidInput');


let guessCount = 1;
let resetButton;

function checkGuess(){

    //validate the user input.
    if (isNaN(guessField.value) || guessField.value < 1 || guessField.value > 100) {
        invalidInput.textContent = 'That was not a valid number';
        guessField.value = '';  //empties the text field
        lowOrHi.textContent = '';
        guessField.focus();     //puts the curser in the text field
        return;
      }else{
        invalidInput.textContent = '';
    }

    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    
    guessCount++;           //increments the guess count
    guessField.value = '';  //empties the text field
    guessField.focus();     //puts the curser in the text field
}

function setGameOver() {
    guessField.disabled = true; //prevents user from submitting more guesses after the game is over
    guessSubmit.disabled = true;//prevents user from submitting more guesses after the game is over
    resetButton = document.createElement('button'); //create a enw button element
    resetButton.textContent = 'Start new game';     //set the text on the new button
    document.body.append(resetButton);              //add the new button to the .html
    resetButton.addEventListener('click', resetGame);//when the new button is clicked, resetGame() is called.
  }

function resetGame() {
    guessCount = 1;//reset the guesscount. you don't have to redeclare it.

    const resetParas = document.querySelectorAll('.resultParas p');// grap the element with all the feedback <p>'s
    
    for (let i = 0 ; i < resetParas.length ; i++) {//starting value, exit condition, incrementor
        //select all paragraphs inside <div class="resultParas"></div>, 
        //then loop through each one, setting their textContent to '' (an empty string).
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);// removes the reset button from the page.

    guessField.disabled = false;    // Re-enable the form elements.
    guessSubmit.disabled = false;   // Re-enable the form elements
    guessField.value = '';          // empties the text field
    guessField.focus();             // puts the curser in the text field

    lastResult.style.backgroundColor = 'white';//Removes the background color from the lastResult paragraph.

    randomNumber = Math.floor(Math.random() * 100) + 1;//Generates a new random number
}

// tasks for the students to do
// 1. a) add validation to the number input so that only numbers are allowed
//    b) add a text warning field saying "That was not a valid number" to tell the user that their input was invalid. Do not increment the turn.
//    c) on input of the next valid number, remove the text warning field.
// 2. add verbose commentary to every line possible to explain in detail what the code is doing.
// 3. add code to make it possible for a number to be entered by pressing 'enter' on the keyboard instead of having to click the submit button.
// 4. On successful game completion, change the element with "Number Guessing Game" to "You guessed it!". 
// 5. On starting a new game, change the "You guessed it!" back to "Number Guessing Game".
// 6. 
