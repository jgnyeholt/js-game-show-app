const keyboard = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const overlay = document.getElementById("overlay");
const resetButton = document.querySelector("#overlay .btn__reset");
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
  "Cry Over Spilled Milk",
  "Cup of Joe",
  "Curiosity Killed the Cat",
  "Cut to the Chase"  
];
let missed = 0;

//remove overlay when start game is clicked
resetButton.addEventListener("click", () => {
  overlay.style.display = "none";
});
