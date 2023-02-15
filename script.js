function toogleTheme() {
  const html = document.documentElement

  if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } 

  const image = document.querySelector("#profile img")
  const textAlt = document.querySelector("#profile img")

  if(html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    textAlt.setAttribute("alt", "icon do Lucas colorido")
  } else {
    image.setAttribute("src", "./assets/avatar-dark.png")
    textAlt.setAttribute("alt", "icon do Lucas em preto e branco")
  }
}