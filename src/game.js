//game.js
import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";
import { Player } from "../src/player.js";

export class Game {
    constructor(){
        this.player1 = new Player('human');
        this.player2 = new Player('computer');
        this.currentPlayer = this.player1;
        this.opponent = this.player2;
        this.previousComputerMoves = new Set();
    }

    switchTurns(){
        const temp = this.currentPlayer;
        this.currentPlayer = this.opponent;
        this.opponent = temp;
    }

    attackPlayer(coordinates) {
        this.player2.gameboard.receiveAttack(coordinates);
    
        if (this.player2.gameboard.allShipsSunk()) {
            return "human wins";
        }
    
        return "continue";
    }
    
    attackComputer() {
        let x, y, key;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            key = `${x},${y}`;
        } while (this.previousComputerMoves.has(key));
    
        this.previousComputerMoves.add(key);
    
        this.player1.gameboard.receiveAttack([x, y]);
    
        if (this.player1.gameboard.allShipsSunk()) {
            return "computer wins";
        }
    
        return "continue";
    }
    
}