localStorage.setItem("turn", "X")

function fieldClick(id) {
  document.getElementById(id).innerHTML = localStorage.getItem("turn")
}
