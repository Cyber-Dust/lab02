'use strict';

let score = 0;

// Questions 0
let guestChoice = prompt("Hello there Guest, welcome to my page. Here you will guess at some questions about me, but first tell me about yourself. Is that okay with you? Yes or No?");
let lowerCaseGuest = guestChoice.toLowerCase();
let guestName = "Guest";

if (lowerCaseGuest === 'yes'||lowerCaseGuest === 'y'){
  guestName = prompt ("Whats your name friend?");
} else if (lowerCaseGuest === 'no'||lowerCaseGuest === 'n'){
  alert ("Never mind that then, let's continue with some questions");
} else {
  alert ("I don't recognize that answer, lets continue anyways")}
// console.log(guestName);

// Questions 1
let guestQ1 = prompt (guestName + ", do you think Barra is a fan of Lord of The Rings?")
let lowerCaseGuestQ1 = guestQ1.toLowerCase();

function question1(){
  if (lowerCaseGuestQ1 === 'yes'||lowerCaseGuestQ1 === 'y'){
    alert (guestName + " chose " +guestQ1);
    score++;
  } else if (lowerCaseGuestQ1 === 'no'||lowerCaseGuestQ1 === 'n'){
    alert (guestName + " chose " +guestQ1);
  }
}
question1();
// console.log(guestQ1);


// Questions 2
let guestQ2 = prompt (guestName + ", do you think Barra has traveled outside of the U.S.?")
let lowerCaseGuestQ2 = guestQ2.toLowerCase();

function question2(){
  if (lowerCaseGuestQ2 === 'yes'||lowerCaseGuestQ2 === 'y'){
    alert (guestName + " chose " +guestQ2);
    score++;
  } else if (lowerCaseGuestQ2 === 'no'||lowerCaseGuestQ2 === 'n'){
    alert (guestName + " chose " +guestQ2);
  }
}
question2();
// console.log(guestQ2);


// Questions 3
let guestQ3 = prompt (guestName + ", do you think Barra plays an instrument?")
let lowerCaseGuestQ3 = guestQ3.toLowerCase();

function question3(){
  if (lowerCaseGuestQ3 === 'yes'||lowerCaseGuestQ3 === 'y'){
    alert (guestName + " chose " +guestQ3);
    score++;
  } else if (lowerCaseGuestQ3 === 'no'||lowerCaseGuestQ3 === 'n'){
    alert (guestName + " chose " +guestQ3);
  }
}
question3();
  // console.log(guestQ3);

// Questions 4
let guestQ4 = prompt (guestName + ", do you think Barra knows a second language?")
let lowerCaseGuestQ4 = guestQ4.toLowerCase();

function question4(){
  if (lowerCaseGuestQ4 === 'yes'||lowerCaseGuestQ4 === 'y'){
    alert (guestName + " chose " + guestQ4);
    score++;
  } else if (lowerCaseGuestQ4 === 'no'||lowerCaseGuestQ4 === 'n'){
    alert (guestName + " chose " +guestQ4);
  }
}
question4();
// console.log(guestQ4);

// Questions 5
let guestQ5 = prompt (guestName + ", do you think Barra will be a successful software developer?")
let lowerCaseGuestQ5 = guestQ5.toLowerCase();
function question5(){
  if (lowerCaseGuestQ5 === 'yes'||lowerCaseGuestQ5 === 'y'){
    alert (guestName + " chose " + guestQ5 + ". " + guestName + " is correct, Barra will become a successful software developer");
    score++;
  } else {
    alert ("The only possible answer here is yes, silly");
  }
}
question5();
// console.log(guestQ5);

  let finalMessage = ("Thank you " + guestName + " for playing the guessing game. You've scored" + score +  "so far. The answers to all the questions was actually Yes. Here are a list of the answers you chose. #1: " + guestQ1 + ", #2: " + guestQ2 + ", #3: " + guestQ3 + ", #4: " + guestQ4 + ", #5: " + guestQ5);
  alert(finalMessage);


// Referenced Ben Arno's work because i could not figure out the logic. Thank you Ben!
let favNumber = Math.floor(Math.random() * 20);
let guessCount = 0;
let userGuess;
while ((guessCount < 4) && (userGuess != favNumber)){
  userGuess = prompt ("Extra Credit time! Can you guess my favorite number between 1 to 20?");
  guessCount++;
  if (userGuess == favNumber){
    alert("Congratulations you guessed my favorite number" + favNumber);
    score++;
  }else if (userGuess > favNumber){
    alert("That guess was too high, try again!");
  }else if (userGuess < favNumber){
    alert("That guess was too low, try again!");
  }
  if ((guessCount == 4) && (userGuess != favNumber)){
    alert("Sorry, you're out of guesses. My favorite number is " + favNumber);
  }
}

// Name the planets - Thanks again to Ben Arno! The .tolowercase fix is nice

let tries = 0
let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
let attempt = '';
console.log(planets)
while (!planets.includes(attempt.toLowerCase()) && tries < 6) { 
  attempt = prompt ("Can you name a planet in our solar system?");
  tries++;
  if (planets.includes(attempt.toLowerCase())) {
    alert ('that\'s correct! Great Job.');
    score++;
  } else if (!planets.includes(attempt.toLowerCase()) && tries === 6) {
    alert ('Sorry, that\'s not a planet i recognize, you\'re out of tries');
  } else {
    alert ('that\'s not a planet I recognize, try again');
  }
}
alert('Here\'s all the Planets again incase you frogot them ' +planets);

alert('Thanks for playing, you scored ' + score + " out of 7 possible points" )