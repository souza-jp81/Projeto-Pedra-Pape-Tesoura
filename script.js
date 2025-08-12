const resultDisplay = document.querySelector('.result');
const humanScoreDisplay = document.querySelector('#human-score');
const machineScoreDisplay = document.querySelector('#machine-score');
const humanAnimation = document.getElementById('human-animation');
const machineAnimation = document.getElementById('machine-animation');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSOR: "scissor"
};

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    displayChoices(humanChoice, machineChoice);
    playTheGame(humanChoice, machineChoice);
};

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
};

const displayChoices = (human, machine) => {
    humanAnimation.textContent = human === GAME_OPTIONS.ROCK ? '✊' : human === GAME_OPTIONS.PAPER ? '✋' : '✌️';
    humanAnimation.style.opacity = 1;

    machineAnimation.textContent = machine === GAME_OPTIONS.ROCK ? '✊' : machine === GAME_OPTIONS.PAPER ? '✋' : '✌️';
    machineAnimation.style.opacity = 1;

    setTimeout(() => {
        humanAnimation.style.opacity = 0;
        machineAnimation.style.opacity = 0;
    }, 1500);
};

const playTheGame = (humanChoice, machineChoice) => {
    if (humanChoice === machineChoice) {
        resultDisplay.textContent = "Empate!";
    } else if (
        (humanChoice === GAME_OPTIONS.ROCK && machineChoice === GAME_OPTIONS.SCISSOR) ||
        (humanChoice === GAME_OPTIONS.PAPER && machineChoice === GAME_OPTIONS.ROCK) ||
        (humanChoice === GAME_OPTIONS.SCISSOR && machineChoice === GAME_OPTIONS.PAPER)
    ) {
        resultDisplay.textContent = "Você ganhou!";
        humanScoreNumber++;
    } else {
        resultDisplay.textContent = "Oponente ganhou!";
        machineScoreNumber++;
    }

    // Atualiza os placares
    humanScoreDisplay.textContent = humanScoreNumber;
    machineScoreDisplay.textContent = machineScoreNumber;
};