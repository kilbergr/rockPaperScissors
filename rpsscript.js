// //store choices in array
// //have computer choose by generating a random variable 0, 1, or 2
// //keep computer's choice in a variable

// //user clicks on selected div, save that as some element value

// //conditional if user choice = computer choice, say tie, if user beats computer say userwin, otherwise computerwins

// addWin function
// addLoss function

// if(comp !== user){
// 	if (user === rock){
// 		if (comp === paper){
// 			comp wins
// 			addLoss
// 		}
// 		user wins
// 		addWin
// 	}
// 	if (user === paper){
// 		if (comp === scissors){
// 			comp wins
// 			addLoss
// 		}
// 		user wins
// 		addWin
// 	}
// 	if (user === scissors){
// 		if (comp === rock){
// 			comp wins
// 			addLoss
// 		}
// 		user wins
// 		addWin
// 	}
// }

// //change scoreboard to reflect win

// scoreboard show addWin.value and addLoss.value

var compArr = ["rock", "paper", "scissors"];
var compPick = function(){
	var compChoice = Math.floor(Math.random()*3);
	compChoice = compArr[compChoice];
	return compChoice;
}

var addWin=0;
var addLoss=0;
var winScore = document.getElementById("wins");			
var lossScore = document.getElementById("losses");

var myDivs = document.getElementsByClassName("choice");
	for (var i = 0; i < myDivs.length; i++){
		myDivs[i].addEventListener("click", function(){
			var userChoice = this.id;
			// console.log("user: " + userChoice);
			var compPicked = compPick();
			// console.log("comp: " + compPicked);

			if(userChoice===compPicked){
				alert("It's a tie");
			}
			else if(userChoice !== compPicked){
				if (userChoice === "rock"){
					if(compPicked==="scissors"){
						addWin+=1;
						winScore.innerHTML=addWin;
						lossScore.innerHTML=addLoss;

					}
					else {
						addLoss+=1;
						winScore.innerHTML=addWin;
						lossScore.innerHTML=addLoss;
					}
				}

				else if (userChoice==="scissors"){
						if(compPicked==="paper"){
						addWin+=1;
						winScore.innerHTML=addWin;
						lossScore.innerHTML=addLoss;

					}
					else {
						addLoss+=1;
						winScore.innerHTML=addWin;
						lossScore.innerHTML=addLoss;
					}
				}

				else if (userChoice==="paper"){
						if(compPicked==="rock"){
						addWin+=1;
						winScore.innerHTML=addWin;
						lossScore.innerHTML=addLoss;

					}
					else {
						addLoss+=1;
						winScore.innerHTML=addWin;
						lossScore.innerHTML=addLoss;
					}
				}
			} 

			
		});
	}




