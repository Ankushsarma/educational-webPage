// const navbar = document.getElementById("navbarNav");

window.addEventListener("scroll", function() {
    const element = document.getElementById("navbar");
    element.classList.toggle("bg-dark", window.scrollY > 0);
})

window.addEventListener("scroll", function() {
    const element = document.getElementById("navBtn");
    element.classList.toggle("nvaBtnDisplay", window.scrollY > 0);
})