/* this was taken from stack overflow to use for the overlay*/
$(document).ready(function() {
    var overlay = $('#overlay');
    overlay.on('click', function (e) {
        overlay
            .hide()
            .off();
    });
});

//this was taken from the Love Maths Project

function overallTotal() {
    // Gets the current score from the DOM and increments it

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function boxTotal() {

}

function childTotal() {

}

function scissorTotal() {

}

function stampTotal() {

}

function laserTotal() {

}

function tDTotal() {

}

