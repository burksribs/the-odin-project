const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.querySelector('.result p');
const playerScoreBoard = document.querySelector('.player-score p');
const computerScoreBoard = document.querySelector('.computer-score p');
let reset = document.querySelector('#reset');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

reset.addEventListener('click', () => location.reload());

function computerPlay() {
    let select = ["rock", "paper", "scissors"];
    return select[Math.floor(Math.random() * 3)];
}

function playRound() {
    computerSelection = computerPlay();
    playerSelection = this.value;
    console.log(playerSelection);
    console.log(computerSelection);
    
    let log = "";
    if (playerSelection == computerSelection)
    {
        result.textContent = 'It\'s a tie. You both chose '+playerSelection;
        return;
    }

    if (playerSelection == "rock"){
        if (computerSelection == "paper")
        {
            log = "You lose! Paper beats Rock";
            computerScore++;
        }
        else
        {
            log = "You win! Rock beats Scissors";
            playerScore++;
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors")
        {
            log = "You lose! Scissors beats Paper";
            computerScore++;
        }
        else
        {
            log = "You win! Paper beats Rock";
            playerScore++;
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock")
        {
            log = "You lose! Rock beats Scissors";
            computerScore++;
        }
        else
        {
            log = "You win! Scissors beats Paper";
            playerScore++;
        }
    }
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
    if (playerScore === 5 || computerScore === 5)
    {
        if (playerScore > computerScore)
            log = 'You win the game!';
        else
            log = 'You lose the game!';
        let buttons = document.querySelector('.buttons');
        buttons.style.display = 'none';
        reset.style.visibility = 'visible';
    }

    result.textContent = log;
}

