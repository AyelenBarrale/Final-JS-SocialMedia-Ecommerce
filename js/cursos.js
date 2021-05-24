mostrarCursos(stockCursos)

function mostrarCursos (array) {
    $(".curso").remove();
    
    for (const curso of array) {
        $("#cursos-contenedor").prepend(`
            <div class="curso">
                <img src="${curso.img} " alt="">
                <div class="curso-body">
                    <h3>${curso.nombre} </h3>
                    <p>${curso.desc} </p>
                    <p>Área: ${curso.tipo} </p>
                    <p class="precio-curso">Precio: $${curso.precio} </p>
                    <div class="btn-contenedor-comprar">
                        <button onclick="agregarAlCarrito(${curso.id} )" class="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
        `);
    }; 
};


$("select#curso-tipologia").change(() => {
    const value = $("select#curso-tipologia").val();

    if ( value === "all") {
        mostrarCursos(stockCursos);
    } else {
        const arrayFiltrado = stockCursos.filter(curso => curso.tipo === value);
    
        mostrarCursos(arrayFiltrado);
    }
    
})