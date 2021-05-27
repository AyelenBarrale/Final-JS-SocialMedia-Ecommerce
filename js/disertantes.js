let disertantes = [];
let botonDisertantes = $("#btnDisertantes");
let contenedorDisertantes = $("#nombreDisertantes");


function mostrarDisertantes(array) {
    contenedorDisertantes.text("");

    for (disertante of array) {
        contenedorDisertantes.append(`
            <ul>
                <li class="disertante">${disertante.nombre} | Temática: ${disertante.tema}.</li>
            </ul>
        `)
    }
}

const llamarApi = async () => {
    const resp = await fetch(`./disertantes.json`)
    const data = await resp.json() 

    disertantes = data
    mostrarDisertantes(disertantes)
}

let countClick = 0
function countClickAdd() {
    countClick += 1;
}


botonDisertantes.on("click" , () => {
    countClickAdd();
    
    if (countClick % 2 === 0){
        contenedorDisertantes.text("");
    } else {
        llamarApi()
    }
})