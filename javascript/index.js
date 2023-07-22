let slidesperview = 1;
let w = window.innerWidth;

addEventListener("resize", () => {
  w = window.innerWidth;
});

if (w <= 500) {
  slidesperview = 1;
} else if (w <= 600) {
  slidesperview = 2;
} else if (w <= 800) {
  slidesperview = 3;
} else if (w >= 1000) {
  slidesperview = 4;
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: slidesperview,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


const toggleButton = document.getElementById('toggleButton');
const navbar = document.getElementById('navbar-default');

toggleButton.addEventListener('click', function () {
  navbar.classList.toggle('hidden');
});