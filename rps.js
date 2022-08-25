function playRound(playerSelection, computerSelection) {
    console.log(`Player Selection: ${playerSelection}, Computer Selection: ${computerSelection}`)

    if (playerSelection == computerSelection)
    {
        alert("Its a tie!")
    }
    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        alert("Player won!")
    }
    else
    {
        alert("Unknown")
    }
}
   
function getComputerChoice() {
    choiceNum = Math.floor(Math.random() * 3)

    switch(choiceNum)
    {
        case 0:
            result = 'rock'
            break;
        case 1:
            result = 'paper'
            break;
        case 2:
            result = 'scissors'
            break;
        default:
            console.log("-- Choice not in range");
            break;
    }
    // console.log(`Computer chose ${result}`)
    
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input Decision:\n\nRock\nPaper\nScissors\n\nInputting nothing stops the game.");

        if (playerSelection == null) return console.log("Game Exited");

        console.log(`Round ${i} of 5`);     

        playRound(playerSelection.toLowerCase(), getComputerChoice());

        
    }
    
}

game();