// data in this program:
// words on the cards
// time left (timer)
// number of matched pairs
// current flipped cards (so they can be compared)

// actions that can happen
//
// flipping cards ...

var language = ["java", "perl", "js", "rails", "ruby", "python", "jquery", "php",
             "java", "perl", "js", "rails", "ruby", "python", "jquery", "php"];
            console.log(language)

var circles = document.querySelectorAll(".circle");
console.log(circles)
var startButton = document.querySelector("#start");
var clicks;
var clicks = 0;
var click1 = '';
var click2 = '';
var match = '';


//To begin the game the player must push the start button to initiate game
startButton.addEventListener("click", clickCircle);

//setting the game by shuffling cards
// function shuffle (language) {
//   for (var i = 0; i < circles.length; i++) {
//     output
//   }


function showCard(){
for (var i = 0; i < circles.length; i++) {
  tempCircle = circles[i];

  tempCircle.setAttribute("data-language",language[i]);
  tempCircle.addEventListener("click", function(){
    this.innerHTML = this.getAttribute("data-language"),
      this.style.background = "#33334d";
  })
}
}


function clickCircle (tempCircle) {
  // if (clicks == 2) {return ;}
  if (clicks == 0){
  click1 = tempCircle;
  clicks = 1;
  showCard();
  console.log("click")
  }
  else {
    clicks = 2;
    click2 = tempCircle;
    showCard();
  }
}

  // turns = 1;
  // var clicks = 0;
  // click1 = tempCircle;
  //
  // if (clicks == 1) { return tempCircle;
  // }
  // if (clicks == 2) {
  //   click2 = tempCircle;
  //   return tempCircle;
  //   match = 1
    // time= setInterval("match()",1000);
  // }


// function match() {
//   clearInterval (time);
//   if (language[click1] ==language[click2]) {
//
//   }
// }
// function clickCircle () {
//   var clicks = 0;
//     if (++clicks % 2 == 0) {
//       console.log(clicks);
//       clicks = [];
//       showCards ();
//   }
//     else {
//       console.log("odd");
//
//     }
//   }
// }


// function flippedCircle (tempCircle, i) {
    // var unflippedCircle = tempCircle.style.background
    // tempCircle.style.background = "#14141f"


  // var random = language[Math.floor(Math.random() * language.length)];
