
// create game board
    // create an array to keep track of where anything is


const GameBoard = (() => {
    // Game board is array inside Gameboard object  
    const gameBoardArr = [];
   // const player = marker

    // sets up game board
    for (let i = 0; i < 9; i++) {
        gameBoardArr.push("")
    }
    console.log(gameBoardArr)
    const getPlayer = () => player;

    const winConditions = () => {
        
    }


    const updateBoard = (marker, location) => {
        if (gameBoardArr[location] === "") {
            gameBoardArr[location] = marker
        }
        else {
            console.log("Invalid location")
        }
    }

    const getGameBoard = () => {
        return gameBoardArr.slice();
    }
    return {
        updateBoard: updateBoard,
        getGameBoard: getGameBoard,
        winConditions: winConditions,
        getPlayer: getPlayer
    }

})()

const DOM = (() => {
    const gameboardObject = GameBoard;
    const currBoard = gameboardObject.getGameBoard(); // Invoke the method to get the board

    for(let i = 0; i < 9; i++) 

    return {
        // Display Board
        gameboardObject: gameboardObject
    }
})();



const boardDisplay = DOM
boardDisplay.gameboardObject;

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
