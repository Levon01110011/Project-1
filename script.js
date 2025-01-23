let stringifyBoard = function(board) {
    return board[0].join("     ") +
    "\n" + board[1].join("     ") + 
    "\n" + board[2].join("     ") +
    "\n" + board[3].join("     ") +
    "\n" + board[4].join("     ") +
    "\n" + board[5].join("     ");
};


let victory = function(board, player) {
    
    if(board[0][0] === player && board[0][1] === player && board[0][2] === player && board[0][3] === player && board[0][4] === player) {
        return true;
    }

    if(board[1][0] === player && board[1][1] === player && board[1][2] === player && board[1][3] === player && board[1][4] === player) {
        return true;
    }

    if(board[2][0] === player && board[2][1] === player && board[2][2] === player && board[2][3] === player && board[2][4] === player) {
        return true;
    }

    if(board[3][0] === player && board[3][1] === player && board[3][2] === player && board[3][3] === player && board[3][4] === player) {
        return true;
    }

    if(board[4][0] === player && board[4][1] === player && board[4][2] === player && board[4][3] === player && board[4][4] === player) {
        return true;
    }

    if(board[5][0] === player && board[5][1] === player && board[5][2] === player && board[5][3] === player && board[5][4] === player) {
        return true;
    }

    
    if(board[0][0] === player && board[1][0] === player && board[2][0] === player && board[3][0] === player && board[4][0] === player) {
        return true;
    }

    if(board[0][1] === player && board[1][1] === player && board[2][1] === player && board[3][1] === player && board[4][1] === player) {
        return true;
    }

    if(board[0][2] === player && board[1][2] === player && board[2][2] === player && board[3][2] === player && board[4][2] === player) {
        return true;
    }

    if(board[0][3] === player && board[1][3] === player && board[2][3] === player && board[3][3] === player && board[4][3] === player) {
        return true;
    }

    if(board[0][4] === player && board[1][4] === player && board[2][4] === player && board[3][4] === player && board[4][4] === player) {
        return true;
    }

    if(board[0][0] === player && board[1][1] === player && board[2][2] === player && board[3][3] === player && board[4][4] === player) {
        return true;
    }

    if(board[1][0] === player && board[2][1] === player && board[3][2] === player && board[4][3] === player && board[5][4] === player) {
        return true;
    }

    if(board[0][4] === player && board[1][3] === player && board[2][2] === player && board[3][1] === player && board[4][0] === player) {
        return true;
    }

    if(board[1][4] === player && board[2][3] === player && board[3][2] === player && board[4][1] === player && board[5][0] === player) {
        return true;
    }

    return false;

};


let board = [
    ["_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_"]
];

let player = 'x';

while (true) {
    let boardStr = stringifyBoard(board); 

    let row = + prompt("Start the Game-Tic tac toi \n\n" + boardStr);
    let colum = +prompt("Next step \n\n" + boardStr);

    if(board[row][colum] !== "_") {
        alert("Game Over... ERROR...")
        break;
    }
    
    board[row][colum] = player;

    const k = victory(board,player);

    if(k) {
        alert(player + " You won the game");
        break;
    }


    if(player === 'x') {
      player = 'o';
    } else {
      player = 'x';
    }

}
