const buttons = document.querySelectorAll(".btn-choice");
const computerChoice = document.querySelector(".computer-desc"); 
const playerChoice = document.querySelector(".player-desc"); 
const computerImage = document.querySelector(".computer-img"); 
const playerImage = document.querySelector(".player-img"); 


buttons.forEach(btn => btn.addEventListener('click', function(e){
    let computerWeaponChoice = computerPlay();
    let playerWeaponChoice = btn.getAttribute('data-choice');
    playerChoice.textContent = playerWeaponChoice;
    computerChoice.textContent = computerWeaponChoice; 


    computerImage.setAttribute('src', `./images/${computerWeaponChoice}.png`);
    playerImage.setAttribute('src', `./images/${playerWeaponChoice}.png`);
    
}))




let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    let array = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * array.length);
    let result = array[randomNumber]
    return result;
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection) {
        return "It's a tie. Play another round"


    } else if((playerSelection == "rock" && computerSelection == "paper" ) || (playerSelection == "scissors" && computerSelection == "rock" ) || (playerSelection == "paper" && computerSelection == "scissors" )) {
        computerScore = ++computerScore;
        return `You lose. ${computerSelection} beats rock`;

    } else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "scissors" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "scissors")) {
        playerScore = ++playerScore;
        return `You win. ${playerSelection} beats ${computerSelection}`;
    } 


    console.log(result);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function game() {
        const playerSelection = prompt("Enter your choice?").toLowerCase();

        const computerSelection = computerPlay().toLowerCase();

        let result = playRound(playerSelection, computerSelection);


        
}

// for(let i = 0; i < 50; i++) {
//     game()

//     if(playerScore == 5 || computerScore == 5) {
//         if(playerScore > computerScore) {
//             console.log("You won!")
//         } else {
//             console.log("You lost. Oops!")
//         }
//         break;
//     }
// }