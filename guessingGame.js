let randomNumber = Math.floor(Math.random() * 100) + 1;     //to get the random number

const guesses = document.querySelector('.guesses');         // to get the users guess
const lastResult = document.querySelector('.lastResult');   // 
const lowOrHi = document.querySelector('.lowOrHi');         //

const guessSubmit = document.querySelector('.guessSubmit'); //
const guessField = document.querySelector('.guessField');   //

let guessCount = 1;
let resetButton;