{
    const onButtonClick = () => {
        const body = document.querySelector(".js-body");
        const header = document.querySelector(".js-header");
        const mainHeading = document.querySelector(".js-headerHeading");
        const themeIndicator = document.querySelector(".js-mainButtonTheme");
        const sectionTexts = document.querySelectorAll(".js-sectionText");
        const caption = document.querySelector(".js-tableCaption");
        const footer = document.querySelector(".js-footer");
        const footerText = document.querySelector(".js-footerText");

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
    };

    const init = () => {
        console.log("Witam wszystkich tu obecnych!");

        const button = document.querySelector(".js-mainButton");
        button.addEventListener("click", onButtonClick);
    };
    init()
}