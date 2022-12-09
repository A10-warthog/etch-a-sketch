function gridMain() {
    const grid = document.querySelector(".grid__body");
    const button_array = document.querySelectorAll("button");

    function assignCssProp() {

    }

    function createGrid(setValue_int = 16) {
        const gridSquare_int = grid.offsetWidth / 16;
        const xHeightOrWidth_int = gridSquare_int / setValue_int;
        for(let i = 0; i < setValue; i++) {
            const row = document.createElement("div");
            row.classList.add("grid__row");
            grid.appendChild(row);
            for (let j = 0; j < setValue; j++) {
                const item = document.createElement("div");
                item.classList.add("row__item");

            }
        }
    }
}