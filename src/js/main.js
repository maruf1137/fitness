// carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-circle-left'></i>",
    "<i class='fas fa-chevron-circle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// sticky nav
const Nav = document.querySelector(".main");

window.addEventListener("scroll", function () {
  Nav.classList.toggle("sticky", window.scrollY > 10);
});

// responsive nav bar
const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close");
const mobileMenu = document.querySelector(".mobile-menu__list");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("open-menu");
  overlay.classList.add("open-menu");
});

const closeNav = function () {
  mobileMenu.classList.remove("open-menu");
  overlay.classList.remove("open-menu");
};

const arr = [overlay, closeBtn];
arr.forEach((el) => {
  el.addEventListener("click", closeNav);
});

//  scroll effect
const scrollLink = document.querySelectorAll(".scroll-link");
const nav = document.querySelector(".nav");

scrollLink.forEach((link) => {
  link.addEventListener("click", function (el) {
    el.preventDefault();
    const id = el.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;

    let position = element.offsetTop - navHeight;

    if (!Nav.classList.contains("sticky")) {
      position = position - navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
