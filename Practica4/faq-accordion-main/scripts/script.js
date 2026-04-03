let buttons = document.querySelectorAll(".question__button");
let texts = document.querySelectorAll(".question__text");

let iconPlus = "./assets/images/icon-plus.svg";
let iconMinus = "./assets/images/icon-minus.svg";

buttons.forEach((button, index) => {

    button.addEventListener("click", function () {

        let isActive = !texts[index].classList.contains("deactive");

        texts.forEach(text => text.classList.add("deactive"));
        buttons.forEach(btn => {
            btn.querySelector("img").src = iconPlus;
        });

        if (!isActive) {
            texts[index].classList.remove("deactive");
            button.querySelector("img").src = iconMinus;
        }

    });

});