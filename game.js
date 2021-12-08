//testing to see if javascript file is linked to html
//alert("THis is working");

// testing to see if jquery is working on our page.
// $(document).on("click", function () {
//   alert("jquery is working");
// });

//
let userClickedPattern = [];
//
let gamePattern = [];
// and array that holds different colors
const buttonColours = ["red", "blue", "green", "yellow"];
//keeping track of the levels
let level = 0;
//keeping track of the first keyboard press.
let firstPress = 0;

//detecting when the keyboard has been pressed
$(document).on("keydown", function (event) {
  console.log(event);
  //update h1 text to show level when game start and set it to 0;
  $("h1").text(`Level ${level}`);
  //call nextSequence();
  if (firstPress === 0) {
    nextSequence();
    firstPress++;
  }
});

function nextSequence() {
  //generate a random number between 0 and 3
  //store random number in a variable
  let randomNumber = Math.floor(Math.random() * 4);
  //variable that holds a random color
  let randomChosenColor = buttonColours[randomNumber];
  //pushing the random color to the game pattern
  gamePattern.push(randomChosenColor);

  //selecting the button with the same id as our randomly generated color
  console.log($(`div#${randomChosenColor}`));
  //making this element flash
  $(`div#${randomChosenColor}`)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //playing audio depending on the chose color
  playSound(randomChosenColor);

  //update the level on the h1
  $("h1").text(`Level ${level}`);

  //increasing level by one
  level++;
}

//detect which button is being clicked and plays sound depending on the color
$("div.btn").on("click", function (event) {
  //console.log(event.target.id);
  //variable that stores the id of the clicked element
  let userChosenColor = event.target.id;
  console.log(userChosenColor);
  //add the id to end of the pattern array
  userClickedPattern.push(userChosenColor);
  //sound to be played when user clicks the color
  playSound(userChosenColor);
  //adds animation to the color
  animatePress(userChosenColor);
  //index of the last answer
  let lastAnswer = userClickedPattern.length - 1;
  //call check answer
  checkAnswer(lastAnswer);
});

// when called playSound() plays the sound corresponding to the name parameter
function playSound(name) {
  //playing audio depending on the chose color
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

//animates the pressed color
function animatePress(currentColor) {
  //add the css pressed to the color
  $(`div.${currentColor}`).addClass("pressed");
  //remove a class after 100 milliseconds
  setTimeout(function () {
    $(`div.${currentColor}`).removeClass("pressed");
  }, 100);
}

//checks answer
function checkAnswer(currentLevel) {
  console.log(currentLevel);
  //check if the most recent user answer is the same as the game pattern
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    //check if the user has finished their sequence
    if (userClickedPattern.length === gamePattern.length) {
      //call nextSequence() after 1000milliseconds
      setTimeout(function () {
        nextSequence();
        //once nextSequence() is triggered set user pattern to an empty array.
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    gameOver();
    startOver();
  }
}

//game over
function gameOver() {
  $("h1").text("Game Over, Press Any Key to Restart");
  console.log("wrong");
  //play wrong audio if user gets pattern wrong.
  let wrongAudio = new Audio("sounds/wrong.mp3");
  wrongAudio.play();
  //add class game-over to body
  $("body").addClass("game-over");
  //remove class
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
}

//restarting the game
function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  firstPress = 0;
}
