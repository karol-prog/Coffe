/* HAMBURGER MENU */
const hamIcon = document.querySelector(".hamburger-icon");
const hamMenuLinks = document.querySelector(".menu-ham-links");
const menuLinksAll = document.querySelectorAll(".menu-links");

/* function for display menu links */
hamIcon.addEventListener("click", function () {
  if (hamMenuLinks.style.display === "block") {
    hamMenuLinks.style.display = "none";
  } else {
    hamMenuLinks.style.display = "block";
  }
});

/* after clicking on some link close ham menu */
menuLinksAll.forEach(function (link) {
  link.addEventListener("click", function () {
    hamMenuLinks.style.display = "none";
  });
});

/* STICKY navigation when window position is at main window*/
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

/* RATINGS SECTION */
const ratings = [
  {
    name: "Penny Lane",
    quote:
      "Exceptional service and a delightful ambiance! The coffee here is a masterpiece, each cup brewed to perfection. My new favorite spot for a caffeine fix!",
    picture:
      "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80",
  },
  {
    name: "Jim Knight",
    quote:
      "Five stars are not enough for this coffee haven! The baristas are wizards, turning every order into a work of art. Impeccable taste and a cozy atmosphere make it a must-visit.",
    picture:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Amy Jones",
    quote:
      "A hidden gem for coffee enthusiasts! The attention to detail in every cup is unparalleled. The staff's knowledge and passion for coffee shine through, creating an unforgettable experience.",
    picture:
      "https://images.unsplash.com/photo-1618298363483-e31a31f1a1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "Nick Baker",
    quote:
      "Finally found my coffee sanctuary! The quality of beans, precision in brewing, and the warm, inviting atmosphere make this place stand out. Easily the best coffee shop in town!",
    picture:
      "https://images.unsplash.com/photo-1484684096794-03e03b5e713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
];

const quote = document.querySelector(".quote");
const quotePic = document.querySelector(".quote-pic");
const quoteAuthor = document.querySelector(".quote-author");
const quoteSection = document.querySelector(".quote-section");

let slider = 0;
let totalSlides = ratings.length;

/* add slider if slider are lower than lenght of ratings */
function currentSlider() {
  if (slider === totalSlides) {
    slider = 0;
  } else {
    slider++;
  }
}

/*   setTimeout(() => {
    quote.textContent = ratings[0].quote;
    quotePic.textContent = ratings[0].picture;
    quoteAuthor.textContent = ratings[0].name;
  }, 5000);



/* ORDER MENU POP OUT */
const orderPop = document.querySelector(".order-pop-out");
const orderBtn = document.getElementById("order-btn");
const closeOrderPop = document.getElementById("close-dialog");

orderBtn.addEventListener("click", function () {
  orderPop.showModal();
});

closeOrderPop.addEventListener("click", function () {
  orderPop.close();
});

/* SCROLL UP BTN */
const scrollBtn = document.querySelector(".up-btn");

/* btn show after 100px of scroll */
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
