
const theCards = document.querySelector(".theCards");
const totalLivesCount = document.querySelector("#totalLives");

let totalLives = 9;
let totalScore;
let matchesMade = 0;
let score; 
let clickedCard = null;
let stopClick = false;


totalLivesCount.textContent = totalLives;

function cardClicked(e) {
  const target = e.currentTarget;
  // console.log(target.getAttribute("data-color"));
  if ( stopClick || target === clickedCard || target.className.includes("done")) {
    return;
  }

  target.className = target.className.replace("color-hidden", "").trim();
  target.className += " done";

  if (!clickedCard) {
    clickedCard = target;
  } else if (clickedCard) {
    if (clickedCard.getAttribute("data-color") !== target.getAttribute("data-color")
    ) {
      stopClick = true;
      setTimeout(() => {
        clickedCard.className = clickedCard.className.replace("done", "").trim() + "color-hidden";
        target.className = target.className.replace("done", "").trim() + "color-hidden";
        clickedCard = null;
        stopClick = false;
      }, 500); 
      totalLives-=1;
      gameOver();
    } else {
      // matchesMade++;
      clickedCard = null;
      // if (matchesMade === 8){
      //   alert("You Win!");
      }
    }
  }
// }


function newLevel(){

}

function newGame(){
  level=0; 
  lives= 9; 
  score = 0; 
  newLevel(); 
}


function matchedTotal() {
  matchesMade++;
  if (matchesMade === 8){
    alert("You Win!");
  }
}

function gameOver(){
  totalLives--;
  if (totalLives = 0 ){ 
    Lose = true 
  }
}


// function flipCard(){
//   theCards.classList.toggle("flipCard"); 
// }