let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gamestart = false;
let gamerestart = false;
let level = 0;


$(document).on("keypress", function(event) {
  if ( (gamestart === false && (event.key === "a" || event.key === "A")) || gamerestart === true) {
    event.stopImmediatePropagation();
    userHandler();
    nextSequence();
    gamestart = true;
  }
})

function nextSequence() {

  level++;
  $("#level-title").text("Level " + level);
  let randomChosenColour = buttonColours[Math.floor((Math.random() * 4))];
  gamePattern.push(randomChosenColour);
  $("." + randomChosenColour).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColour);

  while (userClickedPattern.length > 0) {
    userClickedPattern.pop();
  }
}

function makeSound(color) {
  switch (color) {
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    default:
      console.log("[makeSound] got unexpected input");
      break;
  }
}

function userHandler() {
  $(".btn").on("click", function(event) {
    userClickedPattern.push($(this).attr("id")); //dom에서 $() 해주면 jquery object
    //여기서는 event로 id를 가져올수없다 왜냐하면 event 는 해당 click 이벤트에대한 object이고, this는 그걸 trigger한 HTMLObject임
    event.stopImmediatePropagation(); //bubbling 효가. 해당 이벤트가 부모에서 자식까지 전달되기떄문에, stopPropagation으로 전파막음
    makeSound(this.id);
    animatePress(this);
    console.log(userClickedPattern);
    if (!checkAnswer(userClickedPattern.length - 1)) {
      console.log("gameover");
      gameOver();
      return;
    }

    if (userClickedPattern.length === gamePattern.length) {
      console.log("success" + level);
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  })
}

function gameOver() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
    $("#level-title").text("GameOver, Press Any KEY to Restart!");
  }, 200);
  startOver();
}

function startOver() {
  level = 0;
  while (gamePattern.length > 0) {
    gamePattern.pop();
  }
  while (userClickedPattern.length > 0) {
    userClickedPattern.pop();
  }
  gamerestart = true;

}

function checkAnswer(stage) {
  if (gamePattern[stage] !== userClickedPattern[stage]) {
    return false;
  } else {
    return true;
  }
}

function animatePress(object) {
  $(object).addClass("pressed");
  setTimeout(function() {
    $(object).removeClass("pressed");
  }, 100);
}
