let values = [];
let mostrarValores = document.getElementById("planillaSeleccionada")
let valoresSeleccionados = ``;

let valoresTraidos = fetch("http://192.168.1.11:5500/Practica3/time-tracking-dashboard-main/data.json")
.then(response => response.json())
.then(data => {
    values = data
    seleccion('daily');
});



function seleccion(value){
   if(value === 'daily'){
        values.map(value=>{
            valoresSeleccionados += `
                <div class= "card__values">
                    <div class="row">
                        <div class="column">
                            <h3 class="value__title">${value.title}</h3>
                            <p class="value__current">${value.timeframes.daily.current}</p>
                        </div>
                        <p class="value__previous">Last week - ${value.timeframes.daily.previous}</p>
                    
                    </div>
                    
                </div>
            `
        })
        mostrarValores.innerHTML = valoresSeleccionados;
        valoresSeleccionados = ``;
   }
   if(value === 'weekly'){
        values.map(value=>{
            valoresSeleccionados += `
                <div class="card__values">
                    <div class="row">
                        <div class="column">
                            <h3 class="value__title">${value.title}</h3>
                            <p class="value__current">${value.timeframes.weekly.current}</p>
                        </div>
                        <p class="value__previous">Last week - ${value.timeframes.weekly.previous}</p>
                    </div>
                </div>
            `
        })
        mostrarValores.innerHTML = valoresSeleccionados;
        valoresSeleccionados = ``;
   }
   if(value === 'monthly'){
        values.map(value=>{
            valoresSeleccionados += `
                <div class="card__values">
                    <div class="row">
                        <div class="column">
                            <h3 class="value__title">${value.title}</h3>
                            <p class="value__current">${value.timeframes.monthly.current}</p>
                        </div>
                        <p class="value__previous">Last week - ${value.timeframes.monthly.previous}</p>
                    </div>
                </div>
            `
        })
        mostrarValores.innerHTML = valoresSeleccionados;
        valoresSeleccionados = ``;
    }
}