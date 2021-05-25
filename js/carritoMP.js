const abrirCheckOut = $("#btn-compra-final")
const modalCart = $("#modalContenedorCart")

abrirCheckOut.on("click" , () => {
    modalCart.removeClass("modal-active")

    const carritoMP = carrito.map( el => ({
        title: el.nombre,
        description: "",
        picture_url: "",
        category_id: el.id,
        quantity: 1,
        currency_id: "ARS",
        unit_price: el.precio
    }))

    fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
            Authorization: "Bearer TEST-5115609599888341-052514-754e79df65b48e91d3f50eabf3969512-20223102"
        },
        body: JSON.stringify({
            items: carritoMP
        })
    }).then(resp => resp.json())
    .then(data => {
        console.log(data)
        window.open(data.init_point , "_blank")
    }) 

    
}) 





