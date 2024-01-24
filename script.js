/* order pop out */
const orderPop = document.querySelector(".order-pop-out");
const orderBtn = document.getElementById("order-btn");
const closeOrderPop = document.querySelector(".fa-xmark");

orderBtn.addEventListener("click", function () {
  orderPop.showModal();
});

closeOrderPop.addEventListener("click", function () {
  orderPop.close();
});
