function gridMain() {
    const grid = document.querySelector(".grid__body");
    const button_array = document.querySelectorAll("button");
    const colorName = grid.previousElementSibling.textContent;
    
    function assignCssProp(elm, cssProp) {
        Object.assign(elm.style, cssProp);
    }

    function removeListener(elm, evtName, func) {
        window.addEventListener("mouseup", () => {
            elm.removeEventListener(evtName, func);
        })
    }

    function elmStyleColor(elm, colorProp) {
        assignCssProp(elm, {"background-color": colorProp});
        elmListener(grid, "mouseover", colorDiv);
        removeListener(grid, "mouseover", colorDiv);
    }

    function colorDiv(evt) {
        const propName = colorName;
        evt.preventDefault();
    }

    function elmListener(evt, elm, evtName, func) {
        colorName = evt.target.textContent;
        elm.addEventListener(evtName, func);
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