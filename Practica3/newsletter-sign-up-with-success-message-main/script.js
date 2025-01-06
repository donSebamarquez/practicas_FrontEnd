let button = document.getElementById("suscribirse");
let button2 = document.getElementById("return")
let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
let primary = document.getElementById("primary");
let secondary = document.getElementById("secondary");
let err_message = document.getElementById("err_msg");
let user = document.getElementById("userEmail");
let input = document.getElementById("input")
const form = document.getElementById('form');


function handleSubmit(e) {
  e.preventDefault()
}

form.addEventListener('submit', handleSubmit);

button.addEventListener("click",()=>{
    let valor_input = input.value
    let addUser = ``
    if(validEmail.test(valor_input)){

        primary.classList.add("deactivate");
        primary.classList.remove("card__primary");
        secondary.classList.remove("deactivate");
        secondary.classList.add("card__secondary");
        err_message.classList.add("deactivate");
        input.classList.remove("err")
        addUser =  `${valor_input}`;
        user.innerHTML = addUser;
    }   

    else{
        primary.classList.remove("deactivate");
        secondary.classList.add("deactivate");
        err_message.classList.remove("deactivate");
        input.classList.add("err");
        
    }
})

button2.addEventListener("click",()=>{
    primary.classList.add("card__primary");
    primary.classList.remove("deactivate");
    secondary.classList.add("deactivate");
    secondary.classList.remove("card__secondary");
    input.classList.remove("err");
})