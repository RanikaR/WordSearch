// array of 10 words in the puzzle
const wordList = ['ark', 'bar', 'bat', 'cab', 'car', 'cat', 'far', 'raw', 'tab', 'war'];

// word count
let wc = 10;

// array of guessed words
let attempts = [];

// the onclick function when submit is pressed
function submit() {
  // var x is the input "answer"
  let x = document.getElementById("answer").value;

  // checks if input has already been guessed
  if (attempts.includes(x)) {   
    // prints out guessed words
    console.log('You already guess these words: ' + attempts.toString()) }
  
  // checks if input is in wordList
  else if (wordList.includes(x)) {                   
     // tells user they found the word
    console.log('You found ' + x +'! Great!')       
    // subtracts 1 from the word count
      --wc                                           
    // tells how many words are left
    console.log('There are ' + wc + ' words left.') 
    // adds word to attempts array
    attempts.push(x)}
  
  else {      
    // tells user word is not part of puzzle
    console.log('Invalid word.')}                   
  }
