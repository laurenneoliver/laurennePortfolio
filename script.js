const navBar = document.querySelector("nav");
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");
const openbar = document.querySelector(".open");

  menuBtns.forEach((menuBtns) => {
    menuBtns.addEventListener("click", () => {
        navBar.classList.toggle("open");
        if (overlay.style.display === "none") {
            overlay.style.display = "block";
        } else {
            overlay.style.display = "none";
        }
    });
});


