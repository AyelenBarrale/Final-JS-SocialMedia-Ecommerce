const carrito = [];

function agregarAlCarrito(id) {
    const cursoElegido = stockCursos.find(el => el.id == id );
    const modalAlert = $("#modalContenedorExistInCart")
    const closeAlert = $("#closeAlert")


    if (!carrito.includes(cursoElegido)) {
        carrito.push(cursoElegido)
        localStorage.setItem("cursos cargados" , JSON.stringify(carrito))
    } else {
        modalAlert.addClass("modal-active").animate({transition: "all"}, (1500)) 
        closeAlert.on("click" , () => {
            modalAlert.removeClass("modal-active")
        })
    }

    

    actualizarCarrito()

};


function eliminarCurso(id) {
    const cursoEliminar = carrito.find( el => el.id == id );
    const indice = carrito.indexOf(cursoEliminar);
    carrito.splice(indice, 1);

    if(carrito.length === 0){
        $("#modalContenedorCart").removeClass("modal-active")
    }

    localStorage.setItem("cursos cargados" , JSON.stringify(carrito))
    actualizarCarrito();
}




function actualizarCarrito() {
    let marcadorPrecioTotal = $("#precioTotal")
    let contadorCarrito = $("#contadorCarrito")

    $("#carrito-contenedor").text("");

    for ( const curso of carrito) {
        $("#carrito-contenedor").prepend(`
            <div class="cursoEnCarrito">
                <p>${curso.nombre}</p>
                <p class="precioitem">Precio: $${curso.precio}</p>
                <button onclick=eliminarCurso(${curso.id})  class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            </div>
        `)
    }

    let precioTotal = carrito.reduce( (acc, el) => acc += el.precio, 0 )
    marcadorPrecioTotal.text(precioTotal)
    contadorCarrito.text(carrito.length)

    localStorage.setItem("costo total" , precioTotal)

}




