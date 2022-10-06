"use strict";
const links = document.querySelector(".nav__links");
const link = document.querySelectorAll(".nav__item--link");
const btnScrollDown = document.querySelector(".home__btn-about");
const btnScrollUp = document.querySelector(".link-home");
const sectionAbout = document.querySelector(".section-about");
const sectionHome = document.querySelector(".section-home");
const year = document.querySelector(".year");
const btnToggle = document.querySelector(".nav__btn");

btnScrollUp.addEventListener("click", () => {
  sectionHome.scrollIntoView({ behavior: "smooth" });
});

btnScrollDown.addEventListener("click", () => {
  sectionAbout.scrollIntoView({ behavior: "smooth" });
});

links.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__item--link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

btnToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

link.forEach((elNav) => {
  elNav.addEventListener("click", () => {
    links.classList.remove("show-links");
  });
});

const date = new Date();
year.innerHTML = date.getFullYear();
