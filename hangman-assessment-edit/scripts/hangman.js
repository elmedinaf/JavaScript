let game = ["KUROMI", "HELLO KITTY", "MY MELODY", "CINNAMOROLL", "KEROPPI", "GUDETAMA", "POCHACCO", "POMPOMPURIN", "RILAKKUMA", "PUSHEEN"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = Array(myLength).fill("_ ");
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found;

let hangingImages = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
];

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}

function submitGuess() {
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = '';

    found = false;

    for (let c = 0; c < answer.length; c++) {
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }
        output = output + display[c] + ' ';
    }

    if (found == false) {
        attemptsLeft--;
        document.getElementById("hangman").src = "images/" + hangingImages[attemptsLeft];
    }

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

    document.getElementById("word").innerHTML = output;
    output = '';
}

