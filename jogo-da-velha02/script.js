localStorage.setItem("turn", "X")

function fieldClick(id) {
  var turn = localStorage.getItem("turn")
  document.getElementById(id).innerHTML = localStorage.getItem("turn")

  if (turn == "X") localStorage.setItem("turn", "O")
  else localStorage.setItem("turn", "X")
}
