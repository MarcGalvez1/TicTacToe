const GameBoard = (() => {
  // Game board is array inside Gameboard object
  const gameBoardArr = [];
  let isStart = true;
  let isFull = false;
  let isWin = false;
  // sets up game board
  for (let i = 0; i < 9; i++) {
    gameBoardArr.push("");
  }
  const updateBoard = (marker, location) => {
    isStart = false;

    if (gameBoardArr[location] === "") {
      gameBoardArr[location] = marker;
      checkIsFull();
    } else {
      console.log("Invalid location");
    }
  };
  const getGameBoard = () => {
    return gameBoardArr.slice();
  };
  const getIsStart = () => {
    return isStart;
  };
  const checkIsFull = () => {
    for (let i = 0; i < 9; i++) {
      if (gameBoardArr[i] === "") {
        isFull = false;
        break;
      } else {
        if (i === 8 && gameBoardArr[i] !== "") {
          isFull = true;
          console.log(checkTie());
        }
      }
    }
  };

  const winningCombo = [
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
    for (let i = 0; i < 8; i++) {
      let matchCounter = 1;
      for (let j = 0; j < 2; j++) {
        if (
          gameBoardArr[winningCombo[i][j]] ===
          gameBoardArr[winningCombo[i][j + 1]]
        ) {
          matchCounter++;
          if (matchCounter === 3) {
            isWin = true;
            return gameBoardArr[winningCombo[i][j]];
          }
        } else {
          break;
        }
      }
    }
  };
  const checkTie = () => {
    if (isFull && !isWin) {
      return "Tie";
    }
  };
  return {
    updateBoard: updateBoard,
    getGameBoard: getGameBoard,
    getIsStart: getIsStart,
    checkWin: checkWin,
  };
})();

const Player = (marker) => {
  const getMarker = () => {
    return marker;
  };
  const updateIsActive = (isActiveInput) => {
    isActive = isActiveInput;
  };
  return {
    getMarker: getMarker,
    updateIsActive: updateIsActive,
  };
};

const PlayerActionsControl = (() => {
  const player1Choice = document.getElementById("player1-form");
  const boardReference = GameBoard;
  const isStart = boardReference.getIsStart();
  let activePlayer;
  let player1;
  let player2;

  player1Choice.onsubmit = (event) => {
    event.preventDefault();
    let findSelected = () => {
      let selected = document.querySelector(
        "input[name='player1-choice']:checked"
      ).value;
      return selected;
    };

    player1 = Player(findSelected());
    if (player1.getMarker() === "X") {
      player2 = Player("O");
    } else {
      player2 = Player("X");
    }
    isPlayerSet = true;
    setActivePlayer();
  };

  const setActivePlayer = () => {
    if (isStart) {
      if (player1.getMarker() === "X") {
        activePlayer = player1;
      } else {
        activePlayer = player2;
      }
    }
  };
  const updateActivePlayer = () => {
    if (activePlayer.getMarker() === player1.getMarker()) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  };
  const getActivePlayerMarker = () => {
    return activePlayer.getMarker();
  };
  const getActivePlayer = () => {
    return activePlayer;
  };
  return {
    updateActivePlayer: updateActivePlayer,
    getActivePlayer: getActivePlayer,
    getActivePlayerMarker: getActivePlayerMarker,
  };
})();

const displayController = (() => {
  const boxes = document.getElementsByClassName("box");
  const boardArr = GameBoard;
  const ActivePlayer = PlayerActionsControl;

  for (const box of boxes) {
    box.addEventListener("click", (event) => {
      // console.log(ActivePlayer.getActivePlayer().getMarker());
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
        ActivePlayer.updateActivePlayer();
      }
    });
  }
})();

/* const player1 = PlayerChoice("X");
const player2 = PlayerChoice("O");
let currentGameBoard;
GameBoard.updateBoard("X", 0, 1);
currentGameBoard = GameBoard.getGameBoard();
console.log(currentGameBoard);
GameBoard.updateBoard("X", 1, 2);
currentGameBoard = GameBoard.getGameBoard();
console.log(currentGameBoard);
GameBoard.updateBoard("X", 2, 1);
currentGameBoard = GameBoard.getGameBoard();
console.log(currentGameBoard); */

// console.log(GameBoard.winConditions())

// GameBoard.updateBoard(player1.getPlayer(), 1);
// const currentGameBoard2 = GameBoard.getGameBoard();
// console.log(currentGameBoard2);

// GameBoard.updateBoard(player2.getPlayer(), 5);
// const currentGameBoard3 = GameBoard.getGameBoard();
// console.log(currentGameBoard3);
// GameBoard(testing.getPlayer1, 8)
