"use strict";

const nav = document.querySelector("nav");
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

const faqs = document.querySelectorAll(".faq");

//  change navbar style on scroll
window.addEventListener("scroll", function () {
  nav.classList.toggle("window-scroll", window.scrollY > nav.offsetHeight);
});

// open a frequently asked question
faqs.forEach((faq) => {
  faq.addEventListener("click", function () {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-sharp fa-solid fa-plus") {
      icon.className = "fa-sharp fa-solid fa-minus";
    } else icon.className = "fa-sharp fa-solid fa-plus";
  });
});

// show nav menu dropdown
menuBtn.addEventListener("click", function () {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu dropdown
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// change the quantity of testimonials on cellphone width
if (window.screen.width <= 600)
  document.querySelector(".mySwiper").setAttribute("slides-per-view", 1);
