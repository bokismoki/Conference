// VIDEO POPUP
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

    videoPopup2.classList.toggle("show");

});

close2.addEventListener("click", () => {

    videoPopup2.classList.toggle("show");

});

// BROCHURE AND SCROLL-TOP POPUP
const introduction = document.getElementById("introduction");
const brochure = document.querySelector(".brochure");
const scrollTop = document.querySelector(".scroll-top");

document.addEventListener("scroll", () => {

    let introductionPosition = introduction.getBoundingClientRect();
    if (introductionPosition.y <= 0) {

        brochure.style.left = "-55px";
        scrollTop.style.bottom = "20px";

    } else if (introductionPosition.y > 100) {

        brochure.style.left = "-50vw";
        scrollTop.style.bottom = "-50vh";

    }

});