function playRound(playerSelection, computerSelection) {
    
}
   
function getComputerChoice() {
    choiceNum = Math.floor(Math.random() * 4)

    switch(choiceNum)
    {
        case 1:
            result = 'Rock'
            break;
        case 2:
            result = 'Paper'
            break;
        case 3:
            result = 'Scissors'
            break;
        default:
            console.error("RPT- Choice not in range");
            break;
    }
    console.log(`Computer chose ${result}`)
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Input Decision:\n\nRock\nPaper\nScissors\n\nInputting nothing stops the game.");

        if (playerSelection = null) return console.log("Game Exited");

        console.log(`Round ${i} of 5`);     

        playRound(playerSelection, getComputerChoice());
        
    }
    
}

game();