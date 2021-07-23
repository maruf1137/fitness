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
  Nav.classList.toggle('sticky', window.scrollY > 0)
});

// responsive nav bar
const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#close')
const mobileMenu = document.querySelector('.mobile-menu__list');


menuBtn.addEventListener('click', function(){
  // mobileMenu.style.transform = "translateX(0)";
  mobileMenu.classList.toggle('open-menu');
});

closeBtn.addEventListener('click', function(){
  closeNav();
});

const closeNav = function(){
  mobileMenu.classList.toggle('open-menu');
};



// links functionalitys
// const homeBtn = document.querySelector('#home-btn');
// const aboutBtn = document.querySelector('#home-btn');
// const classesBtn = document.querySelector('#home-btn');
// const newsBtn = document.querySelector('#home-btn');
// const contactBtn = document.querySelector('#home-btn');

// homeBtn.addEventListener('click', function(){
//   closeNav();
// })

// homeBtn.addEventListener('click', function(){
//   closeNav();
// })

// homeBtn.addEventListener('click', function(){
//   closeNav();
// })


