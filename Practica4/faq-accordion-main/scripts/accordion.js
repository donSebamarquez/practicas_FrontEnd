const main = document.querySelector(".card__accordions");
const buttons = main.querySelectorAll(".accordion__button");
const accordions = main.querySelectorAll(".accordion__description");

document.addEventListener("DOMContentLoaded", function () {
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            toggleAccordion(index);
        });
    });
});

function toggleAccordion(i) {
    const accordion = accordions[i];
    const button = buttons[i];
    const starImg = button.querySelector(".accordion__img");
    let newImgSrc = starImg.src.endsWith("icon-plus.svg") ? "icon-minus.svg" : "icon-plus.svg";
    starImg.src = `assets/images/${newImgSrc}`;

    if (accordion.classList.contains("active")) {
        closeAccordion(i);
    } else {
        openAccordion(i);
    }

}

function openAccordion(i) {
    let accordion = accordions[i];
    const button = buttons[i];
    const starImg = button.querySelector(".accordion__img");

    accordion.classList.add("active");
    accordion.classList.remove("deactive");
    starImg.src = "assets/images/icon-minus.svg";

    accordions.forEach((acc, index) => {
        if (index !== i) {
            closeAccordion(index);
        }
    });
}

function closeAccordion(i) {
    let accordion = accordions[i];
    const button = buttons[i];
    const starImg = button.querySelector(".accordion__img");

    accordion.classList.remove("active");
    accordion.classList.add("deactive");
    starImg.src = "assets/images/icon-plus.svg";
}
