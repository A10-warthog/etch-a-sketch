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
        });
    }

    function randomValue(range) {
        return Math.floor(Math.random() * range);
    }

    function randomColor() {
        const red = randomValue(240);
        const green = randomValue(240);
        const blue = randomValue(240);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    function elmStyleColor(elm, colorProp) {
        if (elm === grid)
            return;
        if (colorProp === "Random")
            assignCssProp(elm, {"background-color": randomColor()});
        else 
            assignCssProp(elm, {"background-color": colorProp});
        elmListener(grid, "mouseover", divModify, colorProp);
        removeListener(grid, "mouseover", divModify);
    }

    function clearGrid() {
        const [...gridChild] = grid.children;
        gridChild.forEach(row => {
            const [...gridRow] = row.children;
            gridRow.forEach(child => {
                if ((/\w/).test(child.style.backgroundColor) === true)
                    child.style.backgroundColor = "";
            })
        });
    }

    function resizeGrid() {
        const gridInput = document.querySelector(".grid_input");
        let inputValue = Number(gridInput.value);

        function removeGrid() {
            const [...gridRow] = grid.children;
            gridRow.forEach(row => row.remove());
            createGrid(inputValue);
            gridInput.value = '';
        }

        if (inputValue >= 10 && inputValue <= 100)
            removeGrid();
        else 
            console.log("Enter input value between 10 & 100");
    }

    function divModify(evt) {
        let propName = colorName;
        const elm = evt.target;
        evt.preventDefault();
        //check button's textContent
        switch(propName) {
            case "Default":
                propName = "#000";
                break;
            case "Eraser":
                propName = grid.style.backgroundColor;
                break;
            case "Random":
                propName;
                break;
        }
        elmStyleColor(elm, propName);
    }

    function elmListener(elm, evtName, func, propName) {
        colorName = propName;
        elm.addEventListener(evtName, func);
    }

    function itemProp(elm, cssPropName) {
        elm.forEach(elm => assignCssProp(elm, cssPropName));
    }

    function getItem() {
        let [...row] = grid.children;
        let child = [];
        row.forEach(row => {
            const [...item] = row.children;
            item.forEach(item => child.push(item));
        });
        return child;
    }

    function btnListener(evt) {
        const btnTxt = evt.target.textContent;
        if (btnTxt === "Clear")
            clearGrid();
        else if (btnTxt === "Resize")
            resizeGrid();
        else if (btnTxt == "Grid") 
            itemProp(getItem(), {"border-top": "1px solid #9995",
                                 "border-left": "1px solid #9995"});
        else
            elmListener(grid, "mousedown", divModify, btnTxt);
    }

    function createGrid(setValue_int = 16) {
        const gridWidth_int = grid.offsetWidth / 16;
        const xValue_int = gridWidth_int / setValue_int;
        const cssProp = {
            height: xValue_int +"rem",
            width: xValue_int +"rem",
        }
        for(let i = 0; i < setValue_int; i++) {
            const row = document.createElement("div");
            row.classList.add("grid__row");
            grid.appendChild(row);
            for (let j = 0; j < setValue_int; j++) {
                const item = document.createElement("div");
                item.classList.add("row__item");
                assignCssProp(item, cssProp);
                row.appendChild(item);
            }
        }
        elmListener(grid, "mousedown", divModify, "#000");
    }

    createGrid();
    
    button_array.forEach(button => button.addEventListener("click", btnListener))
}

gridMain();