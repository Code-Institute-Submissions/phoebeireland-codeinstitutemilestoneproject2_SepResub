/* this was taken from stack overflow to use for the overlay*/
$(document).ready(function() {
  let overlay = $('#overlay');
  overlay.on('click', function (e) { overlay.hide().off();
  });
});
//write a function that will count the clicks on the smaller buttons for the incrementation and assign that value to a variable
let clickCount = 0;
let oldScore = 0;
//then write  a function that will translate that number of clicks into a usable multiplier for the button upgrades
//figure out how to add cookie retention of data to save score = use Session

//this was taken from the Love Maths Project
function boxTotal() {
  // let oldScore = parseInt(document.getElementById("score").innerText);
  // document.getElementById("score").innerText = ++oldScore;
  updateScore(0, 0, true);
}
//the code for the click counter was taken from https://jsfiddle.net/sayham28/01hdx3t9/ and adapted
function allTotal(multiplier, cost) {
  clickCount++;
  let allClickCount = multiplier * clickCount;
  updateScore(cost, allClickCount, false);
}
// main game function loop
//code was taken from stack overflow https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery?noredirect=1&lq=1
function clickTimer(multiplier, cost, delay) {
  setInterval(function(){ 
      allTotal(multiplier,cost);
      checkScore();
  }, delay);
}
function childTotal() {
  clickTimer(2, 0.1, 5000)
}
//this was taken from example on https://api.jquery.com/hover/
$( "#c-scissor" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 2 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
function scissorTotal() {
  clickTimer(2.5, 0.2, 10000)
}
$( "#f-scissor" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 2.5 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
function stampTotal() {
  clickTimer(3, 0.3,15000)
}
$( "#stamp-cutter" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 3 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
function laserTotal() {
  clickTimer(3.5, 0.4, 20000)
}
$( "#laser-printer" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 3.5 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
function tDTotal() {
  clickTimer(4, 0.5, 25000)
}
$( "#td-printer" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 4 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
function updateScore(cost, allClickCount, is_box_click) {
  if (is_box_click) {
      console.log("main box clicked");
      oldScore++;
      document.getElementById("score").innerText = oldScore.toFixed(2);
  } else {
      console.log("im a bonus button");
      oldScore = parseInt(document.getElementById("score").innerText);
      document.getElementById("score").innerText = ((oldScore - (oldScore * cost)) + (allClickCount)).toFixed(2);
  }
  checkScore();
}
function checkScore() {
  if (oldScore >= 20) {
      console.log("hit ");
      let firstButton = document.getElementById("c-scissor");
      firstButton.disabled = false;
  }
  if (oldScore >= 40) {
      console.log("hit ");
      let firstButton = document.getElementById("f-scissor");
      firstButton.disabled = false;
  }
  if (oldScore >= 60) {
    console.log("hit ");
    let firstButton = document.getElementById("stamp-cutter");
    firstButton.disabled = false;
  }
  if (oldScore >= 80) {
    console.log("hit ");
    let firstButton = document.getElementById("laser-printer");
    firstButton.disabled = false;
  }
  if (oldScore >= 100) {
    console.log("hit ");
    let firstButton = document.getElementById("td-printer");
    firstButton.disabled = false;
  }
}

function saveScore() {
  document.cookie = "score=" + oldScore.toString() + ";path=/";
  alert(document.cookie);
}

function loadScore() {
  let value = document.cookie.split("=")[1];
  if (isNaN(value)) {
    value = 0;
  }  
  oldScore = value;
  document.getElementById("score").innerText = oldScore;
}

window.onload = (event) => {
  loadScore();
  console.log('The previous score has loaded');
}