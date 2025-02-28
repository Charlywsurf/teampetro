const navMenu = document.querySelector(".nav-menu");
// const navToggle = document.querySelector(".nav-toggle");
const navEx = document.querySelector(".uil-times");
const navBars = document.querySelector(".uil-bars");
    

navBars.addEventListener("click", () => {
    // navMenu.classList.toggle("mostrar");
    navMenu.setAttribute('style', 'left:0');
    navBars.setAttribute('style', 'display:none');
    navEx.setAttribute('style', 'display:block');
});

navEx.addEventListener("click", () => {
    navBars.setAttribute('style', 'display:block');
    navEx.setAttribute('style', 'display:none');
    navMenu.setAttribute('style', 'left:100%');
});