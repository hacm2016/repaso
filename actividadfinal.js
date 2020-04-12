//actividad 01
class Formulario {
    constructor(titulo, usuario, clave, boton) {
        this.titulo = "<h2 >" + titulo + "</h2> ";
        this.usuario = "<input type='text'   tabindex='1' style='text-align: center;' placeholder='" + usuario + "' > ";
        this.clave = "<input type='text'   tabindex='2'  style='text-align:center' placeholder='" + clave + "' > <br> ";
        this.boton = "<input type='botton'   tabindex='3'  class='botton'  value=' " + boton + " ' >" + "</button>";
    }

    get formactividad() {
        return this.titulo + this.usuario + this.clave + this.boton;
    }

}

//actividad 02
let fr = new Formulario("Ingreso", "Usuario", "Clave", "Ingresar");
actividad2.innerHTML = fr.formactividad;
//document.body.innerHTML = "<div class='padre'>" + fr.formactividad + "</div><p id='parrafo' class='padre'></p><p id='parrafo2' class='padre'></p>";

//actividad 03

document.addEventListener('keydown', (event) => {
    var element = document.querySelector('p');

    // set variables for key down

    var a = 'ArrowDown';
    var elementselect = "<select name='select'> " +
        "<option value='value1' selected>Primer valor a seleccionar</option> " +
        "<option value='value2' >Segundo valor a seleccionar</option>" +
        "<option value='value3'>Tercer valor a seleccionar</option>" +
        "<option value='value4'>Cuarto valor a seleccionar</option>" +
        "</select>"

    switch (event.code) {
        case a:
            console.log("Elementos a seleccionar: ", elementselect);
            parrafo.innerHTML = elementselect;
            break;
        default:
            element.textContent = 'Presione la tecla flecha abajo  ';
            break;

    }
});
//actividad 04
function myTimer() {
    var btn = document.getElementById("btnenviar");
    var mensajeprint = document.getElementById('mensaje');
    btn.value = "Enviar";
    mensajeprint.innerHTML = "";
    btn.disabled = false;
}
    var btn = document.getElementById("btnenviar");
    var seleccionado = document.getElementById("optacciones");
    var mensajeprint = document.getElementById('mensaje');
    btn.addEventListener('click', (event) => {
        console.debug(seleccionado.value);
        if (seleccionado.value == '') {
            mensajeprint.innerHTML = "";
            alert("Seleccione una de las opciones de la lista");
        } else {
            mensajeprint.innerHTML = "Se ha enviado exitosamente";
            btn.disabled = true;
            btn.value = seleccionado.value;
            var myVar = setInterval(myTimer, 3000);
        

        }
    });



