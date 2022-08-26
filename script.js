
const gridContainer = document.querySelector(".gridContainer");
const gridContainerWidth = gridContainer.clientWidth;

let boxesPerRow = 16;
let boxesTotal = boxesPerRow ** 2;
let boxWidth = parseFloat (gridContainerWidth) / boxesPerRow + "px";
console.log(boxWidth);

for (let i = 0; i < boxesTotal; i++) {
    const box = document.createElement("div");
    box.classList.add("grid");
    box.style.width = boxWidth;
    box.style.height = boxWidth;
    gridContainer.appendChild(box);
    console.log(boxWidth);
}
