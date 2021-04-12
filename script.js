/* this was taken from stack overflow to use for the overlay*/
$(document).ready(function() {
    var overlay = $('#overlay');
    overlay.on('click', function (e) {
        overlay
            .hide()
            .off();
    });
});

var allScore = 0;
var boxClicks = 0;

function overallTotal() {
}

let gameObjects = {childScissors: 0, fancyScissors: 0, stampCutter: 0, laserPrinter: 0, tDPrinter: 0}

//write a function that will count the clicks on the smaller buttons for the incrementation and assign that value to a variable
    var clickCount = 0;
//then write  afunction that will translate that number of clicks into a usable multiplier for the button upgrades

//add a hover description for all of the buttons to describe what happens when they're clicked
//figure out how to add cookie retention of data to save score
//maybe experiment with adding a leaderboard api to compare people's scores?

//this was taken from the Love Maths Project
function boxTotal() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

//the code for the click counter was taken from https://jsfiddle.net/sayham28/01hdx3t9/ and adapted
function allTotal(multiplier, cost) {
    clickCount++;
    var allClickCount = multiplier * clickCount
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = (oldScore - (oldScore * cost))+ (allClickCount);
}

 /*
function costScore(cost) {
    let oldScore = parseInt(document.getElementById("score").innerText);
    var cScore = oldScore - (oldscore * cost)
    allScore = cScore 
}
*/

//code was taken from stack overflow https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery?noredirect=1&lq=1
function clickTimer(multiplier, cost, delay) {
    setInterval(function(){ 
        allTotal(multiplier,cost)
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

