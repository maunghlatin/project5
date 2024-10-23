let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = "Please enter a number between 1 and 100.";
    } else if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
        guessButton.disabled = true;
        resetButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else {
        message.textContent = "Too high! Try again.";
    }
});

resetButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    message.textContent = '';
    guessButton.disabled = false;
    resetButton.style.display = 'none';
});
