function gridMain() {
    const grid = document.querySelector(".grid__body");
    const button_array = document.querySelectorAll("button");
    let colorName = grid.previousElementSibling.textContent;
    let errorMsg = document.querySelector(".input__error"); 

    function removeListener(elm, evtName, func) {
        window.addEventListener("mouseup", () => {
            elm.removeEventListener(evtName, func);
        });
    }

    function assignCssProp(elm, cssProp) {
        Object.assign(elm.style, cssProp);
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

    function getItem() {
        let [...row] = grid.children;
        let child = [];
        row.forEach(row => {
            const [...item] = row.children;
            item.forEach(item => child.push(item));
        });
        return child;
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

    function toggleClass(elm, className) {
        elm.forEach(elm => elm.classList.toggle(className));
    }

    function resizeGrid() {
        const gridInput = document.querySelector(".grid_input");
        let inputValue = Number(gridInput.value);
        function removeGrid() {
            const [...gridRow] = grid.children;
            gridRow.forEach(row => row.remove());
            createGrid(inputValue);
            gridInput.value = '';
            if((/--border/).test(getItem()[0].getAttribute("class")) === false)
                if ((/--ve/).test(grid.getAttribute("class")) === false)
                    toggleClass([grid], "grid__body--shadow--ve");
        }
        if (inputValue >= 10 && inputValue <= 100) 
            removeGrid();
        else 
            errorMsg.textContent = "Enter input value between 10 & 100";
        setTimeout(()=> {errorMsg.textContent = "";}, 2000);
    }

    function btnListener(evt) {
        const btnTxt = evt.target.textContent;
        if (btnTxt === "Clear")
            clearGrid();
        else if (btnTxt === "Resize")
            resizeGrid();
        else if (btnTxt == "Grid") {
            toggleClass([grid], "grid__body--shadow--ve");
            toggleClass(getItem(), "row__item--border");
        } else
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

    button_array.forEach(button => button.addEventListener("click", btnListener));
}

gridMain();