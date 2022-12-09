function gridMain() {
    const grid = document.querySelector(".grid__body");
    const button_array = document.querySelectorAll("button");
    const defaultName = grid.previousElementSibling.textContent;
    
    function colorDiv(evt) {
        evt.preventDefault();
    }

    function elmListener(elm, evtName, func) {
        elm.addEventListener(evtName, func);
    }
    
    function assignCssProp(elm, cssProp) {
        Object.assign(elm.style, cssProp);
    }

    function createGrid(setValue_int = 16) {
        const gridWidth_int = grid.offsetWidth / 16;
        const xValue_int = gridWidth_int / setValue_int;
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
                assignCssProp(item, cssProp);
            }
        }

        elmListener(grid, "mousedown", colorDiv);
    }
}