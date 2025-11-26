import { Gameboard } from "../src/gameboard.js";
import { Ship } from "../src/ship.js";
import { Player } from "../src/player.js"

test("player has its own gameboard", () => {
    const player = new Player();
    expect(player.gameboard).toBeInstanceOf(Gameboard);
});

test("creates a human player", () => {
    const player = new Player("human");
    expect(player.type).toBe("human");
});

test("creates a computer player", () => {
    const player = new Player("computer");
    expect(player.type).toBe("computer");
});