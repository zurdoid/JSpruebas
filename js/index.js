
// datos de ingreso INDEX
var usuario = document.getElementById ('user');
var contraseña = document.querySelector ('#password');

// boton INDEX

var ingreso = document.getElementById ('btn-ingreso');





//intento de validar administración
var identificador = document.getElementById ('id');
var direccion = document.getElementById ('direccion');
var colonia = document.getElementById ('colonia');
var municipio = document.getElementById ('municipio');
var estado = document.getElementById ('estado');
var palabraClave = document.getElementById ('palabra-clave');

var buscar = document.getElementById('btn-buscar');



var enviar = document.getElementById('enviar-admin');

var venta = document.getElementById('opciones');


var ventasG = 0;
var ventasP = 0;

enviar.addEventListener ('click' , enviarVentas);

function enviarVentas(event) {
    if(venta.value === '2'){
        console.log('suma para gayol');
        ventasG++;
        console.log(ventasG);
    }
    if(venta.value === '3'){
        console.log('suma para providencia');
        console.log(ventasP);
    }

}