"use strict";
const links = document.querySelector(".nav__links");
const link = document.querySelectorAll(".nav__item--link");
const btnScrollDown = document.querySelector(".scrolldown");
const btnScrollUp = document.querySelector(".link-home");
const sectionAbout = document.querySelector(".section-about");
const sectionHome = document.querySelector(".section-home");
const year = document.querySelector(".year");
const btnToggle = document.querySelector(".menu");
let docTitle = document.title;

const scrollUp = () => sectionHome.scrollIntoView({ behavior: "smooth" });
const scrollDown = () => sectionAbout.scrollIntoView({ behavior: "smooth" });

btnScrollUp.addEventListener("click", scrollUp, { passive: true });
btnScrollDown.addEventListener("click", scrollDown, { passive: true });

links.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__item--link")) {
    const id = e.target.dataset.href;
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

btnToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

link.forEach((elementLinks) => {
  elementLinks.addEventListener("click", () => {
    links.classList.remove("show-links");
    btnToggle.classList.toggle("opened");
  });
});

const full_year = new Date();
year.innerHTML = full_year.getFullYear();

window.addEventListener("blur", () => {
  document.title = "Volte 😪";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});
