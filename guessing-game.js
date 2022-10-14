// Define user input interface
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function take user guess input
const askGuess = () => {
    if (numAttempts === 1) {
        console.log('You Lose');
        rl.close()
    } else {
        rl.question('Enter a guess: ', (answer) =>{
            let num = Number(answer);
            if (checkGuess(num)) {
                console.log("You win!");
                rl.close();
            } else {
                askGuess()
                numAttempts--;
            }
        })
    }
}

// Set turn limit to 5
let numAttempts = 5;

// function to choose random integer number in range
const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// helper function check guess
let checkGuess = (num) => {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low")
        return false;
    } else if (num === secretNumber) {
        console.log("Correct!") 
        return true;
    }
}

// Function take in user input range (min, max)
const askRange = () => {
    rl.question('Enter a max number: ', (max) => {
        rl.question('Enter a min number: ', (min) => {
            console.log("I'm thinking of a number between " + min + " and " + max + "...")
            console.log('You have 5 turns to guess the number !!!');

            // Set min and max input from string to number
            let intMin = Number(min)
            let intMax = Number(max)

            // assign random number to secretNumber
            secretNumber = randomInRange(intMin, intMax)

            // Invoked askGuess 
            askGuess();
        })
    });
}

// Invoke askRange to start the game
askRange()
