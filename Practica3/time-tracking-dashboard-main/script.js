let values = [];
let mostrarValores = document.getElementById("planillaSeleccionada")
let valoresSeleccionados = ``;

let valoresTraidos = fetch("https://raw.githubusercontent.com/sebamarques/practicas_FrontEnd/refs/heads/main/Practica3/time-tracking-dashboard-main/data.json")
.then(response => response.json())
.then(data => {
    values = data
    seleccion('day');
});



function seleccion(fecha){
   if(fecha === 'day'){
        values.map(value=>{
            valoresSeleccionados += `
                <div class= "card__values ${value.id}">
                    <div class="row">
                        <div class="column">
                            <p class="value__title">${value.title}</p>
                            <p class="value__current">${value.timeframes.day.current}hrs</p>
                        </div>
                        <p class="value__previous">Last ${fecha} - ${value.timeframes.day.previous}hrs</p>
                    
                    </div>
                    
                </div>
            `
        })
        mostrarValores.innerHTML = valoresSeleccionados;
        valoresSeleccionados = ``;
   }
   if(fecha === 'week'){
        values.map(value=>{
            valoresSeleccionados += `
                <div class="card__values ${value.id}">
                    <div class="row">
                        <div class="column">
                            <p class="value__title">${value.title}</p>
                            <p class="value__current">${value.timeframes.week.current}hrs</p>
                        </div>
                        <p class="value__previous">Last ${fecha} - ${value.timeframes.week.previous}hrs</p>
                    </div>
                </div>
            `
        })
        mostrarValores.innerHTML = valoresSeleccionados;
        valoresSeleccionados = ``;
   }
   if(fecha === 'month'){
        values.map(value=>{
            valoresSeleccionados += `
                <div class="card__values ${value.id}">
                    <div class="row">
                        <div class="column">
                            <p class="value__title">${value.title}</p>
                            <p class="value__current">${value.timeframes.month.current}hrs</p>
                        </div>
                        <p class="value__previous">Last ${fecha} - ${value.timeframes.month.previous}hrs</p>
                    </div>
                </div>
            `
        })
        mostrarValores.innerHTML = valoresSeleccionados;
        valoresSeleccionados = ``;
    }
}