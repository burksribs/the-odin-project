function computerPlay() {
    let select = ["rock", "paper", "scissors"];
    return select[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let log = ""
    if (playerSelection == computerSelection)
        return "Draw";

    if (playerSelection == "rock"){
        if (computerSelection == "paper")
            log = "You lose! Paper beats Rock";
        else
            log = "You win! Rock beats Scissors";
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors")
            log = "You lose! Scissors beats Paper";
        else
            log = "You win! Paper beats Rock";
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock")
            log = "You lose! Rock beats Scissors";
        else
            log = "You win! Scissors beats Paper";
    }

    return log;
}

function game(){
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your choice");
        round = playRound(playerSelection.toLowerCase(), computerPlay());
        console.log(round);
        if (round.match("draw") != null)
            ;
        else if (round.match("lose") != null)
            computerScore++;
        else if (round.match("win") != null)
            playerScore++;
    }
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore > computerScore)
        console.log("You win the game!");
    else if (playerScore < computerScore)
        console.log("You lose the game!");
    else
        console.log("The game end with draw");
}