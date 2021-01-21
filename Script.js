const menuBar = document.querySelector(".menu-bar");
const menuList = document.querySelector(".menu-list");
const closeMb = document.querySelector(".menu-bar i");

menuBar.addEventListener("click", () => {
  menuList.classList.toggle("open");
  closeMb.classList.toggle("close");
});
const messageReport = document.querySelector("#messageReport");
const year = document.getElementById("year");
const date = new Date();
year.innerHTML = date.getFullYear();
const grand = document.querySelector(".grand");
const scrollUpBtn = document.querySelector(".scroll-up");
const navbar = document.querySelector(".navbars");
const Welcome = document.querySelector("#welcome");
const welcomeHeight = welcome.getBoundingClientRect().height + 400;


window.onscroll = () => {
  if (
    document.body.scrollTop > welcomeHeight ||
    document.documentElement.scrollTop > welcomeHeight
  ) {
    navbar.classList.add("show-nav");
    scrollUpBtn.classList.add("show-scroll");
    grand.classList.remove("grand-white")
  } else {
    navbar.classList.remove("show-nav");
    scrollUpBtn.classList.remove("show-scroll");
    grand.classList.remove("grand-white")
   
   
  }
};

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("contact_form", "template_108jcmq", this).then(
        function () {
          messageReport.innerHTML = `<i class="text-success fa fa-check" aria-hidden="true"></i> Message Sent Successfully`;
          messageReport.classList.add("alert-success");

          setTimeout(() => {
            messageReport.innerHTML = "";
            messageReport.classList.remove("alert-success");
          }, 5000);
          console.log("SUCCESS!");
        },
        function (error) {
          messageReport.innerHTML = `<i class="text-danger fa fa-times" aria-hidden="true"></i> Message failed to send, please try again later`;
          messageReport.classList.add("alert-danger");

          setTimeout(() => {
            messageReport.innerHTML = "";
            messageReport.classList.remove("alert-danger");
          }, 5000);
          console.log("FAILED...", error);
        }
      );
    });
};

$(document).ready(function () {
  $(".comments").owlCarousel({
    margin: 0,
    loop: true,
    autoplayTimeOut: 2000,
    autoHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
