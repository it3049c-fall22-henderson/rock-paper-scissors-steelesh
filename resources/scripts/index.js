// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;
// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.textContent = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI(){

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName.value;
  game = new RockPaperScissors(userName);
  // Complete
  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });