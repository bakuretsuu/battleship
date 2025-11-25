import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";

test('blank board has 10 rows and 10 columns', () => {
    const board = new Gameboard();
    expect(board.grid.length).toBe(10);        
    expect(board.grid[0].length).toBe(10);      
});

test('places a ship on the board', () => {
    const board = new Gameboard();
    const ship = new Ship(3);

    board.placeShip(ship, [0,0], 'horizontal');

    expect(board.grid[0][0]).toBe(ship);
    expect(board.grid[0][1]).toBe(ship);
    expect(board.grid[0][2]).toBe(ship);
});

test('records a hit on the ship', () => {
    const board = new Gameboard();
    const ship = new Ship(3);
    
    board.placeShip(ship, [1,1], 'vertical');
    board.receiveAttack([1,1]);

    expect(ship.hits).toBe(1);
});

test('records missed attack on the ship', () => {
    const board = new Gameboard();
    board.receiveAttack([1,1]);

    expect(board.missedShots).toContainEqual([1,1]);
});

test('reports all ships sunk', () => {
    const board = new Gameboard();
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);

    board.placeShip(ship1, [0, 0], 'horizontal');
    board.placeShip(ship2, [1, 0], 'horizontal');

    board.receiveAttack([0, 0]);
    board.receiveAttack([1, 0]);

    expect(board.allShipsSunk()).toBe(true);
});








