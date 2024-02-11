/* HAMBURGER MENU */
const hamIcon = document.querySelector(".hamburger-icon");
const hamMenuLinks = document.querySelector(".menu-ham-links");
const menuLinksAll = document.querySelectorAll(".menu-links");

/* function for display menu links */
hamIcon.addEventListener("click", function () {
  hamIcon.classList.toggle("open"); //after click call this css class for show X
  if (hamMenuLinks.style.display === "block") {
    hamMenuLinks.style.display = "none";
  } else {
    hamMenuLinks.style.display = "block";
  }
});

/* after clicking on some link close ham menu and change a ham icon form x to spans*/
menuLinksAll.forEach(function (link) {
  link.addEventListener("click", function () {
    hamMenuLinks.style.display = "none";
    hamIcon.classList.toggle("open");
  });
});

/* STICKY navigation when window position is at main window*/
const desktopNavbar = document.querySelector("#desktop-nav");
const hamburgerNavbar = document.querySelector("#hamburger-nav");
const main = document.querySelector("main");

const mainPos = main.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;
  if (scrollPos >= mainPos - 20) {
    desktopNavbar.classList.add("sticky");
    hamburgerNavbar.classList.add("sticky");
  } else {
    desktopNavbar.classList.remove("sticky");
    hamburgerNavbar.classList.remove("sticky");
  }
});

/* NAV LINKS UNDERLINE UPDATES IN EACH SECTION */
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu-links a"); //select all anchor in desktop and ham

window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 20) {
      currentSection = section.id; //add current section id to variable
    }
  });

  menuLinks.forEach(function (link) {
    if (link.href.includes(currentSection) && currentSection !== "") {
      //each link include href of the id and the id is a not ""
      link.classList.add("active"); // add class active
    } else {
      link.classList.remove("active");
    }
  });
});

/* RATINGS SECTION */
const ratings = [
  {
    name: "Emily Johnson",
    quote:
      "Exceptional service and a delightful ambiance! The coffee here is a masterpiece, each cup brewed to perfection. My new favorite spot for a caffeine fix!",
    picture:
      "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80",
  },
  {
    name: "Liam Mitchell",
    quote:
      "Five stars are not enough for this coffee haven! The baristas are wizards, turning every order into a work of art. Impeccable taste and a cozy atmosphere make it a must-visit.",
    picture:
      "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophia Rodriguez",
    quote:
      "A hidden gem for coffee enthusiasts! The attention to detail in every cup is unparalleled. The staff's knowledge and passion for coffee shine through, creating an unforgettable experience.",
    picture:
      "https://images.unsplash.com/photo-1618298363483-e31a31f1a1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  },
  {
    name: "Ethan Thompson",
    quote:
      "Finally found my coffee sanctuary! The quality of beans, precision in brewing, and the warm, inviting atmosphere make this place stand out. Easily the best coffee shop in town!",
    picture:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const quote = document.querySelector(".quote");
const quotePic = document.querySelector(".quote-pic");
const quoteAuthor = document.querySelector(".quote-author");

let totalSlides = ratings.length;
let slideToSee = 0; //tracking position in array

function newQuote() {
  quote.textContent = ratings[slideToSee].quote;
  quotePic.setAttribute("src", ratings[slideToSee].picture);
  quoteAuthor.textContent = ratings[slideToSee].name;

  // add value to slideToSee
  slideToSee++;

  // if slideToSee reach length of array make it again 0
  if (slideToSee === totalSlides) {
    slideToSee = 0;
  }
  setTimeout(newQuote, 5000);
}
// Calling the function newQuote to be execute
newQuote();

/* ORDER MENU POP OUT */
const orderBtn = document.getElementById("order-btn"); //btn for open dialog
const orderPop = document.querySelector(".order-pop-out"); //dialog

const closeOrderPop = document.getElementById("close-dialog"); //fa-xmark
const closeOrderPopBtn = document.querySelector(".btn-close-form"); //btn inside dialog
const formOrder = document.getElementById("order-form"); //form inside dialog

//btn for open the order pop-out menu
orderBtn.addEventListener("click", function () {
  orderPop.showModal();
});

//x-mark closing form
closeOrderPop.addEventListener("click", function () {
  orderPop.close();
});

//order form store data to console
formOrder.addEventListener("submit", function (e) {
  e.preventDefault();

  const newOrderData = new FormData(formOrder); //store a form data to variable

  // for loop for every item in newOrderData and console log the key and value of item
  for (item of newOrderData) {
    console.log(item[0], item[1]);
  }

  // Create a div for the thank you message
  formOrder.innerHTML = `
    <div class="thank-order">
      <h2 class="thank-text"> Thank you for your order </h2>
      <p>Your order will be ready after 5 minutes</p>
      <img class="coffee-gif" src='gif/coffe.gif'>
    </div>
   `;

  // Reset the form after 5 seconds
  setTimeout(function () {
    orderPop.close(); // close the dialog
    formOrder.reset(); //reset the form
    formOrder.innerHTML = originalFormHTML; //after ordering make a form back to default
  }, 5000);
});

//variable for original html element of dialog form
const originalFormHTML = formOrder.innerHTML;

/* SCROLL UP BTN */
const scrollBtn = document.querySelector(".up-btn");

// btn show after 200px of scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }

  //after click on up btn scroll to top of the page
  scrollBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
});
