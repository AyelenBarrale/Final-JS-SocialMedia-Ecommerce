const botonAbrir = $("#boton-carrito")
const botonCerrar = $("#carritoCerrar")
const modalContenedorCart = $("#modalContenedorCart")
const modalCarrito = $(".modal-carrito")


botonAbrir.on("click" , () => {
    modalContenedorCart.toggleClass("modal-active")
})

botonCerrar.on("click" , () => {
    modalContenedorCart.toggleClass("modal-active")
})

modalContenedorCart.on("click" , () => {
    modalContenedorCart.toggleClass("modal-active")
})

modalCarrito.on("click" , (event) => {
    event.stopPropagation()
})