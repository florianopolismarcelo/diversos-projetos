let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")
let ampm = document.getElementById("ampm")

let hh = document.getElementById("hh")
let mm = document.getElementById("mm")
let ss = document.getElementById("ss")

setInterval(() => {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let amdDmd = h >= 12 ? "PM" : "AM"

  // converter 24h para 12h
  if (h > 12) {
    h = h - 12
  }

  //adicionar zero antes de um único número
  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s

  // console.log(amdDmd)
  horas.innerHTML = h + "<br><span>Horas</span>"
  minutos.innerHTML = m + "<br><span>Minutos</span>"
  segundos.innerHTML = s + "<br><span>Segundos</span>"
  ampm.innerHTML = amdDmd

  hh.style.strokeDashoffset = 440 - (440 * h) / 12
})
