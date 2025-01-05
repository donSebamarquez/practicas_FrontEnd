let button = document.getElementById("suscribirse");
let button2 = document.getElementById("return")
let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
let primary = document.getElementById("primary");
let secondary = document.getElementById("secondary");
let err_message = document.getElementById("err_msg");
let user = document.getElementById("userEmail");
const form = document.getElementById('form');


function handleSubmit(e) {
  e.preventDefault()
}

form.addEventListener('submit', handleSubmit);

button.addEventListener("click",()=>{
    let valor_input = document.getElementById("input").value
    let addUser = ``
    if(validEmail.test(valor_input)){

        primary.classList.add("deactivate");
        secondary.classList.remove("deactivate");
        err_message.classList.add("deactivate");
        addUser =  `${valor_input}`;
        user.innerHTML = addUser;
    }   

    else{
        primary.classList.remove("deactivate");
        secondary.classList.add("deactivate")
        err_message.classList.remove("deactivate");
    }
    valor_input = "";
    addUser = ``;
})

button2.addEventListener("click",()=>{
    primary.classList.remove("deactivate");
    secondary.classList.add("deactivate");
})