"use strict"

// sliders
let sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }
});

let sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5
});

sliderMain.controller.control = sliderBg;

// toggling active class
let items = document.querySelectorAll('.slider__item');

for (let item of items) {
    item.addEventListener('click', () => {
        let active = item.classList.contains('active');

        deleteActiveClass(items);

        if (active) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

function deleteActiveClass(array) {
    for (let elem of array) {
        elem.classList.remove('active');
    }
}