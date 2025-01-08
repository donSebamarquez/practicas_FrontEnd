let totalAmount = document.getElementById("amount");
let customTip = document.getElementById("custom");
let numberOfPeople = document.getElementById("numberPeople");
let totalPerson = document.getElementById("totalPerson");
let totalTip = document.getElementById("tipPerson");

let amount = 0;
let people = 0;
let tip = 0;
let agregarTip = ``;
let agregarTotal = ``;

function calculate(){
    
    amount = parseInt(totalAmount.value)|| 0;
    people = parseInt(numberOfPeople.value)||tipbtn(valor);
    tip = parseInt(customTip.value)||0;

    amountPerPeople = amount / people;
    tipPerPeople = ((tip * amount) / 100) / people;
    create(amount,people,tip)
}
function create(tip,amount,tip){
    if(amount && people && tip){
        agregarTip =  `
            <p>$${tipPerPeople}</p>
        `;
        agregarTotal = `
        <p>$${amountPerPeople}</p>
        `;
        totalTip.innerHTML = agregarTip;
        totalPerson.innerHTML = agregarTotal;
    }
}

function tipbtn(valor){
    console.log(valor);
    return valor;
}
totalAmount.addEventListener("input",function(){
    calculate();
});
numberOfPeople.addEventListener("input",function(){
    calculate();
});
customTip.addEventListener("input",function(){
    calculate();
});

