let board = [];



function play(clickedId) {
    let clickedElement = document.getElementById(clickedId);
    let playerSpan = document.getElementById('player');
    
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    }
    else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    let sq0 = board[0]
    let sq1 = board[1]
    let sq2 = board[2]
    let sq3 = board[3]
    let sq4 = board[4]
    let sq5 = board[5]
    let sq6 = board[6]
    let sq7 = board[7]
    let sq8 = board[8]
    // Top Three 0, 1, 2
    sq0 !== undefined && sq0 === sq1 && sq1 === sq2 ? alert(`${sq0} wins`) : false
    // Middle Three 3, 4, 5
    sq3 !== undefined && sq3 === sq4 && sq4 === sq5 ? alert(`${sq3} wins`) : false
    sq6 !== undefined && sq6 === sq7 && sq7 === sq8 ? alert(`${sq6} wins`) : false
    sq0 !== undefined && sq0 === sq3 && sq3 === sq6 ? alert(`${sq0} wins`) : false
    sq1 !== undefined && sq4 === sq1 && sq4 === sq7 ? alert(`${sq1} wins`) : false
    sq2 !== undefined && sq5 === sq2 && sq8 === sq2 ? alert(`${sq2} wins`) : false
    sq0 !== undefined && sq0 === sq4 && sq4 === sq8 ? alert(`${sq0} wins`) : false
    sq2 !== undefined && sq6 === sq4 && sq4 === sq2 ? alert(`${sq2} wins`) : false
    // [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]
    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
      if (board[i] === undefined) {
        boardFull = false;
      }
    }
    if (boardFull && !sq0 && !sq3 && !sq6 && !sq1 && !sq2) {
      alert("Cat's game, there is no winner");
      location.reload()
    }

}

// function playerWins(player) {
//     return winCondition.some(function (threeInARow) {
//         return threeInARow.every(function (square) {
//             return board[square] === player;
//         })
//     })

// }
// let winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]
// var xWins = playerWins('X')
// var oWins = playerWins('O')
