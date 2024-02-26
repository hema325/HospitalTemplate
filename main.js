const nav = document.getElementById("nav");
const navItems = document.querySelectorAll("#nav .nav_items a");
const openNavBtn = document.getElementById("open_nav-btn");
const closeNavBtn = document.getElementById("close_nav-btn");

openNavBtn.addEventListener("click", () => nav.classList.add("active"));
closeNavBtn.addEventListener("click", () => nav.classList.remove("active"));

navItems.forEach(item => item.addEventListener("click", () => nav.classList.remove("active")));

window.addEventListener("scroll", e => {
    if (window.scrollY > 100)
        nav.classList.add("window-scroll");
    else
        nav.classList.remove("window-scroll");
});

// swiper element
const swiperEl = document.querySelector('swiper-container');

// swiper parameters
const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();