let playerScore = 0;
let computerScore = 0;
const selections = document.querySelectorAll('[data-selection]');

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

//function that lets the player choose rock, paper or scissors
selections.forEach(selection => {
    selection.addEventListener('click', e => {
        const playerPlay = selection.dataset.selection; 
        playRound(playerPlay);
    })
})
 
//function that plays one round
function playRound(playerPlay){
    
    let computerSelection = computerPlay();

    console.log("Player selection: " + playerPlay);
    console.log("Computer selection: " + computerSelection);
    console.log("Player: " + playerScore + " - " +"Computer: " + computerScore);

    //Player selection is rock
    if (playerPlay === "rock" ){
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
    if (playerPlay === "paper" ){
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
     if (playerPlay === "scissors" ){
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

// //function that plays 5 games
// for (let round = 1; round < 6; round++){
//     console.log("ROUND: " + (round));
//     const playerPlay = playerPlay();
//     const computerSelection = computerPlay();
//     const rounds = playRound (playerPlay, computerSelection);
//     console.log(rounds);
//     console.log("--------------------");
    
//  };
//  while (round = 5){
//      return (winner())
//  }



function winner(){
    if (playerScore > computerScore){
        return ("Player Won " + playerScore + " - "  + computerScore);
    }
    else if (playerScore < computerScore){
        return ("Computer Won " + playerScore + " - "  + computerScore);
    }
    else {
        return ("Tie "+ playerScore + " - "  + computerScore)
    }
    
}
}

   //console.log(game(computerPlay))