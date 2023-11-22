const grid = document.querySelector(".grid")

const createElement = (tag, className) => {
  const element = document.createElement(tag)
  element.className = className
  return element
}
const characters = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
]
const createCard = (character) => {
  const card = createElement("div", "card")
  const front = createElement("div", "face front")
  const back = createElement("div", "face back")

  front.style.backgroundImage = `url('../imagens/${character}.png')`

  card.appendChild(front)
  card.appendChild(back)

  card.addEventListener("click", revealCard)
  card.setAttribute("data-character", character)

  return card
}


