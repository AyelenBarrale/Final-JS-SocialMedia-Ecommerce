const abrirSaludo = $("#btn-compra-final")
const cerrarSaludo = $("#checkoutCerrar")

const modalSaludo = $(".modal-saludo")

abrirSaludo.click(() => {
    $("#modalContenedorCart").removeClass("modal-active")
    $("#modalContenedorHi").toggleClass("modal-active")
})

cerrarSaludo.click(() => {
    $("#modalContenedorHi").toggleClass("modal-active")

    if (carrito.length != 0) {
        carrito.length = 0
        $("#contadorCarrito").text(carrito.length)
    }
    console.log(carrito)
})

modalSaludo.click((event) => {
    event.stopPropagation()
})