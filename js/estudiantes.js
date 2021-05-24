class Estudiante{

    constructor(nombre, apellido, profesion){ 
        this.nombre = nombre.toLowerCase()
        this.apellido = apellido.toLowerCase()
        this.profesion = profesion.toLowerCase()
    }

    miProfesion(){
        console.log(`Soy ${this.profesion}`);
    };

};


/* Local Storage */
let estudiantesLista = JSON.parse(localStorage.getItem("Estudiantes"))


if (!estudiantesLista) {
    estudiantesLista = []
}

let getAll = () => {
    return estudiantesLista
};

let create = (nuevoEstudiante) => {
    estudiantesLista.push(nuevoEstudiante);
};



/* Registro */

let topeEstudiantes = 10;
let formAsesoria = $("#formEstudiante");

const inputNombre = $("#inputName");
const inputApellido = $("#inputLastName");
const inputProfesion = $("#inputProfesion");
const mensaje = $("#resultado");


formAsesoria.submit(( event ) => {
    event.preventDefault()

    const nombre = inputNombre.val().trim();
    const apellido = inputApellido.val().trim();
    const profesion = inputProfesion.val().trim();

    if ((nombre !== "" && nombre.length > 2) && (apellido !== "" && apellido.length > 2) && (profesion !== "" && profesion.length > 5)) {
        
        if (topeEstudiantes <= 0 ) {
            mensaje.text(`Disculpas ${nombre}, ya no quedan más lugares en esta edición.`);
        } else {
            let nuevoEstudiante = new Estudiante(nombre, apellido, profesion);
            create(nuevoEstudiante);

            console.log(getAll());

            topeEstudiantes--;

            mensaje.text(`¡Felicitaciones ${nombre}! Tu registro fue exitoso. Quedan ${topeEstudiantes} lugares disponibles.`);
            localStorage.setItem("Estudiantes", JSON.stringify(estudiantesLista));
            }

    } else {
        
        estudiantesLista = estudiantesLista.filter(Boolean);
        mensaje.text(`Para registrarte debés llenar con datos reales todos los campos solicitados`);
    }

    inputName.value = "";
    inputLastName.value = "";
    inputProfesion.val("") 


});