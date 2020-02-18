// var buttons = document.querySelectorAll(".drum");
// for (button of buttons) {
//     button.addEventListener("click", () => {
//         // new Audio('sounds/crash.mp3').play();
//         console.log(button);
//     });
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // function Audio (fileLocation) {
    //     this.fileLocation = fileLocation;
    //     this.play = () => {
    //         new Audio(this.fileLocation).play();
    //     };
    // }

    var buttonInnerHTML = this.innerHTML;
    switchSound(buttonInnerHTML);
    keyColor(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  var key = event.key;
  switchSound(key);
  keyColor(key);
});

function switchSound(letter) {
  switch (letter) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function keyColor(letter) {
  var selectedButton = document.querySelector(`.${letter}`);
      selectedButton.classList.add("pressed");
      setTimeout(() => {
          selectedButton.classList.remove("pressed");
      }, 100);
  }
