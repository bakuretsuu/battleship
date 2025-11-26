import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";

export class Player {
    constructor(type = 'human'){
        this.type = type;
        this.gameboard = new Gameboard();
    }
    
}