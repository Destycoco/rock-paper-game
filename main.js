//get all the selections available i.e rock, paper and scissors
const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScore = document.querySelector('[data-computer-score]');
const userScore = document.querySelector('[data-your-score]');
//Next we have to create an array that will hold the posible outcomes for the game when it is played.
const SELECTION = [{
	name: "rock",
	beats: "scissors"
},
{
	name: "paper",
	beats: "rock"
},
{
	name: "scissors",
	beats: "paper"
}
]

//Now we have to loop through all the possible selections and add an event listener so 
//that when a selection is clicked, the selection is displayed to the console.
selectionButtons.forEach(selectionButton => {
	selectionButton.addEventListener('click', (e)=> {
	 const selectionName = selectionButton.dataset.selection;
	 
	 const selection = SELECTION.find(selection => selection.name === selectionName);
	 showSelection(selection);
	} )
}) 


// create a function to display selections to the console.
function showSelection(selection){
	const computerSelection = randomSelection();
	const userWinner = isWinner(selection, computerSelection);
	const computerWinner = isWinner(computerSelection, selection);
	//console.log(selection);
	//console.log(computerSelection);
	if (userWinner) {
		incrementScore(computerScore);
	} else {
	 incrementScore(userScore);
	}
}
//function to display results to the screen
function displayResult(selection, ){
    const displayText = document.querySelector("gameResult")
}
//function to increment the scores
function incrementScore(score){
	score.innerText = parseInt(score.innerText) + 1;
}
//function to get the winner
function isWinner(selection, opponentSelection){
	return selection.beats === opponentSelection.beats;
}

//function to obtain a random number so as to use it to get the computer's selections
function randomSelection(){
	const randomIndex = Math.floor(Math.random() * SELECTION.length);
	return SELECTION[randomIndex];
	
}


