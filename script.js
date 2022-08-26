function clearGrid () {
    gridContainer.innerHTML = "";
}

function createGrid () {
    clearGrid();
    boxesTotal = boxesPerRow ** 2;
    for (let i = 0; i < boxesTotal; i++) {
        const box = document.createElement("div");
        box.classList.add("grid");
        box.style.width = boxWidth;
        box.style.height = boxWidth;
        gridContainer.appendChild(box);
    }
    const grid = document.querySelectorAll(".grid");
    grid.forEach(b => b.addEventListener("mouseover", function() {
        b.style.background = drawColor; 
        b.style.borderColor = drawColor;} ));
}

const gridContainer = document.querySelector(".gridContainer");
const gridContainerWidth = gridContainer.clientWidth;
const gridSizeButton = document.querySelector(".gridSize");

let boxesPerRow = 16;
let boxesTotal = boxesPerRow ** 2;
let boxWidth = parseFloat (gridContainerWidth) / boxesPerRow + "px";
let drawColor = "black";

gridSizeButton.addEventListener("click", function (){
    boxesPerRow = prompt("Enter squares per side:");
    boxWidth = parseFloat (gridContainerWidth) / boxesPerRow + "px";
    createGrid();
});

createGrid();

