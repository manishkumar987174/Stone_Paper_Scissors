let userScore = 0;
let compScore = 0;
let you = document.querySelector("#user-score");
let comp = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".hands");
let message=document.querySelector('#message');
// if game draw
console.log(message);

const drawGame = () => {
  console.log("game was draw!!");
  message.innerText='Game was draw!';
};

// winner

const showWinner = (userWin) => {
  if (userWin) {
    console.log("you win");
    userScore++;
    you.innerText = userScore;
    message.innerText='You win!😊';
  } else {
    console.log("you lose");
    compScore++;
    comp.innerText = compScore;
    message.innerText='You lose!😒';
  }
};

// computer choice

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randomidx = parseInt(Math.random() * 3);
  return options[randomidx];
};

// playGame logic

const playGame = (userChoice) => {
  console.log(`user choice ${userChoice}`);
  const compChoice = genCompChoice();
  console.log(`computer choice ${compChoice}`);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

// user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
