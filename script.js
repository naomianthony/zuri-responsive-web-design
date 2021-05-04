const hambuger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hambuger.addEventListener("click", (hamburger) => {
    navLinks.classList.toggle("show");
});