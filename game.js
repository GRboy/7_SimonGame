var game_stage = 1;
var gamelist = [];

gameReady();


function gameReady() {

  $(document).keypress(function(event) {
    debugger;
    if (event.key === "A" || event.key === "a") {
      gameStart();
    }
  })
}

function gameStart() {
  $("#level-title").text("Level" + game_stage);
  var num = makeRandomNum();
  gamelist.aapend(num);
  makeSound(num);

  var temp_list = gamelist;
  while(temp_list.length>0){
    $(document).click(function(){
      switch(this.)
    })
  }

}

function makeRandomNum() {
  return Math.floor(Math.random() * 4);
}

function makeSound(value) {
  switch (value) {
    case 0:
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case 1:
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case 2:
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case 3:
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
