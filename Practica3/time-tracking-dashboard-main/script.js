let values = [];
let mostrarValores = document.getElementById("planillaSeleccionada")
let valoresSeleccionados = ``;

let valorTraido = fetch("https://raw.githubusercontent.com/sebamarques/practicas_FrontEnd/refs/heads/main/Practica3/time-tracking-dashboard-main/data.json")
.then(response => response.json())
.then(data => {
    values = data
    seleccion('day');
});



function seleccion(fecha){
    valoresSeleccionados = '';

    values.forEach(value => {
      valoresSeleccionados += `
        <div class="card__values ${value.id}">
          <div class="row">
            <div class="column">
              <p class="value__title">${value.title}</p>
              <p class="value__current">${value.timeframes[fecha].current}hrs</p>
            </div>
            <p class="value__previous">Last ${fecha} - ${value.timeframes[fecha].previous}hrs</p>
          </div>
        </div>
      `;
    });
  
    mostrarValores.innerHTML = valoresSeleccionados;
}