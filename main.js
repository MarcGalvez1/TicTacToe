const GameBoard = (() => {
  // Game board is array inside Gameboard object
  const gameBoardArr = [];
  let isStart = true;
  let isFull = false;
  let isWin = false;
  let winMark;

  for (let i = 0; i < 9; i++) {
    // sets up game board
    gameBoardArr.push("");
  }
  const updateBoard = (marker, location) => {
    // Update the array when players move.
    isStart = false;

    if (gameBoardArr[location] === "") {
      gameBoardArr[location] = marker;
      checkIsFull();
    } else {
      console.log("Invalid location");
    }
  };
  const getGameBoard = () => {
    // Returns a copy of the game board array.
    return gameBoardArr.slice();
  };
  const getIsStart = () => {
    // Get a copy of the start status of the game.
    return isStart;
  };
  const checkIsFull = () => {
    // Used to know if  the array is full to check if the game is tied.
    for (let i = 0; i < 9; i++) {
      if (gameBoardArr[i] === "") {
        isFull = false;
        break;
      } else {
        if (i === 8 && gameBoardArr[i] !== "") {
          isFull = true;
        }
      }
    }
  };

  const winningCombo = [
    // All possible winning combinations.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWin = () => {
    // Checks the gameBoardArr against the winningCombo array to see if a player has won
    for (let i = 0; i < 8; i++) {
      let matchCounter = 1;
      for (let j = 0; j < 2; j++) {
        if (
          // Checks to make sure that empty array spaces aren't counted, and that there is a match of 3 in the array.
          gameBoardArr[winningCombo[i][j]] ===
            gameBoardArr[winningCombo[i][j + 1]] &&
          (gameBoardArr[winningCombo[i][j]] !== "" ||
            gameBoardArr[winningCombo[i][j + 1] != ""])
        ) {
          // Ensures that the array
          matchCounter++;
          if (matchCounter === 3) {
            isWin = true;
            winMark = gameBoardArr[winningCombo[i][j]];
            return true;
          }
        } else {
          // if there is no solution in the current match of 3 being checked break the inner loop
          break;
        }
      }
    }
    return false;
  };
  const getWinMark = () => {
    // get a copy of the winners marker
    return winMark;
  };

  const checkTie = () => {
    // check for ties
    if (isFull && !isWin) {
      return true;
    } else {
      return false;
    }
  };
  return {
    updateBoard: updateBoard,
    getGameBoard: getGameBoard,
    getIsStart: getIsStart,
    checkWin: checkWin,
    getWinMark: getWinMark,
    checkTie: checkTie,
  };
})();

const Player = (marker, playerTag) => {
  // used to create player objects
  const getPlayerTag = () => {
    return playerTag;
  };
  const getMarker = () => {
    // Get a copy of the player's marker
    return marker;
  };
  return {
    getPlayerTag: getPlayerTag,
    getMarker: getMarker,
  };
};

const PlayerActionsControl = (() => {
  // Keeps track of all player moves.
  const player1Choice = document.getElementById("player1-form");
  const boardReference = GameBoard;
  const isStart = boardReference.getIsStart();
  let activePlayer;
  let player1;
  let player2;

  player1Choice.onsubmit = (event) => {
    // When player1 submits the form assign the markers to each player.
    event.preventDefault();
    let findSelected = () => {
      let selected = document.querySelector(
        "input[name='player1-choice']:checked"
      ).value;
      return selected;
    };

    player1 = Player(findSelected(), 1);
    if (player1.getMarker() === "X") {
      player2 = Player("O", 2);
    } else {
      player2 = Player("X", 2);
    }
    isPlayerSet = true;
    setActivePlayer();
  };

  const setActivePlayer = () => {
    // Set the active player to the player who chose X when the game starts
    if (isStart) {
      if (player1.getMarker() === "X") {
        activePlayer = player1;
      } else {
        activePlayer = player2;
      }
    }
  };
  const updateActivePlayer = () => {
    // update the active player when called.
    if (activePlayer.getMarker() === player1.getMarker()) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  };
  const getActivePlayerMarker = () => {
    // get the marker of the current active player
    return activePlayer.getMarker();
  };
  const getActivePlayer = () => {
    // get the active player object
    return activePlayer;
  };
  return {
    updateActivePlayer: updateActivePlayer,
    getActivePlayer: getActivePlayer,
    getActivePlayerMarker: getActivePlayerMarker,
  };
})();

const displayController = (() => {
  // Controls the display of the game
  const boxes = document.getElementsByClassName("box");
  const boardArr = GameBoard;
  const ActivePlayer = PlayerActionsControl;
  const winnerDisplay = document.getElementById("win-display");
  for (const box of boxes) {
    // Adds an event listener to each box
    box.addEventListener("click", (event) => {
      // Ensures that each box clicked checks the win or tie status of the game, display the winner, and display each players markers
      const currActiveBox = document.getElementById(event.target.id);
      if (currActiveBox.childElementCount === 0) {
        const mark = document.createElement("p");
        mark.textContent = ActivePlayer.getActivePlayer().getMarker();
        currActiveBox.appendChild(mark);
        boardArr.updateBoard(
          ActivePlayer.getActivePlayer().getMarker(),
          event.target.id
        );
        console.log(boardArr.getGameBoard());
        console.log(boardArr.checkWin());
        if (boardArr.checkWin() === true) {
          winnerDisplay.innerText =
            "Player " + ActivePlayer.getActivePlayer().getPlayerTag();
        } else {
          if (boardArr.checkTie()) {
            winnerDisplay.innerText = "It is a tie";
          }
        }
        ActivePlayer.updateActivePlayer();
      }
    });
  }
})();
