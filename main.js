
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
function fiveTimes(){
	for(i = 0; i < 5; i++){
		console.log(checkGame());
	}
}

console.log(fiveTimes());