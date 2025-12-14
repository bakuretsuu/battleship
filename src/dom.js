//dom.js
export function createBoard(container, clickHandler) {
    container.innerHTML = "";
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.x = x;
            cell.dataset.y = y;

            if (clickHandler) {
                cell.addEventListener("click", () => clickHandler([x, y]));
            }

            container.appendChild(cell);
        }
    }
}

export function renderBoard(container, gameboard, hideShips = false) {
    [...container.children].forEach(cell => {
        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);
        const value = gameboard.grid[x][y];

        cell.className = "cell"; // reset

        if (value === "hit") {
            cell.classList.add("hit");
        } else if (value === "miss") {
            cell.classList.add("miss");
        } else if (value !== 0 && !hideShips) {
            cell.classList.add("ship");
        }
    });
}
