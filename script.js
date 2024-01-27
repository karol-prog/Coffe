/* hamburger menu */
const hamIcon = document.querySelector(".hamburger-icon");
const hamMenuLinks = document.querySelector(".menu-ham-links");

/* function for display menu links */
hamIcon.addEventListener("click", function () {
  if (hamMenuLinks.style.display === "block") {
    hamMenuLinks.style.display = "none";
  } else {
    hamMenuLinks.style.display = "block";
  }
});

/* STICKY navigation */
const desktopNavbar = document.querySelector("#desktop-nav");
const hamburgerNavbar = document.querySelector("#hamburger-nav");
const main = document.querySelector("main");

const mainPos = main.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;
  if (scrollPos >= mainPos) {
    desktopNavbar.classList.add("sticky");
    hamburgerNavbar.classList.add("sticky");
  } else {
    desktopNavbar.classList.remove("sticky");
    hamburgerNavbar.classList.remove("sticky");
  }
});

/* order pop out */
const orderPop = document.querySelector(".order-pop-out");
const orderBtn = document.getElementById("order-btn");
const closeOrderPop = document.getElementById("close-dialog");

orderBtn.addEventListener("click", function () {
  orderPop.showModal();
});

closeOrderPop.addEventListener("click", function () {
  orderPop.close();
});
