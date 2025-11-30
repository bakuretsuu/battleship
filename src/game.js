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

    attack(coordinates){
        this.opponent.gameboard.receiveAttack(coordinates);

        if (this.opponent.gameboard.allShipsSunk()) {
            return `${this.currentPlayer.type} wins`;
        }

        this.switchTurns();
        return 'continue';
    }

    computerAttack(){
        let x, y;
        let key;
        do {
            x = Math.floor(Math.random()*10);
            y = Math.floor(Math.random()*10);
            key = `${x},${y}`;
        } while(this.previousComputerMoves.has(key));

        this.previousComputerMoves.add(key);
        return this.attack([x,y]);
    }
}