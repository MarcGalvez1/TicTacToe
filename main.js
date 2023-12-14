
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


const Player = (marker, isActive) => {
    const getMarker = () => {
        return marker;
    }

    const getIsActive = () => {
        return isActive;
    }
    return {getMarker: getMarker,
            getIsActive: getIsActive        
    }
}

const PlayerActionsControl = (() => {
    
    const player1Choice = document.getElementById("player1-form");
    let player1
    let player2
    player1Choice.onsubmit = (event) => {
        event.preventDefault();
        let findSelected = () => {
            let selected = document.querySelector("input[name='player1-choice']:checked").value
            return(selected)
        }



        player1 = Player(findSelected(), false);
        if(player1.getMarker() === 'X') {
           player2 = Player("O", false)
        } else {
           player2 = Player("X", false)
        }

        handlePlayer1()
        handlePlayer2()
    }

    ActivePlayer = () => {

    }




})();


/* const displayController = (() => {
    const boxes = document.getElementsByClassName('box');
    const ActivePlayer = PlayerActionsControl;
    for (const box of boxes) {
        box.addEventListener("click", (event) => {
            const currActiveBox = document.getElementById(event.target.id);
            const mark = document.createElement('p');
            mark.textContent = PlayerActionsControl.getPlayer1();
            currActiveBox.appendChild(mark);
        });
    }

})(); */

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
