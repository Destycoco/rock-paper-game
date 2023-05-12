
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
computerChoice();

function userChoice(){
	let choice = prompt("Enter an option", "");
	let result = choice.toLowerCase();
	if (result === "rock" || result === "paper" || result === "scissors"){
		return result;
	}
	else{
		alert("you entered a wrong option!, restart game to try again");
	}
	
}

const userSelection = userChoice();
const computerSelection = computerChoice();
console.log(`Computer: ${computerSelection}`);
console.log(`You: ${userSelection}`);

function checkGame(){
	if (userSelection === computerSelection){
		return "The game is a tie";
	}
	
	else if (userSelection === "rock" && computerSelection === "paper"){
		console.log("You lost! paper beat rock");
	}
	else if (userSelection === "paper" && computerSelection === "scissors"){
		console.log("You lost! scissors beat paper");
	}
	else if (userSelection === "scissors" && computerSelection === "rock"){
		console.log("You lost! rock beat scissors");
	}
	else if (userSelection === "paper" && computerSelection === "rock"){
		console.log("You won! paper beat rock");
	}
	else if (userSelection === "scissors" && computerSelection === "paper"){
		console.log("You won! scissors beat paper");
	}
	else if (userSelection === "rock" && computerSelection === "scissors"){
		console.log("You won! rock beat scissors");
	}
	else{
		console.log("You entered an invalid option");
	}

}
console.log(checkGame());


