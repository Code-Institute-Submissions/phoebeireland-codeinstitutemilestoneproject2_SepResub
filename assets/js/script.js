// this was taken from stack overflow to use for the overlay
$(document).ready(function() {
  let overlay = $('#overlay');
  overlay.on('click', function (e) { overlay.hide().off();
  });
});

//these are the universal variables used through the rest of the code
let clickCount = 0;
let oldScore = 0;

//this was taken from the Love Maths Project
function boxTotal() {
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

//this is the specific function for the child upgrade button
function childTotal() {
  clickTimer(2, 0.1, 5000)
}
//this was taken from example on https://api.jquery.com/hover/
//this is the function that expands the button to add a description when the mouse hovers over the button
$( "#c-scissor" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 2 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);

//this is the specific function for the fancy scissors button
function scissorTotal() {
  clickTimer(2.5, 0.2, 10000)
}

//this is the function that expands the button to add a description when the mouse hovers over the button
$( "#f-scissor" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 2.5 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);

//this is the specific function for the stamp button
function stampTotal() {
  clickTimer(3, 0.3,15000)
}

//this is the function that expands the button to add a description when the mouse hovers over the button
$( "#stamp-cutter" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 3 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);

//this is the specific function for the laser button
function laserTotal() {
  clickTimer(3.5, 0.4, 20000)
}

//this is the function that expands the button to add a description when the mouse hovers over the button
$( "#laser-printer" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 3.5 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);

//this is the specific function for the 3D Printer button
function tDTotal() {
  clickTimer(4, 0.5, 25000)
}

//this is the function that expands the button to add a description when the mouse hovers over the button
$( "#td-printer" ).hover(
  function() {
    $( this ).append( $( "<span><br> Each click will add a multiplier of 4 to the current score</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);

//this is the main function to calculate the score and display it in teh score section
function updateScore(cost, allClickCount, is_box_click) {
  if (is_box_click) {
      oldScore++;
      document.getElementById("score").innerText = oldScore.toFixed(2);
  } else {
      oldScore = parseInt(document.getElementById("score").innerText);
      document.getElementById("score").innerText = ((oldScore - (oldScore * cost)) + (allClickCount)).toFixed(2);
  }
  checkScore();
}

//this checks the score to make sure the minimum is met to unlock the different upgrade buttons
// code to disable/enable the buttons found here: https://flaviocopes.com/how-to-disable-button-javascript/
function checkScore() {
  if (oldScore >= 20) {
      let firstButton = document.getElementById("c-scissor");
      firstButton.disabled = false;
  }
  if (oldScore >= 40) {
      let firstButton = document.getElementById("f-scissor");
      firstButton.disabled = false;
  }
  if (oldScore >= 60) {
    let firstButton = document.getElementById("stamp-cutter");
    firstButton.disabled = false;
  }
  if (oldScore >= 80) {
    let firstButton = document.getElementById("laser-printer");
    firstButton.disabled = false;
  }
  if (oldScore >= 100) {
    let firstButton = document.getElementById("td-printer");
    firstButton.disabled = false;
  }
}


//this saves the current score (at the time of clicking) as a cookie
// Code for this was taken from https://gamedev.stackexchange.com/questions/47958/saving-scores-using-cookies and altered to fit
function saveScore() {
  document.cookie = "score=" + oldScore.toString() + ";path=/";
  alert(document.cookie);
}

//this loads the saved score
function loadScore() {
  let value = document.cookie.split("=")[1];
  if (isNaN(value)) {
    value = 0;
  }  
  oldScore = value;
  document.getElementById("score").innerText = oldScore;
}

//this specifically loads the saved score upon the loading of the window
window.onload = (event) => {
  loadScore();
}

const btn = document.getElementById('info-button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'contact_form';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});