// Dropdown
const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDropdown (event) {
    event.preventDefault();

    dropdown.classList.toggle('active');
}

btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown);


// Animations
var swiper = new Swiper(".slide-evidences", {
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
      el: ".s-card-evidences .top .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 16,
      },
      600: {
        slidesPerView: 2.3,
        spaceBetween: 15,
      },
      850: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });

  AOS.init({
    duration: 1000,
    once: true,
  });
