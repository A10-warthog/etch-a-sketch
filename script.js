function gridMain() {
    const grid = document.querySelector(".grid__body");
    const button_array = document.querySelectorAll("button");

    function createGrid(setValue = 16) {
        const gridArea_int = grid.offsetWidth / 16;
        for(let i = 0; i < setValue; i++) {
            const row = document.createElement("div");
            for (let j = 0; j < setValue; j++) {
                
            }
        }
    }
}