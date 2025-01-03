let boton = document.getElementById("share");
let share = document.getElementById("yqc1"); 
let active = document.getElementById("yqc2"); 

boton.addEventListener("click", function() {
    share.classList.toggle("deactivate"); 
    active.classList.toggle("deactivate");   
    boton.classList.toggle("active");
});
