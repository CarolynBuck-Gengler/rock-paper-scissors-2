    // https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors
    // https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation?ref=lnav
    function computerPlay() {
    	let myRandNum = Math.random();
    	if (myRandNum < .33) return ("rock");
    		else if (myRandNum < .66) return ("paper");
			else return ("scissors"); 
			// return allowableAnswers[Math.floor(Math.random()*3)];
    }
    
    function playRound(player, computer) {

    	console.log ("playRound: computer = "+ computer + ", player = "+ player);
		let roundResult;
    	if (player === computer) {
    		roundResult = "tie";
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
				break;
			case "lose":
				numComputerWins++;
				break;
			default:
				break;
		}
		console.log("you have "+numPlayerWins+" wins, the computer has "+numComputerWins+" wins");
				
		// check to see if either player has reached 5 wins
    	if (numPlayerWins === 5) { 
			console.log("you win the match!");
			haveWinner = true;
    	} else if (numComputerWins === 5) {
    		console.log("You lost the match :-(");
			haveWinner = true;
    	} 
		if (haveWinner) {
			buttons.forEach((button) => {
				button.disabled = true;
			});
		}
	}
    function game(playerSelection) {

    }

    const allowableAnswers = ["rock","paper","scissors"];
    let numPlayerWins = 0;
	let numComputerWins = 0;
	const buttons = document.querySelectorAll('button');
	let haveWinner = false;

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