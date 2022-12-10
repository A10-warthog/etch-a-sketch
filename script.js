function gridMain() {
    const grid = document.querySelector(".grid__body");
    const button_array = document.querySelectorAll("button");
    let colorName = grid.previousElementSibling.textContent;

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
        elmListener(grid, "mouseover", divModify);
        removeListener(grid, "mouseover", divModify);
    }

    function randomColor() {
        const hue = Math.floor(Math.random() * 255);
        return `hsl(${hue}, 100%, 50%)`;
    }

    function clearGrid() {
        let colorName = "";
        const [...gridChild] = grid.children;
        gridChild.forEach( row => row.forEach( child => {
            if ( ( /\w/g ).test( child.style.backgroundColor ) === true ) {
                colorName = child.style.backgroundColor;
                assignCssProp(child, {"background-color": ""} );
            }
        } ) );
        return colorName;
    }

    function resizeGrid() {
        function removeGrid() {
            const gridRow = grid.children;
            gridRow.forEach(row => row.remove());
            createGrid(inputValue);
        } 
        const inputValue = Number(document.querySelector(".grid_input").value);

        if(inputValue > 10 && inputValue < 100)
            removeGrid();
        else 
            console.log("Enter input value between 10 & 100");
        return "#000";
    }

    function divModify(evt) {
        let propName = colorName;
        const elm = evt.target;
        evt.preventDefault();
        //check button's textContent
        if (propName === "Random")
           propName = randomColor();
        else if (propName === "Eraser")
            propName = grid.style.backgroundColor;
        else if (propName === "Clear") 
           propName = clearGrid();
        else if (propName === "Resize") 
            propName = resizeGrid();
       elmStyleColor(elm, propName);    
    }

    function elmListener(elm, evtName, func, btnTxt) {
        if (btnTxt !== undefined)
            colorName = btnTxt;
        else    
            colorName = "#000";
        elm.addEventListener(evtName, func);
    }
    
    function gridListener(evt) {
        const btnTxt = evt.target.textContent;
        elmListener(grid, "mousedown", divModify, btnTxt)
    }

    function createGrid(setValue_int = 16) {
        const gridWidth_int = grid.offsetWidth / 16;
        const xValue_int = gridWidth_int / setValue_int;
        const cssProp = {
            height: xValue_int +"rem",
            width: this.height
        }
        for(let i = 0; i < setValue_int; i++) {
            const row = document.createElement("div");
            row.classList.add("grid__row");
            grid.appendChild(row);
            for (let j = 0; j < setValue_int; j++) {
                const item = document.createElement("div");
                item.classList.add("row__item");
                assignCssProp(item, cssProp);
            }
        }

        elmListener(grid, "mousedown", divModify);
    }

    createGrid();

    button_array.forEach(button => button.addEventListener("click", gridListener))
    
}

gridMain();