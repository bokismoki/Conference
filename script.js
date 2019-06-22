// VIDEO POPUPS
const heroPlayBtn = document.querySelector(".hero-play-btn");
const aboutPlayBtn = document.querySelector(".about-play-btn");
const videoPopup1 = document.querySelector(".video-popup1");
const videoPopup2 = document.querySelector(".video-popup2");
const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");

heroPlayBtn.addEventListener("click", () => {

    videoPopup1.classList.toggle("show");

});

close1.addEventListener("click", () => {

    videoPopup1.classList.toggle("show");

});

aboutPlayBtn.addEventListener("click", () => {

    videoPopup1.classList.toggle("show");

});

close2.addEventListener("click", () => {

    videoPopup1.classList.toggle("show");

});

// BROCHURE, SCROLL-TOP AND NAV POPUP
const introduction = document.getElementById("introduction");
const brochure = document.querySelector(".brochure");
const scrollTop = document.querySelector(".scroll-top");
const nav = document.querySelector(".nav");

document.addEventListener("scroll", () => {

    let introductionPosition = introduction.getBoundingClientRect();
    if (introductionPosition.y <= 0) {

        brochure.style.left = "-55px";
        scrollTop.style.bottom = "20px";
        setTimeout(navTimeoutF, 500);

    } else if (introductionPosition.y > 100) {

        brochure.style.left = "-50vw";
        scrollTop.style.bottom = "-50vh";
        setTimeout(navTimeoutA, 500);

    }

});

const navTimeoutF = () => {
    nav.style.position = "fixed";
};

const navTimeoutA = () => {
    nav.style.position = "absolute";
};