/* this was taken from stack overflow to use for the overlay*/
$(document).ready(function() {
    var overlay = $('#overlay');
    overlay.on('click', function (e) {
        overlay
            .hide()
            .off();
    });
});

function overallTotal() {
}

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
function allTotal(multiplier) {
    clickCount++;
    var allClickCount = multiplier * clickCount
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = oldScore + (allClickCount);
}

//code was taken from stack overflow https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery?noredirect=1&lq=1
function clickTimer(multiplier, delay) {
    setInterval(function(){ 
        allTotal(multiplier)
    }, delay);
}

function childTotal() {
    clickTimer(2, 5000)

}

function scissorTotal() {
    clickTimer(2.5, 10000)
}

function stampTotal() {
    clickTimer(3, 15000)
}

function laserTotal() {
    clickTimer(3.5, 20000)
}

function tDTotal() {
    clickTimer(4, 25000)
}

