const cellElements = document.querySelectorAll("[data-cell]")

for (const cell of cellElements) {
    cell.addEventListener ("click", handleClick, { once: true });
}

const handleClick = () => {
// Colocar a marca do (X ou Circulo)
// Verificar por vitórias
// Verificar por empates
// Mudar simbolo

}