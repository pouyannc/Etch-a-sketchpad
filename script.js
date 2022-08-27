function clearGrid () {
    gridContainer.innerHTML = "";
}

function createGrid () {
    clearGrid();
    boxesTotal = boxesPerRow ** 2;
    for (let i = 0; i < boxesTotal; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = boxWidth;
        box.style.height = boxWidth;
        gridContainer.appendChild(box);
    }
    const grid = document.querySelectorAll(".box");
    grid.forEach(b => b.addEventListener("mouseover", function() {
        b.style.background = drawColor; 
        b.style.borderColor = drawColor;} ));
    return grid;
}

function fillGrid () {
    grid.forEach(function(b) {
        b.style.background = drawColor; 
        b.style.borderColor = drawColor;  
    } )
}


const gridContainer = document.querySelector(".grid");
const gridContainerWidth = gridContainer.clientWidth;
const gridSizeButton = document.querySelector(".gridSize");
const clearButton = document.querySelector(".clearGrid");
const fillButton = document.querySelector(".fill");


let grid;
let boxesPerRow = 16;
let boxesTotal = boxesPerRow ** 2;
let boxWidth = parseFloat (gridContainerWidth) / boxesPerRow + "px";
let drawColor = "black";

document.querySelector(".red").addEventListener("click", () => drawColor = "red");
document.querySelector(".black").addEventListener("click", () => drawColor = "black");
document.querySelector(".blue").addEventListener("click", () => drawColor = "blue");
document.querySelector(".yellow").addEventListener("click", () => drawColor = "yellow");
document.querySelector(".orange").addEventListener("click", () => drawColor = "orange");
document.querySelector(".green").addEventListener("click", () => drawColor = "green");
document.querySelector(".purple").addEventListener("click", () => drawColor = "purple");
document.querySelector(".brown").addEventListener("click", () => drawColor = "rgb(85, 48, 1)");
document.querySelector(".pink").addEventListener("click", () => drawColor = "pink");
document.querySelector(".white").addEventListener("click", () => drawColor = "white");

gridSizeButton.addEventListener("click", function (){
    boxesPerRow = prompt("Enter squares per side:");
    boxWidth = parseFloat (gridContainerWidth) / boxesPerRow + "px";
    grid = createGrid();
});

fillButton.addEventListener("click", fillGrid);

clearButton.addEventListener("click", grid = createGrid);


grid = createGrid();

