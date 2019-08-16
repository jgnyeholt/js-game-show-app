const keyboard = document.getElementById("qwerty");
const phrase = document.querySelector("#phrase ul");
const overlay = document.getElementById("overlay");
const resetButton = document.querySelector("#overlay .btn__reset");
let letterBlocks = document.getElementsByClassName("letter");
let showBlocks = document.getElementsByClassName("show");

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

let missed = 0;

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//remove overlay when start game is clicked
resetButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

//select random phrase and split phrase into new array of characters
function getRandomPhraseAsArray(arr){
  //generate random number
  let randomNum = Math.floor((Math.random() * phrases.length) + 1);
  console.log(randomNum);
  console.log(phrases[randomNum]);
  //split phrase[#] into new array
  let splitArray = phrases[randomNum].split('');
  return splitArray;
}

//display phrase as array of characters on document
function addPhraseToDisplay(arr){
  //cycle through arr of phrase letters
  for(let i = 0; i < arr.length; i++){
      //create list item, add text content of individual letter
      let element = document.createElement('li');
      element.textContent = arr[i];
      //add class if not a space
      if(arr[i] != " "){
        element.className = "letter"
      }
      //append new element to phrase ul
      phrase.appendChild(element);
  } //end for loop
} //end addPhraseToDisplay

//check letter
function checkLetter(clickTarget){

  let result = null;
  //click target textContent
  let letterFound = clickTarget.textContent.toLowerCase();
  //cycle through phrase letters to check for match with clicked button
  for(let i = 0; i < letterBlocks.length; i++){
    let letterBlockContent = letterBlocks[i].textContent.toLowerCase();
    //if match, add show class to display
    if(letterFound === letterBlockContent){
      letterBlocks[i].classList.add = "show";
      result = true;
    }
    else {
      return result;
    }
  } //end for loop
} //end check letter

//event listener for keyboard
qwerty.addEventListener('click', (e) => {
  //store target, button clicked
  let target = e.target;
  console.log(target);
  if(target.tagName==="BUTTON"){
    //add chosen class
    target.className = "chosen";
    //disable button
    target.disabled = "true";
    //check letter
    let letterFound = checkLetter(target);
    if(letterFound === null){
      missed += 1;
    }

  } // if
});//end listener
