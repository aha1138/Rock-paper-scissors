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

    console.log("Player choice: " + playerSelection);
    console.log("Computer choice: " + computerSelection);
    console.log("Player: " + playerScore + " - " +"Computer: " + computerScore);

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
       let playerChoice = prompt("Rock, paper, scissors?");
       while (playerChoice == null){
        prompt("Rock, paper, scissors?");
       }
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
    for (let round = 1; round < 6; round++){
        console.log("ROUND: " + (round));
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const rounds = playRound (playerSelection, computerSelection);
        console.log(rounds);
        console.log("--------------------");
        
     };
     while (round = 5){
        return (winner())
     }


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