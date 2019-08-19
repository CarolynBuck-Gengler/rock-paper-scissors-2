    // https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors
    // https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation?ref=lnav
    function computerPlay() {
    	// let myRandNum = Math.random();
    	// if (myRandNum < .33) return ("rock");
    	// 	else if (myRandNum < .66) return ("paper");
		// 	else return ("scissors"); 
		return allowableAnswers[Math.floor(Math.random()*3)];
    }
    
    function playRound(player, computer) {

        console.log ("playRound: computer = "+ computer + ", player = "+ player);
        playerChoiceLoc.textContent = "You chose "+ player;
        computerChoiceLoc.textContent = "Computer chose "+computer;

		let roundResult;
    	if (player === computer) {
            roundResult = "tie";
            whoWonLoc.textContent ="draw";
    	} else { 
    		switch(player) {
    			case "rock":
					roundResult = (computer==="scissors"?"win":"lose");
    				break;
    			case "paper":
					roundResult = (computer==="rock"?"win":"lose");
    				break;
    			case "scissors":
					roundResult = (computer==="paper"?"win":"lose");
    				break;
			}
    		reportResult(roundResult);
    	}
    }

	function reportResult(roundResult) {
		console.log(roundResult);
		switch (roundResult) {
			case "win": 
                numPlayerWins++;
                whoWonLoc.textContent = "you won this round";
				break;
			case "lose":
				numComputerWins++;
                whoWonLoc.textContent = "you lost this round";
				break;
			default:
				break;
		}
        console.log("you have "+numPlayerWins+" wins, the computer has "+numComputerWins+" wins");
        playerScoreLoc.textContent = "You: "+numPlayerWins;
        computerScoreLoc.textContent = "Computer: "+numComputerWins;
				
		// check to see if either player has reached 5 wins
    	if (numPlayerWins === 5) { 
            console.log("you win the match!");
            matchWinner.textContent = "You won the match!";
			haveWinner = true;
    	} else if (numComputerWins === 5) {
            console.log("You lost the match :-(");
            matchWinner.textContent = "You lost the match.";
			haveWinner = true;
    	} 
		if (haveWinner) {
			buttons.forEach((button) => {
				button.disabled = true; // end the game here.
			});
		}
	}

    const allowableAnswers = ["rock","paper","scissors"];
    let numPlayerWins = 0;
	let numComputerWins = 0;
	const buttons = document.querySelectorAll('button');
    let haveWinner = false;
    playerScoreLoc = document.querySelector(".playerScore");
    computerScoreLoc = document.querySelector(".computerScore");
    playerChoiceLoc = document.querySelector(".playerChoice");
    computerChoiceLoc = document.querySelector(".computerChoice");
    whoWonLoc = document.querySelector(".whoWon");
    matchWinner = document.querySelector(".winnerOfMatch");

	function main() {
		// set up event listeners for each button
		buttons.forEach((button) => {
			button.addEventListener('click', (e) => {
				console.log("button.id="+button.id);
				playRound(button.id, computerPlay());
			});
		});
	}

	main();