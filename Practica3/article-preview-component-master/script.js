let boton = document.getElementById("share");
let share = document.getElementById("yqc1"); 
let active = document.getElementById("yqc2"); 

boton.addEventListener("click", function() {
    
    if(window.screen.width<500){
        share.classList.toggle("deactivate"); 
        active.classList.toggle("deactivate");
    }
    if(window.screen.width>500){
        share.classList.toggle("deactivate");
        active.classList.toggle("deactivate");   
        
    }
    boton.classList.toggle("active");
});
