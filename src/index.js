// src/index.js
import "./styles.css";
import { Game } from "./game.js";
import { createBoard, renderBoard } from "./dom.js";
import { Ship } from "./ship.js";

// Create game instance
const game = new Game();
game.player1.gameboard.placeShip(new Ship(3), [0,0], "horizontal");
game.player2.gameboard.placeShip(new Ship(3), [4,4], "vertical");

// DOM references
const playerBoardDiv = document.getElementById("playerBoard");
const computerBoardDiv = document.getElementById("computerBoard");

// Create grid DOM elements
createBoard(playerBoardDiv);
createBoard(computerBoardDiv, handlePlayerAttack);

// Initial render
renderBoth();

// --- FUNCTIONS ---

function renderBoth(){
    renderBoard(playerBoardDiv, game.player1.gameboard, false);
    renderBoard(computerBoardDiv, game.player2.gameboard, true);
}

function handlePlayerAttack([x, y]) {

    // Player attacks computer
    const result = game.attackPlayer([x, y]);

    renderBoth();   // update after player's move

    if (result !== "continue") {
        alert(result);
        return;
    }

    // Computer attacks player
    const compResult = game.attackComputer();

    renderBoth();   // update again after computer move

    if (compResult !== "continue") {
        alert(compResult);
    }
}
