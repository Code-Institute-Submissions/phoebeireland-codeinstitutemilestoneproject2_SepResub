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
//then write  afunction that will translate that number of clicks into a usable multiplier for the button upgrades
//add a hover description for all of the buttons to describe what happens when they're clicked
//figure out how to add cookie retention of data to save score
//maybe experiment with adding a leaderboard api to compare people's scores?

//this was taken from the Love Maths Project
function boxTotal() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function childTotal() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = oldScore + (5); //write a variable that will contain the upgrade increments
}

function scissorTotal() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function stampTotal() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function laserTotal() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function tDTotal() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

