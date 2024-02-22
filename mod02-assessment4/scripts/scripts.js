const secretNumber = Math.floor(Math.random() * 1000) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const resultElement = document.getElementById("result");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 1000) {
        resultElement.innerText = "Please enter a valid number between 1 and 1000.";
    } else {
        const difference = Math.abs(secretNumber - userGuess);

        if (difference === 0) {
            resultElement.innerText = "Congratulations! You guessed the correct number!";
        } else {
            let feedback = getFeedback(difference);
            resultElement.innerText = feedback;
        }
    }
}

function getFeedback(difference) {
    if (difference <= 10) {
        return "Hot!";
    } else if (difference <= 20) {
        return "Warm.";
    } else if (difference <= 30) {
        return "Cool.";
    } else {
        return "Cold.";
    }
}
