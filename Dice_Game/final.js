// Function to roll the dice and update the images
function rollDice() {
  var RandomNumber = Math.random();
  var rand = Math.floor(RandomNumber * 6) + 1;
  var rando = "dice" + rand + ".png";
  var imagesource = "images/" + rando;
  var image1 = document.querySelector(".img1");
  image1.setAttribute("src", imagesource);

  var RandomNumber2 = Math.random();
  var rand2 = Math.floor(RandomNumber2 * 6) + 1;
  var rando2 = "dice" + rand2 + ".png";
  var imagesource2 = "images/" + rando2;
  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", imagesource2);

  // Determine the winner
  var resultText = document.getElementById("result-text");
  if (rand > rand2) {
    resultText.textContent = "Player 1 wins";
  } else if (rand2 > rand) {
    resultText.textContent = "Player 2 wins";
  } else {
    resultText.textContent = "Draw";
  }
}

// Call the rollDice function when the page is fully loaded
window.addEventListener("load", rollDice);

  








