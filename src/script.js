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
links.forEach((element) => {
  element.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

function themeMode() {
  navLinks.classList.remove("show");
  document.getElementById("gitImg").classList.toggle("git");
  document.body.classList.toggle("dark");

  let themeImg = document.getElementById("themeimg");
  let themeTxt = document.getElementById("themetxt");

  if (document.body.classList.contains("dark")) {
    themeTxt.innerHTML = "Light";
    themeImg.src = "images/sun.png";
  } else {
    themeTxt.innerHTML = "Dark";
    themeImg.src = "images/night.png";
  }
}

