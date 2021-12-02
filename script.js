let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10) 
}
// Next function compareGuesses
const compareGuesses = (humanGuess, computerGuess, targetNum) => {

const humanDiff = Math.abs(targetNum - humanGuess);

const computerDiff = Math.abs(targetNum - computerGuess);

return humanDiff <= computerDiff

};

const updateScore = (string) => {
  switch (string) {
    case 'human':
    humanScore = humanScore + 1;
    break;
    case 'computer':
    computerScore = computerScore + 1;
    break;
  }
}
const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1
}