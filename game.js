let playerScore = 0;
let computerScore = 0;

//function that returns Rock, paper, scissors randomly
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum == "0") {
        return "rock";
    }
    else if (randomNum == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}  
 
//function that plays one round
function playRound (playerSelection,computerSelection){

    //Player selection is rock
    if (playerSelection.toLowerCase() === "rock" ){
       if (computerSelection === "rock"){
        return "Tie! Try Again!";
    } else if (computerSelection === "paper"){
        computerScore++;
        return "You Lose! Paper Beats Rock!";
    } else {
        playerScore++;
        return "You Win! Rock Beats Scissors!";}
    }
//Player selection is paper
    if (playerSelection.toLowerCase() === "paper" ){
        if (computerSelection === "rock"){
        playerScore++;
         return "You Win! Paper Beats Rock!";
     } else if (computerSelection === "paper"){
         return "Tie! Try Again!";
     } else {
         computerScore++;
        return "You Lose Scissors Beats Paper!";}
     }
//Player Selection is scissors  
     if (playerSelection.toLowerCase() === "scissors" ){
        if (computerSelection === "rock"){
        computerScore++;
        return "You Lose! Rock Beats Scissors!";
        } else if (computerSelection === "paper"){
         playerScore++;
         return "You Win! Scissors Beats Paper!";
        } else {
         return "Tie! Try Again!";}
        }
    }
function game(){ 

//function that lets the player choose rock, paper or scissors
     function playerPlay(){
       let playerChoice = prompt("Do you choose 'Rock' (0), 'Paper' (1), or 'Scissors' (2)?");
       console.log("'Rock' (0), 'Paper' (1), or 'Scissors' (2)?");
        if (playerChoice.toLocaleLowerCase() === "rock" || parseInt(playerChoice)=== 0){
            playerChoice="Rock";}
        else if (playerChoice.toLocaleLowerCase()=== "paper" || parseInt(playerChoice)=== 1){
            playerChoice= "Paper"}
        else if (playerChoice.toLocaleLowerCase() === "scissors" || parseInt(playerChoice) === 2) {
            playerChoice= "Scissors"}
        else {
            console.log("You made a mistake! Correct it RIGHT NOW!!!")
        }
        return playerChoice;}

//function that plays 5 games
       for ( let i = 0; i < 5; i++){
           const playerSelection = playerPlay();
           const computerSelection = computerPlay();
           const currentRound = playRound (playerSelection, computerSelection)
           console.log(currentRound)
       }
   } 
   //console.log(game(computerPlay))

