/* hamburger menu */

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
