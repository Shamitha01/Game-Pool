"use strict";
let maxTry = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (message) {
  document.querySelector(".number").textContent = message;
};

const displayWidth = function (message) {
  document.querySelector(".number").style.width = message;
};

const displayColor = function (message) {
  document.querySelector("body").style.backgroundColor = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // NO INPUT STRING
  if (!guess) {
    displayMessage("Input is Empty.....");
  }

  // INPUT NUMBER === SECRET NUMBER
  else if (guess === secretNumber) {
    displayMessage("Your guess is corrent.YOU WIN!😎");

    displayNumber(secretNumber);
    displayColor("#60b347");

    displayWidth("30rem");
    if (20 - maxTry < highScore || highScore === 0) {
      document.querySelector(".highscore").textContent = 20 - maxTry;
      highScore = 20 - maxTry;
    }
  }
  // WHEN GUESS !== SECRETNUMBER
  else {
    displayMessage(guess > secretNumber ? "To High😁" : "To Low😑");
    document.querySelector(".score").textContent = --maxTry;
    if (maxTry === 0) {
      displayMessage("You Lost😥");
    }
  }
});

// RESETTING EVERYTHING
document.querySelector(".again").addEventListener("click", function () {
  maxTry = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayNumber("?");
  displayColor("#222");
  displayWidth("30rem");
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
});
