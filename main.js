
const GameBoard = (() => {
    // Game board is array inside Gameboard object  
    const gameBoardArr = [];

    // sets up game board
    for (let i = 0; i < 9; i++) {
        gameBoardArr.push("")
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
        getGameBoard: getGameBoard
    }

})();

const Player = (marker) => {

    this.marker = marker;

    
    const getMarker = () => {
        return marker;
    }
    return {getMarker: getMarker}
}

const DisplayControl = (() => {

    const gameboardObject = GameBoard;
})();

const PlayerActionsControl = (() => {
    
    const player1Choice = document.getElementById("player1-form")
    player1Choice.onsubmit = (event) => {
        event.preventDefault();
        let findSelected = () => {
            let selected = document.querySelector("input[name='player1-choice']:checked").value
            return(selected)
        }

   
        const player1 = Player(findSelected());
        console.log(player1.getMarker());
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
