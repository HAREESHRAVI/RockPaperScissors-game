let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    loses: 0,
    ties: 0,
  };
  displayScore();
let isautoPlay = false;
  let setIntervalId;
  function autoPlay() {
    if (isautoPlay==false){
    setIntervalId=setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    },1000);
    isautoPlay = true;
  }
    else{
        clearInterval(setIntervalId);
        isautoPlay = false;
    }
  }


  function playGame(playerMove) {
    let result = "";

    let computerMove = pickComputerMove();

    if (playerMove === "Scissors") {
      if (computerMove === "Rock") {
        result = "You Lose";
      } else if (computerMove === "Paper") {
        result = "You Win";
      } else if (computerMove === "Scissors") {
        result = "Tie";
      }
    } else if (playerMove === "Rock") {
      if (computerMove === "Rock") {
        result = "Tie";
      } else if (computerMove === "Paper") {
        result = "You Lose";
      } else if (computerMove === "Scissors") {
        result = "You Win";
      }
    } else if (playerMove === "Paper") {
      if (computerMove === "Rock") {
        result = "You Win";
      } else if (computerMove === "Paper") {
        result = "Tie";
      } else if (computerMove === "Scissors") {
        result = "You Lose";
      }
    }

    updateScore(result);
    displayScore();

    document.querySelector(".js-result").textContent = result;
    document.querySelector(
      ".js-moves"
    ).textContent = `You chose ${playerMove}, Computer chose ${computerMove}`;
  }

  function updateScore(result) {
    if (result === "You Win") {
      score.wins++;
    } else if (result === "You Lose") {
      score.loses++;
    } else if (result === "Tie") {
      score.ties++;
    }
    localStorage.setItem("score", JSON.stringify(score));
  }

  function displayScore() {
    document.querySelector(
      ".js-score"
    ).textContent = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
  }

  function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.setItem("score", JSON.stringify(score));  
    displayScore();
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
      return "Rock";
    } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
      return "Paper";
    } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
      return "Scissors";
    }
  }
