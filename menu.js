const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menuContainer");
const hideMenu = document.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  hideMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  hideMenu.classList.remove("active");
}))