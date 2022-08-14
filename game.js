let playerScore = 0;
let computerScore = 0;
const selections = document.querySelectorAll('[data-selection]');
const result = document.querySelector('.result')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

//function that returns Rock, paper, scissors randomly
const computerPlay = () => {
    const choices= ['rock','paper','scissors',]
    randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum]
}  

function restart() {
    playerScore = 0;
    computerScore = 0;
}
 
//function that plays one round
const playRound = (playerPlay) => {
    
    const p = document.querySelector('p')
    let computerSelection = computerPlay();

    //TIE
    if (playerPlay === computerSelection){
        p.innerText =  ("Tie");
    }
    //Player selection is rock
    else if (playerPlay === "rock" && computerSelection ==='paper'){
        computerScore++;
        p.innerText = ("Paper beats Rock!")
    } else if (playerPlay === "rock" && computerSelection ==='scissors'){
        playerScore++
        p.innerText =  ("Rock beats scissors!")
    }
    //Player selection is paper
     else if (playerPlay === "paper" && computerSelection ==='rock'){
        playerScore++
        p.innerText =  ('Paper beats Rock!')
    } else if (playerPlay === "paper" && computerSelection ==='scissors'){
        computerScore++
        p.innerText =  ('Scissors beats paper!')

    }
    
    //Player selection is scissors
    else if (playerPlay === 'scissors' && computerSelection ==='paper'){
        playerScore++
        p.innerText =  ("Scissors beats paper!")
    } else if (playerPlay === 'scissors' && computerSelection ==='paper'){
        computerScore++
        p.innerText = ("Rock beats scissors!")
    }
result.appendChild(p)
}

const updateScore = (playerScore, computerScore) => {
   computerScoreSpan.innerText = `Player score: ${playerScore}`
   playerScoreSpan.innerText = `Computer score: ${computerScore}`

}

//function that lets the player choose rock, paper or scissors
selections.forEach(selection => {
    selection.addEventListener('click', e => {
        const playerPlay = selection.dataset.selection; 
        playRound(playerPlay);
        updateScore(playerScore, computerScore)
        winnerIs()
    })
})


const winnerIs = () => {
    const h3 = document.querySelector('h3')
    if (playerScore === 5){
        h3.innerText = `Player Won ${playerScore} - ${computerScore}!`
        result.append(h3)
        restart();
    }
    if (computerScore === 5){
        h3.innerText = `Computer Won ${playerScore} - ${computerScore}!`
        result.append(h3)
        restart();
    }
}
