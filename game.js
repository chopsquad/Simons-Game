//testing to see if javascript file is linked to html
//alert("THis is working");

// testing to see if jquery is working on our page.
// $(document).on("click", function () {
//   alert("jquery is working");
// });

//
let gamePattern = [];
// and array that holds different colors
const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  //generate a random number between 0 and 3
  //store random number in a variable
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

//variable that holds a random color
let randomChosenColor = buttonColours[nextSequence()];
//pushing the random color to the game pattern
gamePattern.push(randomChosenColor);

//selecting the button with the same id as our randomly generated color
console.log($(`div#${randomChosenColor}`));
//making this element flash
$(`div#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fad;

//playing audio depending on the chose color
let audio = new Audio(`sounds/${randomChosenColor}.mp3`);
//audio.play();
