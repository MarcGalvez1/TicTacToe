
// create game board
    // create an array to keep track of where anything is

const DOM = (() => {
    return {
        // Display Board
        
    }
})()

const GameBoard = (() => {
    // Game board is array inside Gameboard object  
    const gameBoardMap = new Map();
    for (let i = 0; i < 9; i++) {
        gameBoardMap.set(i, "");
    }

    const updateBoard = (marker, location) => {
        if (gameBoardMap.has(location)) {
            gameBoardMap.set(location, marker)
        }
        else {
            console.log("Invalid location")
        }
    }

    const getGameBoard = () => {
        return new Map(gameBoardMap)
    }
    return {
        updateBoard: updateBoard,
        getGameBoard: getGameBoard
    }

})()


function PlayerChoice(marker) {
    const player = marker;
    const getPlayer = () => player;
    return {getPlayer}
}

const player1 = PlayerChoice("X");
const player2 = PlayerChoice("O");

GameBoard.updateBoard("X", 3);
const currentGameBoard = GameBoard.getGameBoard();
console.log(currentGameBoard);

GameBoard.updateBoard(player1.getPlayer(), 4);
const currentGameBoard2 = GameBoard.getGameBoard();
console.log(currentGameBoard2);

GameBoard.updateBoard(player2.getPlayer(), 5);
const currentGameBoard3 = GameBoard.getGameBoard();
console.log(currentGameBoard3);
//GameBoard(testing.getPlayer1, 8)
