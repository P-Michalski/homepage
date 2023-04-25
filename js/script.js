console.log("Witam wszystkich tu obecnych!");

let body = document.querySelector(".js-body");
let header = document.querySelector(".js-header");
let mainHeading = document.querySelector(".js-headerHeading");
let button = document.querySelector(".js-mainButton");
let themeIndicator = document.querySelector(".js-mainButtonTheme");
let sectionTexts = document.querySelectorAll(".js-sectionText");
let caption = document.querySelector(".js-tableCaption");
let footer = document.querySelector(".js-footer");
let footerText = document.querySelector(".js-footerText");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    header.classList.toggle("header--dark");
    mainHeading.classList.toggle("header__heading--dark");
    footer.classList.toggle("footer--dark");
    sectionTexts.forEach((text) => {
        text.classList.toggle("section__text--dark");
    });
    caption.classList.toggle("table__caption--dark");
    footerText.classList.toggle("footer__text--dark");
    themeIndicator.textContent === "ciemny" ? themeIndicator.textContent = "jasny" : themeIndicator.textContent = "ciemny";
});