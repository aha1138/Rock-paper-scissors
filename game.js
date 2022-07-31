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
const playRound = (playerPlay) => {
    
    let computerSelection = computerPlay();

    document.querySelector('.score1').innerHTML = playerScore;
    document.querySelector('.score2').innerHTML = computerScore;
    
    console.log("Player selection: " + playerPlay);
    console.log("Computer selection: " + computerSelection);
    console.log("Player: " + playerScore + " - " +"Computer: " + computerScore);

    //TIE
    if (playerPlay === computerSelection){
        return ("Tie");
    }
    //Player selection is rock
    else if (playerPlay === "rock" && computerSelection ==='paper'){
        computerScore++;
        return ("Paper beats Rock!")
    } else if (playerPlay === "rock" && computerSelection ==='scissors'){
        playerScore++
        return ("Rock beats scissors!")
    }
    //Player selection is paper
     else if (playerPlay === "paper" && computerSelection ==='rock'){
        playerScore++
        return ('Paper beats Rock!')
    } else if (playerPlay === "paper" && computerSelection ==='scissors'){
        computerScore++
        return ('Scissors beats paper!')
    }
    
    //Player selection is scissors
    else if (plalerSelection === 'scissors' && computerSelection ==='paper'){
        playerScore++
        return ("Scissors beats paper!")
    } else if (plalerSelection === 'scissors' && computerSelection ==='paper'){
        compueterScore++
        return ("Rock beats scissors!")
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