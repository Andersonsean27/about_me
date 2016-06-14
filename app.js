'use strict';
var userName = prompt('Greetings! What is your name?');
alert('Welcome, ' + userName + ', glad you\'re here!');

var answer1 = prompt('Has Sean been to Bosnia?');
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
  alert('Right! Sean studied abroad in Sarajevo.');
} else {
  alert('Wrong! Sean studied abroad in Sarajevo.');
}

var answer2 = prompt('Has Sean Written 4 novels?');
if (answer2.toLowerCase() === 'no' || answer2.toLowerCase()==='n'){
  alert('Right! Sean has written 3 novels.');
} else {
  alert('Wrong! Sean has written 3 novels.');
}
