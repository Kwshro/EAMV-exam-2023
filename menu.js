/* vælg selectors via query selector og const i variabler */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menuContainer");
const hideMenu = document.querySelector("main");

/* sæt eventlistener på hamburger variabel og når den bliver klikket på sæt de 3 variabler til at toggle active */

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  hideMenu.classList.toggle("active");
})

/* check om .nav-link er active, hvis den er: fjern active toggle der får menuen til at forsvinde */

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  hideMenu.classList.remove("active");
}))