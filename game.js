var game_stage = 1;
var gamelist = [];
var buttons = []

gameReady();


function gameReady() {

  $(document).keypress(function(event) {

    if (event.key === "A" || event.key === "a") {
      gameStart();
    }
  })
}

function gameStart() {
  $("#level-title").text("Level " + game_stage);
  makeQuiz();
  //checkAnswer();

}

function makeQuiz() {
  var num = makeRandomNum();
  gamelist.push(num);

  makeSound(num);

}

function checkAnswer() {
  var temp_list = gamelist;
  while (temp_list.length > 0) {
    $(document).click(function() {

    })
  }
}

function makeRandomNum() {
  return Math.floor(Math.random() * 4);
}

function makeSound(value) {
  //debugger;
  switch (value) {
    case 0:
      $(".blue").addClass("pressed");
      setTimeout(function() {
        $(".blue").removeClass("pressed");
      }, 1000);
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case 1:
      $(".green").addClass("pressed");
      setTimeout(function() {
        $(".green").removeClass("pressed");
      }, 1000);
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case 2:
      $(".red").addClass("pressed");
      setTimeout(function() {
        $(".red").removeClass("pressed");
      }, 1000);
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case 3:
      $(".yellow").addClass("pressed");
      setTimeout(function() {
        $(".yellow").removeClass("pressed");
      }, 1000);
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    default:
      console.log("Got unexpected value!");
      break;
  }
}

function gameOver() {
  $("#level-title").text("Game Over, Press Any Key to Restart");
  $(document).keypress(function() {
    game_stage = 1;
    while (gamelist.length > 0) {
      gamelist.pop();
    }
    gameStart();
  })
}
