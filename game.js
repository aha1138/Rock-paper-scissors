let playerScore= 0;
let computerScore= 0;
let computerChoice=['Rock','Paper','Scissor'];

function computerPlay () {
    let result = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return result;
}

function playRound (playerSelection,computerSelection){

    if (playerSelection === 'Rock'    && computerSelection === 'Scissor') {
        return "You Win! Rock beats Scissor"}

    if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        return "You Win! Scissor Beats Paper!"} 

    if (playerSelection === 'Paper'   && computerSelection === 'Rock'){
        return "You Win! Paper Beats Rock!"}

    if(playerSelection    === 'Rock'   && computerSelection === 'Paper') {
        return "You Lose! Paper Beats Rock"}

    if (playerSelection   === 'Scissor'&& computerSelection === 'Rock') {
        return "You Lose! Rock Beats Scissor"} 
          
    if (playerSelection   === 'Paper'  && computerSelection === 'Scissor'){
        return "You Lose! Scissor beats Paper!"}
       
    if (playerSelection === computerSelection) {
        return "Tie! Try Again!"}
    }
    
const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

