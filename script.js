// data in this program:
// words on the cards
// time left (timer)
// number of matched pairs
// current flipped cards (so they can be compared)

// actions that can happen
//
// flipping cards ...

// I like that you're using an array here!
var language = ["java", "perl", "js", "rails", "ruby", "python", "jquery", "php",
             "java", "perl", "js", "rails", "ruby", "python", "jquery", "php"];
            console.log(language)

var circles = document.querySelectorAll(".circle");
console.log(circles)
// suggest removing console log statements once they've helped you verify that
// something's working or fix something that's broken
var startButton = document.querySelector("#start");
var clicks = 0;
var clickCircle1;
var clickCircle2;
var match = '';


//To begin the game the player must push the start button to initiate game
// startButton.addEventListener("click", clickCircle);


for (var i = 0; i < circles.length; i++) {
  // when looping over an array, I'd suggest using a variable like
  // currentCircle instead of tempCircle, for clarity.
  tempCircle = circles[i];

  tempCircle.setAttribute("data-language",language[i]);

  tempCircle.addEventListener("click", showCard);
}

function showCard() {

  this.innerHTML = this.getAttribute("data-language"),
  this.style.background = "#33334d";
  // increase clicks
  // if it's an odd click
    // set click circle 1
  // if it's an even click
    // set click circle 2
    // compare cards
    // change clickCircles to (null or undefined)

  // we talked about this in person, but the approach below of setting
  // clickCircle1 and clickCircle two here is very confusing (even though it
  // works). Improving this code is all about thinking how to model the problem.
  // most solutions I've found involve checking the click counter and if it's
  // odd setting clickCircle1, even, clickCircle2
  clickCircle1 = this;
  compareCard();  //
  clickCircle2 = this;
}


function compareCard () {
  clicks++
// you've got lots of 'dead' code here that' you've commented out! recommend
// removing it or moving it to a separate JS file.

// if (clicks == 2) {return ;}
  if (clicks % 2 == 0){

    //get the language of click1
    clickCircleLanguage1 = clickCircle1.getAttribute("data-language");
    console.log(clickCircleLanguage1);

    //get the lanaguage of click2
    clickCircleLanguage2 = clickCircle2.getAttribute("data-language");
    console.log(clickCircleLanguage2);

    console.log(clickCircleLanguage1 == clickCircleLanguage2);

    //compare the language of click1 and click2
    //if two cards are the same- do nothing
    //if two cards are not the same - flip back
      //change background color back
      //change innerHTML to empty string
      if (clickCircleLanguage1 != clickCircleLanguage2) {
        // setTimeout(flipBack, 700);
        flipBack()
      }
    }
}

function flipBack() {
  clickCircle1.style.background = "#e0e0eb";
  clickCircle2.style.background = "#e0e0eb";
  clickCircle1.innerHTML = "";
  clickCircle2.innerHTML = "";
}




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
