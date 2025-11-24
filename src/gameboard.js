export class Gameboard {
    constructor(){
        this.grid = [];
        for(let i = 0; i < 10; i++){
            this.grid[i] = [];   
            for(let j = 0; j < 10; j++){
                this.grid[i][j] = 0;
            }
        }
    }
}