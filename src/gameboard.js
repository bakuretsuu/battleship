export class Gameboard {
    constructor(){
        this.grid = [];
        for(let i = 0; i < 10; i++){
            this.grid[i] = [];   
            for(let j = 0; j < 10; j++){
                this.grid[i][j] = 0;
            }
        }
        this.missedShots = [];
    }

    placeShip(ship, coordinates, orientation){
        const shipLength = ship.length;
        const [x, y] = coordinates;
        for (let i = 0; i < shipLength; i++) {
            if (orientation === 'horizontal') {
                if (this.grid[x][y+i] !== 0) return false;
            } else if (orientation === 'vertical') {
                if (this.grid[x+i][y] !== 0) return false;
            }
        }
        
        for(let i = 0; i < shipLength; i++){
            if(orientation === 'horizontal'){
                this.grid[x][y+i] = ship;
            } else if (orientation === 'vertical'){
                this.grid[x+i][y] = ship;
            }
        }
        return true;
    }

    receiveAttack(coordinates){
        const [x, y] = coordinates;
        const cell = this.grid[x][y];

        if (cell === 'miss' || cell === 'hit') return;
    
        if (cell !== 0) {
            cell.hit();   
            this.grid[x][y] = 'hit';       
        } else {
            this.missedShots.push([x,y]);
            this.grid[x][y] = 'miss';
        }
    }

    allShipsSunk(){
        const ships = new Set();

        for (let row of this.grid) {
            for (let cell of row) {
                if (cell !== 0 && cell !== "hit" && cell !== "miss") {
                    ships.add(cell);
                }
            }
        }
    
        for (let ship of ships) {
            if (!ship.isSunk()) return false;
        }
    
        return true;
    }
}