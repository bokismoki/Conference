// VIDEO POPUPS
const heroPlayBtn = document.querySelector(".hero-play-btn");
const aboutPlayBtn = document.querySelector(".about-play-btn");
const videoPopup1 = document.querySelector(".video-popup1");
const videoPopup2 = document.querySelector(".video-popup2");
const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");

heroPlayBtn.addEventListener("click", () => {

    videoPopup1.classList.add("show");

});

close1.addEventListener("click", () => {

    videoPopup1.classList.remove("show");

});

aboutPlayBtn.addEventListener("click", () => {

    videoPopup1.classList.add("show");

});

close2.addEventListener("click", () => {

    videoPopup1.classList.remove("show");

});

// BROCHURE-BTN, SCROLL-TOP AND NAV
const introduction = document.getElementById("introduction");
const brochureBtn = document.querySelector(".brochure-btn");
const scrollTopBtn = document.querySelector(".scroll-top-btn");
const nav = document.querySelector(".nav");

document.addEventListener("scroll", () => {

    let introductionPosition = introduction.getBoundingClientRect();
    if (introductionPosition.y <= 0) {

        brochureBtn.style.left = "-55px";
        scrollTopBtn.style.bottom = "20px";
        setTimeout(navTimeoutF, 500);

    } else if (introductionPosition.y > 100) {

        brochureBtn.style.left = "-50vw";
        scrollTopBtn.style.bottom = "-50vh";
        setTimeout(navTimeoutA, 500);

    }

});

const navTimeoutF = () => {
    nav.style.position = "fixed";
};

const navTimeoutA = () => {
    nav.style.position = "absolute";
};

// BROCHURE POPUP
const brochureOverlay = document.querySelector(".brochure-overlay");

brochureBtn.addEventListener("click", () => {

    brochureOverlay.classList.add("show");

});

close3.addEventListener("click", () => {

    brochureOverlay.classList.remove("show");

});

const downloadBrochureBtn = document.querySelector(".download-brochure-btn");

downloadBrochureBtn.addEventListener("click", () => {

    brochureOverlay.classList.add("show");

});

// TOGGLE SPEAKERS X AND SHOW ICONS FOR EACH
const exes = document.querySelectorAll(".x");

exes.forEach(x => {

    x.addEventListener("click", () => {

        x.classList.toggle("xA");
        x.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle("iconsA");

    });

});

// CHANGE DAY-BTN CLASSES
const dayBtns = document.querySelectorAll(".day-btn");
const dayBtn1 = document.querySelector(".day-btn1");
const dayBtn2 = document.querySelector(".day-btn2");
const dayBtn3 = document.querySelector(".day-btn3");
const schedules = document.querySelector(".schedules");

dayBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if (btn.classList.contains("day-btn1")) {

            btn.classList.add("active");
            dayBtn2.classList.remove("active");
            dayBtn3.classList.remove("active");
            schedules.classList.add("toggleOpacity");
            setTimeout(returnOpacity, 250);

        } else if (btn.classList.contains("day-btn2")) {

            btn.classList.add("active");
            dayBtn1.classList.remove("active");
            dayBtn3.classList.remove("active");
            schedules.classList.add("toggleOpacity");
            setTimeout(returnOpacity, 250);

        } else if (btn.classList.contains("day-btn3")) {

            btn.classList.add("active");
            dayBtn1.classList.remove("active");
            dayBtn2.classList.remove("active");
            schedules.classList.add("toggleOpacity");
            setTimeout(returnOpacity, 250);

        }

    });

});

const returnOpacity = () => {
    schedules.classList.remove("toggleOpacity");
}

// SHOW FULL SCREEN IMAGES FROM GALLERY SECTION ON CLICK
const gals = document.querySelectorAll(".gal");
const galleryImgOverlay = document.querySelector(".gallery-img-overlay");
const galleryImgOverlayImg = document.querySelector(".gallery-img-overlay img");
const close4 = document.querySelector(".close4");

gals.forEach(gal => {

    gal.addEventListener("click", () => {

        let styles = window.getComputedStyle(gal, false);
        let bgImg = styles.backgroundImage;
        let bgHeight = styles.height;
        let bgWidth = styles.width;
        galleryImgOverlay.classList.add("show");
        galleryImgOverlayImg.src = bgImg.slice(4, -1).replace(/"/g, "");
        galleryImgOverlayImg.style.width = bgWidth;
        galleryImgOverlayImg.style.height = bgHeight;

    });

});

close4.addEventListener("click", () => {

    galleryImgOverlay.classList.remove("show");

});