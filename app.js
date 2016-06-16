'use strict';
var counter = 0;
var userName = prompt('Greetings! What is your name?');
alert('Welcome, ' + userName + ', glad you\'re here!');
console.log('The user is named ' + userName);
console.log('The user is about to begin the quiz.');

function q1() {
  var answer1 = prompt('Has Sean been to Bosnia?');
  console.log('The user answered ' + answer1);
  if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
    counter ++;
    alert('Right! Sean studied abroad in Sarajevo.');
    console.log('The user answered correctly');
  } else {
    alert('Wrong! Sean studied abroad in Sarajevo.');
    console.log('The user answered incorrectly');
  }
}

q1();

function q2() {
  var answer2 = prompt('Has Sean Written 4 novels?');
  console.log('The user answered ' + answer2);
  if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n'){
    alert('Right! Sean has written 3 novels.');
    console.log('The user answered correctly');
    counter ++;
  } else {
    alert('Wrong! Sean has written 3 novels.');
    console.log('The user answered incorrectly');
  }
}

q2();

function q3() {
  var answer3 = prompt('Has Sean ran a marathon?');
  console.log('The user answered ' + answer3);
  if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
    alert('Right! Sean ran the Last Chance Marathon in Bellingham.');
    console.log('The user answered correctly');
    counter ++;
  } else {
    alert('Wrong! Sean ran the Last Chance Marathon in Bellingham.');
    console.log('The user answered incorrectly');
  }
}

q3();

function q4() {
  var answer4 = prompt('Can Sean play the piano?');
  console.log('The user answered ' + answer4);
  if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
    alert('Right! Sean plays the drums.');
    console.log('The user answered correctly');
    counter ++;
  } else {
    alert('Wrong! Sean plays the drums.');
    console.log('The user answered incorrectly');
  }
}

q4();

var answer5 = prompt('Is Radiohead Sean\'s favorite band?');
console.log('The user answered ' + answer5);
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
  console.log('The user answered ' + answer5);
  alert('Right! Sean is a big fan of Radiohead.');
  console.log('The user answered correctly');
  counter ++;
} else {
  alert('Wrong! Sean is a big fan of Radiohead.');
  console.log('The user answered incorrectly');
}

console.log('The user will now guess a number');
for (var i = 0; i < 4; i++) {
  var answer6 = parseInt(prompt('Guess a number!'));
  console.log('The user guessed ' + answer6);
  if (answer6 === 7) {
    console.log('The correct number was guessed');
    alert('Correct!');
    counter++;
    break;
  } else if (answer6 < 7) {
    console.log('The user guessed too low.');
    alert('Too low!');
  } else {
    console.log('The user guessed too high.');
    alert('Too high!');
  }
}
console.log('The user will now guess countries');
for (var i = 0; i < 6; i++) {
  var answer7 = prompt('Name a country that Sean has lived in besides the U.S.');
  if (answer7.toLowerCase() === 'ecuador' || answer7.toLowerCase() === 'bosnia') {
    console.log('The user answered correctly');
    alert('Correct! Sean has lived in ' + answer7);
    counter++;
    break;
  } else {
    console.log('The user answered incorrectly');
    alert('Incorrect!');
  }
}
console.log('The user finished the quiz! :o)');
alert('Sean has lived in Ecuador and Bosnia.');
alert('You scored ' + counter + ' correct out of 7 questions.');
