// function navSlide() {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   burger.addEventListener("click", () => {
//     //Toggle Nav
//     nav.classList.toggle("nav-active");

//     //Animate Links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 7 + 0.5
//         }s`;
//       }
//     });
//     //Burger Animation
//     burger.classList.toggle("toggle");
//   });
// }

// navSlide();

//index.html

const contactButton = document.querySelector("#contactButton");

contactButton.addEventListener("click", () => {
  window.location.href = "https://www.google.com/";
});

//contact page
const form = document.getElementById("contact-form");
const nameField = document.getElementById("name");
const mailField = document.getElementById("mail");
const msgField = document.getElementById("msg");
const sendButton = document.getElementById("msg-btn");

sendButton.addEventListener("click", function () {
  mailField.style.backgroundColor = "red";
});
