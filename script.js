/****************** Navbar logic ***************/
function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}

navSlide();

//****************index.html

//resume button
document.getElementById("resumeButton").addEventListener("click", () => {
  window.open("Jordan_Sangalang.pdf", "fullscreen=yes");
});

// main cotact button
document.getElementById("contactButton").addEventListener("click", function () {
  window.location.href = "contact.html";
});

//contact page
// const form = document.getElementById("contact-form");
// const nameField = document.getElementById("name");
// const mailField = document.getElementById("mail");
// const msgField = document.getElementById("msg");
// const sendButton = document.getElementById("msg-btn");

// sendButton.addEventListener("click", function () {
//   mailField.style.backgroundColor = "red";
// });
