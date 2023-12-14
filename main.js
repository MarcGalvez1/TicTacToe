
const GameBoard = (() => {
    // Game board is array inside Gameboard object  
    const gameBoardArr = [];
    let isStart = true;
    // sets up game board
    for (let i = 0; i < 9; i++) {
        gameBoardArr.push("")
    }
    const updateBoard = (marker, location) => {
        isStart = false;
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
    const getIsStart =() => {
        return isStart;
    }
    return {
        updateBoard: updateBoard,
        getGameBoard: getGameBoard,
        getIsStart: getIsStart
    }

})();


const Player = (marker) => {
    let isActive = false;
    const getMarker = () => {
        return marker;
    }
    const updateIsActive = (isActiveInput) => {
        isActive = isActiveInput;
    }
    const getIsActive = () => {
        return isActive;
    }
    return {
        getMarker: getMarker,
        updateIsActive: updateIsActive,
        getIsActive: getIsActive        
    }
}

const PlayerActionsControl = (() => {
    
    const player1Choice = document.getElementById("player1-form");
    const boardReference = GameBoard;
    const isStart = boardReference.getIsStart();
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
           player2 = Player("O")
        } else {
           player2 = Player("X")
        }

        GetActivePlayer()
    }

    const GetActivePlayer = () => {
        if (isStart) {
            if (player1.getMarker() === 'X') {
                player1.updateIsActive(true)
                console.log(player1.getIsActive())
                return player1;
            } else {
                player2.updateIsActive(true)
                console.log(player2.getIsActive())
                return player2;
            }
        }
    }
    

    return {
        GetActivePlayer: GetActivePlayer
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
