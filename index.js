// script.js

// Add event listener to each button
document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function () {
    let key = this.id;
    playSound(key);
  });
});

// Add keydown event for keyboard support
document.addEventListener("keydown", function (event) {
  playSound(event.key.toLowerCase());
});

// Sound playing function
function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
      case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
      case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
      case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    // Add more keys and sounds as needed
    default:
      console.log("No sound for key:", key);
  }
}
