'use strict';
var userName = prompt('Greetings! What is your name?');
alert('Welcome, ' + userName + ', glad you\'re here!');

var answer1 = prompt('Has Sean been to Bosnia?');
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() ===  'y') {
  alert('Right! Sean studied abroad in Sarajevo.');
} else {
  alert('Wrong! Sean studied abroad in Sarajevo.');
}
