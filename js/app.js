const keyboard = document.getElementById("qwerty");
const phrase = document.querySelector("#phrase ul");
const overlay = document.getElementById("overlay");
const resetButton = document.querySelector("#overlay .btn__reset");
const tries = document.getElementsByClassName("tries");
const buttons = document.querySelectorAll("button");
let letterBlocks = document.getElementsByClassName("letter");
let showBlocks = document.getElementsByClassName("show");
let missed = 0;

const phrases = [
  "A Chip on Your Shoulder",
  "A Dime a Dozen",
  "A Fool and His Money Are Soon Parted",
  "A Piece of Cake",
  "An Arm and a Leg",
  "Back to Square One",
  "Barking Up the Wrong Tree",
  "Beating Around the Bush",
  "Between a Rock and a Hard Place",
  "Burst Your Bubble",
  "Close But No Cigar",
  "Cup of Joe",
  "Curiosity Killed the Cat",
  "Cut to the Chase"
];

//set initial styles
overlay.style.display = "flex";

//remove overlay when start game is clicked
resetButton.addEventListener("click", () => {
  resetGame();
  overlay.style.display = "";
  overlay.classList.remove("display-flex");
  overlay.classList.add("display-none");
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
});

//select random phrase and split phrase into new array of characters
function getRandomPhraseAsArray(arr){
  let randomNum = Math.floor((Math.random() * (phrases.length - 1)) + 1);
  let splitArray = phrases[randomNum].split('');
  return splitArray;
}

//display phrase as array of characters on document
function addPhraseToDisplay(arr){
  let lineLength = (arr.length / 2);
  let lineBreak = true;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] != " "){
        let element = document.createElement('li');
        element.textContent = arr[i];
        element.className = "letter";
        phrase.appendChild(element);
      }
      else if (arr[i] == " "){
        let element = document.createElement('li');
        element.className = "space";
        phrase.appendChild(element);
      }

      while(lineBreak && i > lineLength && arr[i] == " "){
        let element = document.createElement('br');
        phrase.appendChild(element);
        lineBreak = false;
      }
  } //end for loop
} //end addPhraseToDisplay

//check letter
function checkLetter(clickTarget){

  let result = null;
  //click target textContent
  let clickedLetter = clickTarget.textContent.toLowerCase();

  for(let i = 0; i < letterBlocks.length; i++){
    var letterBlockContent = letterBlocks[i].textContent.toLowerCase();

    if(clickedLetter === letterBlockContent){
      letterBlocks[i].className += " show";
      result = true;
    }
  } //end for loop

  return result;
} //end check letter

//event listener for keyboard
keyboard.addEventListener('click', (e) => {
  let target = e.target;
  if(target.tagName==="BUTTON"){
    target.className = "chosen";
    target.disabled = "true";
    let letterFound = checkLetter(target);
    if(letterFound === null){
      tries[missed].style.opacity = 0;
      tries[missed].style.transition = ".5s";
      missed += 1;
    }
    checkWin();
  } // if
});//end listener

//Check for win/lose
function checkWin(){
  if(letterBlocks.length === showBlocks.length){
    setEndingStyles("win");
  }
  else if (missed >= 5 && letterBlocks.length !== showBlocks.length) {
    setEndingStyles("lose");
  }
}

//Game reset functions
function resetGame(result){
  setEndingStyles(result);
  removePhrase();
  resetKeyboard();
  addTries();
}

function setEndingStyles(result) {
  overlay.classList.remove("display-none");
  overlay.classList.add("display-flex");

  if(result === "win"){
    overlay.className += " win";
    overlay.children[0].textContent = "Congrats! You won!";
    overlay.children[1].textContent = "Play Again";
  }
  else if (result === "lose"){
    overlay.className += " lose";
    overlay.children[0].textContent = "Sorry, better luck next time...";
    overlay.children[1].textContent = "Play Again";
  }
}


function removePhrase(){
  while(phrase.firstElementChild){
    phrase.removeChild(phrase.firstElementChild);
  }
}

function resetKeyboard(){
  for(let i = 0; i < buttons.length; i++){
    if(buttons[i].classList.contains("chosen")){
      buttons[i].classList.remove("chosen");
      buttons[i].disabled = false;
    }
  }
}

function addTries(){
  missed = 0;
  for(let i = 0; i < tries.length; i++){
      tries[i].style.opacity = 1;
      tries[i].style.transition = "1s";
  }
}
