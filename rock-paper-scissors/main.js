const computerChoice = document.querySelector('.computer-desc');
const playerChoice = document.querySelector('.player-desc');
const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const resultCaption = document.querySelector('.result-caption');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const buttons = document.querySelectorAll('.btn-choice');

let pScore = 0; //Player Score
let cScore = 0; //Computer Score
let pChoice; //Player choice

function resetUI() {
    pScore = 0;
    cScore = 0;
    computerChoice.textContent = "";
    playerChoice.textContent = "";
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    resultCaption.textContent = "start game";
}

function computerPlay() {
    let array = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * array.length);
    let result = array[randomNumber].toLowerCase();
    return result;
}

function checkScore(player, computer) {
    if(player == 5 || computer == 5) {
        if(player > computer) {
            resultCaption.textContent = 'Game over. You win';
        } else {
            resultCaption.textContent = 'Game over. You lose';
        }
        resetUI();
    }
}

function playRound(computerSelection, playerSelection) {
    computerChoice.textContent = computerSelection;
    playerChoice.textContent = playerSelection;

    if(playerSelection == computerSelection) {
        resultCaption.textContent = 'It\'s a tie'
    } else if((playerSelection == "rock" && computerSelection == "paper" ) || (playerSelection == "scissors" && computerSelection == "rock" ) || (playerSelection == "paper" && computerSelection == "scissors" )) {
        ++cScore;
        computerScore.textContent = cScore;
        resultCaption.textContent = 'You lose';
    } else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "scissors" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "scissors")) {
        ++pScore;
        playerScore.textContent = pScore;
        resultCaption.textContent = 'You win';
    }

    checkScore(pScore, cScore);
}

window.addEventListener('load', resetUI);

buttons.forEach(btn => btn.addEventListener('click', () => playRound(computerPlay(), btn.getAttribute('data-choice'))))

