let playerTurn = 'X';

window.onload = function () {
    let boardDiv = document.getElementById("board");
    for (let ele of boardDiv.children) {
        ele.className = 'square';
        ele.addEventListener('click', function() {squareSelect(ele)});
    }
}

function squareSelect(ele) {
    let eleCl = ele.classList
    if (!(eleCl.contains('X') || eleCl.contains('O'))) {
        eleCl.add(playerTurn);
        ele.innerHTML = playerTurn;
        if (playerTurn === 'X') {
            playerTurn = 'O';
        } else {
            playerTurn = 'X';
        }
    }
}

