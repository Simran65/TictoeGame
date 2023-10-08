let currentPlayer = "X";
let gameOver = false;

function makeMove(cellIndex) {
    const cell = document.getElementsByClassName("cell")[cellIndex];
    
    if (!cell.innerHTML && !gameOver) {
        cell.innerHTML = currentPlayer;
        cell.style.color = currentPlayer === "X" ? "blue" : "red";
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        
        const winner = checkWinner();
        if (winner) {
            document.getElementById("message").textContent = `Player ${winner} wins!`;
            gameOver = true;
        } else if (isBoardFull()) {
            document.getElementById("message").textContent = "It's a draw!";
            gameOver = true;
        } else {
            document.getElementById("message").textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}

function checkWinner() {
    const cells = document.getElementsByClassName("cell");
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            return cells[a].innerHTML;
        }
    }

    return null;
}

function isBoardFull() {
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        if (!cell.innerHTML) {
            return false;
        }
    }
    return true;
}

function resetBoard() {
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
        cell.innerHTML = "";
    }
    document.getElementById("message").textContent = "Player X's Turn";
    currentPlayer = "X";
    gameOver = false;
}

resetBoard();
