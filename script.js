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

function switchGridLines() {
    if (gridLineButton.textContent == "Disable Grid Lines") {
        grid.forEach(b => b.style.borderColor = "white");
        gridLineButton.textContent = "Enable Grid Lines";
    } else if (gridLineButton.textContent == "Enable Grid Lines") {
        grid.forEach(b => b.style.borderColor = "rgba(158, 156, 156, 0.493)");
        gridLineButton.textContent = "Disable Grid Lines";
    }
  
}

function setColor (button) {
    drawColor = button.classList;
    colorButtons.forEach(b => b.style.padding = "17px");
    button.style.padding = "22px";
}

const gridContainer = document.querySelector(".grid");
const gridContainerWidth = gridContainer.clientWidth;
const gridSizeButton = document.querySelector(".gridSize");
const clearButton = document.querySelector(".clearGrid");
const fillButton = document.querySelector(".fill");
const gridLineButton = document.querySelector(".gridLines");

let grid;
let boxesPerRow = 16;
let boxesTotal = boxesPerRow ** 2;
let boxWidth = parseFloat (gridContainerWidth) / boxesPerRow + "px";
let drawColor = "black";
document.querySelector(".black").style.padding = "22px";

const colorButtons = document.querySelectorAll(".colorButtons > button");
colorButtons.forEach(b => b.addEventListener("click", () => setColor(b)));

gridSizeButton.addEventListener("click", function (){
    boxesPerRow = prompt("Enter squares per side:");
    boxWidth = parseFloat (gridContainerWidth) / boxesPerRow + "px";
    grid = createGrid();
});

gridLineButton.addEventListener("click", switchGridLines);
fillButton.addEventListener("click", fillGrid);
clearButton.addEventListener("click", grid = createGrid);

grid = createGrid();

