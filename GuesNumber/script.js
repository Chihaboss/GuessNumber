let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => { return Math.floor(Math.random() * 9);
}
const compareGuesse = (humainGuesse, compGuess, guessNumb) => {
userGuess = parseInt(userGuess);
compGuess = parseInt(compGuess);
let userDifference = Math.abs(targetNumber-userGuess);

let compDifference = Math.abs(targetNumber-compGuess);
if ( userDifference < compDifference ) {

return true;}

else if (userDifference > compDifference) {

return false;}

else {return true;}
};
const updateScore = (winner) => {
  if (winnerName === 'human') {

humanScore=humanScore+1;}
else if (winnerName === 'computer') {computerScore=computerScore+1;}
};
const advanceRound=()=>{

currentRoundNumber=currentRoundNumber+1;

};



