//create a function to request input from the user
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
//create a function to generate an option from the computer 
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

//create a constructor function to check and match the computer's choice with 
//the user's choice on only one round
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
//create a function to loop the playround function 5 times and also create a 
//variable to store the user and computer scores respectively and also device a logic
// to increment the scores after each round.
function showRound(){
	let computerScore = 0;
	let userScore = 0;	
	for (let count = 0; count < 5; count++){
		let userSelection = userChoice();
	    let computerSelection = computerChoice();
		
	//create a variable to store the results of the playRound function for each round. 
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
	//display final scores to the console
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
//call the showround function which is the final function
showRound();

