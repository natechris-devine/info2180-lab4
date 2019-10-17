let playerTurn = 'X';
let gameBoard;

window.onload = function () {
    gameBoard = document.getElementById("board");
    for (let ele of gameBoard.children) {
        ele.className = 'square';
        ele.addEventListener('click', function() {squareSelect(ele)});
        ele.addEventListener('mouseover', () => {ele.classList.add('hover');})
        ele.addEventListener('mouseout', () => {ele.classList.remove('hover');})
    }
    gameBoard = gameBoard.children;
}

function squareSelect(ele) {
    let eleCl = ele.classList
    if (!(eleCl.contains('X') || eleCl.contains('O'))) {
        eleCl.add(playerTurn);
        ele.innerHTML = playerTurn;
        checkWin();
        if (playerTurn === 'X') {
            playerTurn = 'O';
        } else {
            playerTurn = 'X';
        }
    }
}

function checkWin() {
    console.log(gameBoard);
    const compare = (pos1, pos2, pos3) => {
        if ((gameBoard[pos1].innerHTML === gameBoard[pos2].innerHTML) && (gameBoard[pos1].innerHTML === gameBoard[pos3].innerHTML) && (gameBoard[pos1].innerHTML !== "")) {
            return true;
        } else {
            return false;
        }
    };
    //Check horizontal wins
    win = compare(0,1,2) || compare(3,4,5) || compare(6,7,8);
    //Check vertical wins
    win = win || compare(0,3,6) || compare(1,4,7) || compare(2,5,8);
    //Check diagonal wins
    win = win || compare(0,4,8) || compare(2,4,6);
    if (win) {
        const item = document.getElementById('status');
        item.innerHTML = "Congratulations! " + playerTurn + " is the Winner!";
        item.classList.add('you-won');
    } else { 
        null; 
    }
}