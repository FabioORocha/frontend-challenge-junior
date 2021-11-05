const btnMenu = document.querySelector('#btnMenu');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade')
const swiper = document.querySelector('.swiper').swiper;
const productSwiper = document.querySelector('.productSwiper').productSwiper;

btnMenu.addEventListener('click', function () {

    if (header.classList.contains('open')) { //fecha menu
        body.classList.remove('lockscroll');
        header.classList.remove('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');     
        });
    }
    else { //abre menu
        body.classList.add('lockscroll');
        header.classList.add('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }
})

const newSwiper = new Swiper('.swiper', {
    
    slidesPerView: 1,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const newSwiper2 = new Swiper('.productSwiper', {
    
    effect: "flip",
    grabCursor: true,
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

