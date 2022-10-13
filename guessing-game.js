const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askGuess = () => {
    rl.question('Enter a guess: ', (answer) =>{
        let num = Number(answer);
        if (checkGuess(num)) {
            console.log("You win!");
            rl.close();
        } else {
            askGuess()
        }
    })
    
}

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

askGuess();

secretNumber = 42;

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
