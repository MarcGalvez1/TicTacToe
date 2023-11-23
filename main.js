
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


const PlayerChoice = ((choice, who) => {
    if (who === 1) {
        const player1 = choice
    } 
    if (who === 2) {
        const player2 = choice
    }
    
    const getPlayer1 = () => player1;
    const getPlayer2 = () => player2;
    return {getPlayer1, getPlayer2}
})()

// testing
// const testing = PlayerChoice("x", 1)
// const testing2 = PlayerChoice("o", 2)

GameBoard.updateBoard("X", 3);
const currentGameBoard = GameBoard.getGameBoard();
console.log(currentGameBoard);
//GameBoard(testing.getPlayer1, 8)
