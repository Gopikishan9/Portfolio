console.log("Lets write JavaScript");


const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
menuIcon.addEventListener("mouseover", () => {
  navLinks.classList.add("show");
});

const links = document.querySelectorAll(".links");
links.forEach(element => {
    element.addEventListener("click", () =>{
        navLinks.classList.remove("show");
    })
});