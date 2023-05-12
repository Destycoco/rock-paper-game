
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

