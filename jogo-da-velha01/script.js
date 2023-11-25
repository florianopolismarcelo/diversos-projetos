const cellElements = document.querySelectorAll("[data-cell]")
const board = document.querySelector("[data-board]")

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
    cell.classList.add (classToAdd);
}

const swapTurns = () => {
    isCircleTurn = !isCircleTurn;
}

const handleClick = (e) => {
// Colocar a marca do (X ou Circulo)
const cell = e.target;
const ClassToAdd = isCircleTurn ? "circle" : "x";


placeMark(cell, ClassToAdd)
// Verificar por vitórias
// Verificar por empates
// Mudar simbolo

}
for (const cell of cellElements) {
    cell.addEventListener ("click", handleClick, { once: true });
}