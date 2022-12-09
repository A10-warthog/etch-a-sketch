function gridMain() {
    const grid = document.querySelector(".grid__body");
    const button_array = document.querySelectorAll("button");

    function assignCssProp(elm, cssProp) {

    }

    function createGrid(setValue_int = 16) {
        const gridWidth_int = grid.offsetWidth / 16;
        const xValue_int = gridSquare_int / setValue_int;
        const cssProp = {
            height: xValue_int +"rem",
            width: this.height
        }

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