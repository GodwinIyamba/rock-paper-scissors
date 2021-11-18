const computerChoice = document.querySelector('.computer-desc');
const playerChoice = document.querySelector('.player-desc');
const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const resultCaption = document.querySelector('.result-caption');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const buttons = document.querySelectorAll('.btn-choice');

// const rockChoice = rockBtn.getAttribute('data-choice');
// const paperChoice = rockBtn.getAttribute('data-choice');
// const scissorsChoice = rockBtn.getAttribute('data-choice');

let pScore = 0; //Player Score
let cScore = 0; //Computer Score

function resetUI() {
    computerChoice.textContent = "";
    playerChoice.textContent = "";
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    resultCaption.textContent = "";
}

function computerPlay() {
    let array = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * array.length);
    let result = array[randomNumber].toLowerCase();
    return result;
}

function playerPlay() {
    let choice = scissorsBtn.getAttribute('data-choice').toLowerCase();
    return choice;
}

function playRound(computerSelection, playerSelection) {
    computerChoice.textContent = computerSelection;
    playerChoice.textContent = playerSelection;

    if(playerSelection == computerSelection) {
        resultCaption.textContent = 'It\'s a tie'
    } else if((playerSelection == "rock" && computerSelection == "paper" ) || (playerSelection == "scissors" && computerSelection == "rock" ) || (playerSelection == "paper" && computerSelection == "scissors" )) {
        cScore = ++cScore;
        resultCaption.textContent = 'You lose';
    } else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "scissors" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "scissors")) {
        pScore = ++pScore;
        resultCaption.textContent = 'You win';
    } 
}

window.addEventListener('load', resetUI);

// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', playRound(computerPlay, playerPlay(buttons[i])));
// }

scissorsBtn.addEventListener('click', () => playRound(computerPlay(), playerPlay()));
































// function game() {
    
//     const playerSelection = prompt("Enter your choice?").toLowerCase();

//     const computerSelection = computerPlay().toLowerCase();

//     let result = playRound(playerSelection, computerSelection);

//     console.log(result);
//     console.log(`Player Score: ${playerScore}`);
//     console.log(`Computer Score: ${computerScore}`);
        
// }



    // let computerWeaponChoice = computerPlay();
    // let playerWeaponChoice = btn.getAttribute('data-choice');
    // playerChoice.textContent = playerWeaponChoice;
    // computerChoice.textContent = computerWeaponChoice; 


    // computerImage.setAttribute('src', `./images/${computerWeaponChoice}.png`);
    // playerImage.setAttribute('src', `./images/${playerWeaponChoice}.png`); 
