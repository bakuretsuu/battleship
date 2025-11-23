import {Ship} from "./src/ship"

test('ship has correct length', () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
});

test('ship has correct number of times hit', () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
})

test('ship is not sunk when hits < length', () => {
    const ship = new Ship(3);
    ship.hit(); 
    ship.hit(); 
    expect(ship.isSunk()).toBeFalsy();
});

test('ship is sunk when hits >= length', () => {
    const ship = new Ship(3);
    ship.hit(); 
    ship.hit(); 
    ship.hit(); 
    expect(ship.isSunk()).toBeTruthy();
});

;