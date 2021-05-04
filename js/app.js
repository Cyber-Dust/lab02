'use strict';

console.log('hello guest');

// Questions 0
let guestChoice = prompt("Hello there Guest, welcome to my page. Here you will guess at some questions about me, but first tell me about yourself. Is that okay with you? Yes or No?");
let lowerCaseGuest = guestChoice.toLowerCase();
let upperCaseGuest = guestChoice.toUpperCase();
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
let upperCaseGuestQ1 = guestQ1.toUpperCase();

if (lowerCaseGuestQ1 === 'yes'||lowerCaseGuestQ1 === 'y'){
  alert (guestName + " chose " +guestQ1);
} else if (lowerCaseGuestQ1 === 'no'||lowerCaseGuestQ1 === 'n'){
  alert (guestName + " chose " +guestQ1);
}
// console.log(guestQ1);

// Questions 2
let guestQ2 = prompt (guestName + ", do you think Barra has traveled outside of the U.S.?")
let lowerCaseGuestQ2 = guestQ2.toLowerCase();
let upperCaseGuestQ2 = guestQ2.toUpperCase();

if (lowerCaseGuestQ2 === 'yes'||lowerCaseGuestQ2 === 'y'){
  alert (guestName + " chose " +guestQ2);
} else if (lowerCaseGuestQ2 === 'no'||lowerCaseGuestQ2 === 'n'){
  alert (guestName + " chose " +guestQ2);
}
// console.log(guestQ2);

// Questions 3
let guestQ3 = prompt (guestName + ", do you think Barra plays an instrument?")
let lowerCaseGuestQ3 = guestQ3.toLowerCase();
let upperCaseGuestQ3 = guestQ3.toUpperCase();

if (lowerCaseGuestQ3 === 'yes'||lowerCaseGuestQ3 === 'y'){
  alert (guestName + " chose " +guestQ3);
} else if (lowerCaseGuestQ3 === 'no'||lowerCaseGuestQ3 === 'n'){
  alert (guestName + " chose " +guestQ3);
}
// console.log(guestQ3);

// Questions 4
let guestQ4 = prompt (guestName + ", do you think Barra knows a second language?")
let lowerCaseGuestQ4 = guestQ4.toLowerCase();
let upperCaseGuestQ4 = guestQ4.toUpperCase();

if (lowerCaseGuestQ4 === 'yes'||lowerCaseGuestQ4 === 'y'){
  alert (guestName + " chose " + guestQ4);
} else if (lowerCaseGuestQ4 === 'no'||lowerCaseGuestQ4 === 'n'){
  alert (guestName + " chose " +guestQ4);
}
// console.log(guestQ4);

// Questions 5
let guestQ5 = prompt (guestName + ", do you think Barra will be a successful software developer?")
let lowerCaseGuestQ5 = guestQ5.toLowerCase();
let upperCaseGuestQ5 = guestQ5.toUpperCase();

if (lowerCaseGuestQ5 === 'yes'||lowerCaseGuestQ5 === 'y'){
  alert (guestName + " chose " + guestQ5 + ". " + guestName + " is correct, Barra will become a successful software developer");
} else {
  alert ("The only possible answer here is yes, silly");
}
let finalMessage = ("Thank you " + guestName + " for playing, the guessing game. The answers to all the questions was actually Yes. Here are a list of the answers you chose. #1: " + guestQ1 + ", #2: " + guestQ2 + ", #3: " + guestQ3 + ", #4: " + guestQ4 + ", #5: " + guestQ5);

alert(finalMessage);


// console.log(guestQ5);