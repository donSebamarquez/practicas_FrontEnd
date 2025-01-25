const buttons = document.querySelectorAll('.btn__value');
const submit = document.querySelector(".btn__submit");
const primary = document.querySelector(".card__input");
const secondary = document.querySelector(".card__output");
const texto = document.querySelector(".output__value");

let stars;

document.addEventListener("DOMContentLoaded",function(){
    buttons.forEach(button=>{
        button.addEventListener("click",function(){
            buttons.forEach(button =>button.classList.remove('active'))
            button.classList.add("active");
            stars = button.getAttribute("data-value")
        })
    })
    submit.addEventListener("click",function(){
        if(stars){
            primary.classList.add("disable");
            secondary.classList.remove("disable");

            texto.textContent = stars
        }
        else{
            console.log("Pone una puta estrella mogolico")
        }
    })
})
