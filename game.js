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
}

//detect which button is being clicked and plays sound depending on the color
$("div.btn").on("click", function (event) {
  //console.log(event.target.id);
  //variable that stores the id of the clicked element
  let userChosenColour = event.target.id;
  console.log(userChosenColour);
  //add the id to end of the pattern array
  userClickedPattern.push(userChosenColour);
  //sound to be played when user clicks the color
  playSound(userChosenColour);
});

// when called playSound() plays the sound corresponding to the name parameter
function playSound(name) {
  //playing audio depending on the chose color
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}
