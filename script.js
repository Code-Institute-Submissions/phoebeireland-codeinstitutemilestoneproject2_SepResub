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

//the code for the click counter was taken from https://jsfiddle.net/sayham28/01hdx3t9/
function allTotal(multiplier) {
    clickCount++;
    var childClickCount = multiplier * clickCount
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = oldScore + (childClickCount);
}

function clickTimer(delay) {

}

function childTotal() {
    //call allTotal to increment and call a separate function that starts a timer and keeps calling allTotal on the new timer
}

function scissorTotal() {

}

function stampTotal() {

}

function laserTotal() {

}

function tDTotal() {

}

