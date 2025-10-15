let userScore = 0;
let computerScore = 0;

let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let userscorepara = document.querySelector("#user-score");
let computerScorepara = document.querySelector("#comp-score");

// Generate computer's choice randomly
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// Handle draw case
const drawGame = () => {
    msg.innerText = "It's a draw! Try again.";
    msg.style.backgroundColor = "gray";
};

// Show result and update scores
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorepara.innerText = computerScore;

        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }

    // ✅ Update the scores in the HTML (if these elements exist in your HTML)
    // Example HTML:
    // <span id="user-score">0</span>
    // <span id="computer-score">0</span>
    //
    // Uncomment these lines if you have those elements in your HTML:

    // document.querySelector("#user-score").innerText = userScore;
    // document.querySelector("#computer-score").innerText = computerScore;
};

// Main game logic
const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};

// Event listener for each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
