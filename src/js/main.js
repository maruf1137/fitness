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

window.addEventListener("scroll", function () {
  const Nav = document.querySelector(".main");
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
console.log(arr);
arr.forEach((el) => {
  el.addEventListener("click", closeNav);
});
