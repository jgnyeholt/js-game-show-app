const keyboard = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const overlay = document.getElementById("overlay");
const resetButton = document.querySelector("#overlay .btn__reset");

let missed = 0;

//remove overlay when start game is clicked
resetButton.addEventListener("click", () => {
  overlay.style.display = "none";
});
