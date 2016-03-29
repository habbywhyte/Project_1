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
var circlesValue = [];
var firstCircle = '';
var secondCircle = '';
var match = 0;


for (var i = 0; i < circles.length; i++) {
  tempCircle = circles[i];
  console.log(tempCircle);
  tempCircle.setAttribute("data-language",language[i])

  // var random = language[Math.floor(Math.random() * language.length)];
}
function clickCircle () {
  if (clicks==2) {
    return;
  }
  if (clicks==0) {
}
}
