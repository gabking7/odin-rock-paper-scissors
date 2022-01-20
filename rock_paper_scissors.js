function computerPlay() {
    const rpsArray = [
        "rock",
        "paper",
        "scissors"
    ];

    const randomRPS = (Math.floor(Math.random() * rpsArray.length)); {
        console.log(`CPU played: ${rpsArray[randomRPS]}`);
        return rpsArray[randomRPS];
    }
}



function roundOne(playerSelection, computerSelection) {
    let userChoice = prompt("Choose rock, paper or scissors!").toLowerCase();
    console.log(`User played: ${userChoice}`);

    if (userChoice === computerSelection) {
        return "It's a tie.";
    } else if (userChoice == "rock" && computerSelection == "scissors") {
        return "You win!";
    } else if (userChoice == "paper" && computerSelection == "rock") {
        return "You win!";
    } else if (userChoice == "scissors" && computerSelection == "paper") {
        return "You win!";
    } else {
        return "You lose. :(";
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(roundOne(playerSelection, computerSelection));
