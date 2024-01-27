/* hamburger menu */
const hamIcon = document.querySelector(".hamburger-icon");
const hamMenuLinks = document.querySelector(".menu-ham-links");

hamIcon.addEventListener("click", function () {
  if (hamIcon === "click") {
    hamMenuLinks.style.display = "block";
  }
});
/* STICKY navigation */

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
