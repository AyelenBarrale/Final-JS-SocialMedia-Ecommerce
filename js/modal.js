const botonAbrir = $("#boton-carrito")
const botonCerrar = $("#carritoCerrar")
const modalContenedorCart = $("#modalContenedorCart")
const modalCarrito = $(".modal-carrito")

botonAbrir.click( () => {
    $("#modalContenedorCart").toggleClass("modal-active")
})

botonCerrar.click( () => {
    $("#modalContenedorCart").toggleClass("modal-active")
})

modalContenedorCart.click( () => {
    $("#modalContenedorCart").toggleClass("modal-active")
})

modalCarrito.click( (event) => {
    event.stopPropagation()
})