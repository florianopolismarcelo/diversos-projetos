const cellElements = document.querySelectorAll("[data-cell]")

let isCircleTurn;

const handleClick = (e) => {
// Colocar a marca do (X ou Circulo)
const cell = e.target;
const ClassToAdd = isCircleTurn ? "circle" : "x";

cell.classList.add(ClassToAdd);
// Verificar por vitórias
// Verificar por empates
// Mudar simbolo

}
for (const cell of cellElements) {
    cell.addEventListener ("click", handleClick, { once: true });
}