const guessButtonContainer = document.createElement("div");
guessButtonContainer.id = "guess-button-container";

const guessButton = document.createElement("button");
guessButton.id = "guess-button";

document.body.appendChild(guessButtonContainer)
guessButtonContainer.appendChild(guessButton);

const targetNumber = Math.floor(Math.random() * 100) + 1;

// start of functionality
const textBox = document.querySelector("#text-box");
const messageElement = document.querySelector("#message");
const submitButton = document.querySelector("#submit-button");

    submitButton.addEventListener('click' , () => {
        const userInput = Number(textBox.value);
    
    if (isNaN(userInput) || userInput === '') {
        messageElement.textContent = '';
    } else if (userInput < targetNumber) {
        messageElement.textContent = 'Higher';
    } else if (userInput > targetNumber) {
        messageElement.textContent = 'Lower';
    } else if (userInput === targetNumber) {
        messageElement.textContent = 'Correct!';
    } 
});