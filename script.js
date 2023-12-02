const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

function toggleNav() {
    nav.classList.toggle("active");
}

hamburguer.addEventListener("click", toggleNav);
hamburguer.addEventListener("touchstart", toggleNav);
