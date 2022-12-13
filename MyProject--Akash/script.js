"use strict";
function clickMe() {
  var number = prompt("Enter you birth Year...");
  console.log(number);

  var h1 = document.createElement("h1");
  var age_is = 2022 - number;
  var answer = document.createTextNode("Your age is " + age_is);
  h1.setAttribute("id", "age");
  h1.appendChild(answer);
  document.getElementById("answer1").appendChild(h1);
}

function remove1() {
  document.getElementById("answer1").remove();
}

function addimg() {
  var image = document.createElement("img");
  var div = document.getElementById("gif");
  image.src =
    "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1";
  div.appendChild(image);
}
function remove() {
  var remove = document.getElementById("gif");
  remove.removeChild(remove.childNodes[0]);
}

function clickMe2() {
  var value3 = Math.floor(Math.random() * 10);
  console.log(value3);
  var number2 = prompt("Guess a Number between 1 to 10");
  console.log(number2);
  var h1 = document.createElement("h1");
  if (value3 == number2) {
    console.log("you won");
    var answer = document.createTextNode(
      "You Won!!! You guessed:" + number2 + " and the number was " + value3
    );
    h1.setAttribute("id", "num");
    h1.appendChild(answer);
    document.getElementById("answer2").appendChild(h1);
  } else {
    console.log("you lost!. The number was " + value3);
    var answer = document.createTextNode(
      "You Lost!!! You guessed:" + number2 + " and the number was " + value3
    );
    h1.setAttribute("id", "num");
    h1.appendChild(answer);
    document.getElementById("answer2").appendChild(h1);
  }
}
function remove2() {
  document.getElementById("answer2").remove();
}
