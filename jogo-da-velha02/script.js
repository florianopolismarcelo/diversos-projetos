localStorage.setItem("turn", "X")
localStorage.setItem("game", "---------")

function fieldClick(id) {
  var turn = localStorage.getItem("turn")
  var game = localStorage.getItem("game")
  var button = document.getElementById(id)

  if (!button.innerHTML) {
    button.innerHTML = turn

    if (turn == "X") localStorage.setItem("turn", "O")
    else localStorage.setItem("turn", "X")
    game = game.substring(0, Number(id) - 1) + turn + game.substring(Number(id))
    localStorage.setItem("game", game)
    verifyWinner(game)
  }
}
