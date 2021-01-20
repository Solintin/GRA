const menuBar = document.querySelector(".menu-bar");
const menuList = document.querySelector(".menu-list");
const closeMb = document.querySelector(".menu-bar i");

menuBar.addEventListener("click", () => {
  menuList.classList.toggle("open");
  closeMb.classList.toggle("close");
});
const year = document.getElementById("year");
const date = new Date();
year.innerHTML = date.getFullYear();
const grand = document.querySelector(".grand");
const scrollUpBtn = document.querySelector(".scroll-up");
const navbar = document.querySelector(".navbars");


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
    grand.classList.add("grand-white")
   
  }
};


