
function computerChoice(){
	let randomNumber = Math.ceil(Math.random() * 3);
	if (randomNumber === 1){
		return "rock";
	}
	else if(randomNumber === 2){
		return "paper";
	}
	else{
		return "scissors";
	}
}

function userChoice(){
	let choice = prompt("Enter an option (rock, paper or scissors)", "");
	let result = choice.toLowerCase();
	if (result === "rock" || result === "paper" || result === "scissors"){
		return result;
	}
	else{
		alert("you entered a wrong option!, restart game to try again");
	}
	
}

function playRound(userSelection, computerSelection){
	if (userSelection === computerSelection){
		return "The game is a tie";
	}
	
	else if (userSelection === "rock" && computerSelection === "paper"){
		return "You lost! paper beat rock";
	}
	else if (userSelection === "paper" && computerSelection === "scissors"){
		return "You lost! scissors beat paper";
	}
	else if (userSelection === "scissors" && computerSelection === "rock"){
		return "You lost! rock beat scissors";
	}
	else if (userSelection === "paper" && computerSelection === "rock"){
		return "You won! paper beat rock";
	}
	else if (userSelection === "scissors" && computerSelection === "paper"){
		return "You won! scissors beat paper";
	}
	else if (userSelection === "rock" && computerSelection === "scissors"){
		return "You won! rock beat scissors";
	}
	else{
		return "You entered an invalid option";
	}

}
function showRound(){
	let computerScore = 0;
	let userScore = 0;	
	for (let count = 0; count < 5; count++){
		
		let userSelection = userChoice();
	    let computerSelection = computerChoice();
	
		let resultGame = playRound(userSelection, computerSelection);
			console.log(`You: ${userSelection}`);
			console.log(`Computer: ${computerSelection}`); 
			console.log(`round ${count + 1}: ${resultGame}`);
		if (resultGame.includes("won")){
				userScore++;
		}
		else if (resultGame.includes("lost")){
				computerScore++;
		}
		
	}
		console.log (`Your score: ${userScore}`)
		console.log (`Computer score: ${computerScore}`)
	if(computerScore > userScore){
		console.log("You lost! please try again")
	} else if(computerScore < userScore){
		console.log("You won! you are a legend.")
	} else {
		console.log("Oops It's a tie")
	}
	
}

showRound();

