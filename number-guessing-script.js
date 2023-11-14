document.addEventListener("DOMContentLoaded", function () {
  const minNumber = 1;
  const maxNumber = 10;
  const correctNumber = generateRandomNumber(minNumber, maxNumber);

  function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function playRound(playerGuess) {
      let result = "";
      let explanation = "";

      if (isNaN(playerGuess) || playerGuess < minNumber || playerGuess > maxNumber) {
          result = "Invalid input!";
          explanation = "Please enter a number between " + minNumber + " and " + maxNumber + ".";
      } else if (playerGuess === correctNumber) {
          result = "Congratulations!";
          explanation = "You guessed the correct number!";
      } else {
          result = "Try again!";
          explanation = "The correct number is not " + playerGuess + ".";
      }

      displayResult(result, explanation);
  }

  function displayResult(result, explanation) {
      const resultText = document.getElementById("result-text");
      const correctNumberText = document.getElementById("correct-number");

      resultText.textContent = result;
      correctNumberText.textContent = explanation;

      // Hide input and display play again button
      const inputField = document.getElementById("user-input");
      const submitButton = document.getElementById("submit-guess");
      const playAgainButton = document.getElementById("play-again");

      inputField.style.display = "none";
      submitButton.style.display = "none";
      playAgainButton.style.display = "block";
  }

  function resetGame() {
      const inputField = document.getElementById("user-input");
      const submitButton = document.getElementById("submit-guess");
      const playAgainButton = document.getElementById("play-again");
      const resultText = document.getElementById("result-text");
      const correctNumberText = document.getElementById("correct-number");

      // Reset display
      inputField.style.display = "block";
      submitButton.style.display = "block";
      playAgainButton.style.display = "none";
      resultText.textContent = "";
      correctNumberText.textContent = "";

      // Generate a new correct number for the next round
      correctNumber = generateRandomNumber(minNumber, maxNumber);
  }

  const submitButton = document.getElementById("submit-guess");
  const playAgainButton = document.getElementById("play-again");

  submitButton.addEventListener("click", function () {
      const userGuess = parseInt(document.getElementById("user-input").value);
      playRound(userGuess);
  });

  playAgainButton.addEventListener("click", resetGame);
});
