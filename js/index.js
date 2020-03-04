(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded' , function(){


// datos de ingreso INDEX
var usuario = document.getElementById ('user');
var contraseña = document.querySelector ('#password');

// boton INDEX
var ingreso = document.getElementById ('btn-ingreso');
//---------- INDEX----------------

//intento de validar administración
var identificador = document.getElementById ('id');
var direccion = document.getElementById ('direccion');
var colonia = document.getElementById ('colonia');
var municipio = document.getElementById ('municipio');
var estado = document.getElementById ('estado');
var palabraClave = document.getElementById ('palabra-clave');
//botones
var buscar = document.getElementById('btn-buscar');
var enviar = document.getElementById('enviar-admin');
//extras
var venta = document.getElementById('opciones');
var venta2 = document.getElementById('opciones2');
var venta3 = document.getElementById('opciones3');
var ventasG = 0;
var ventasP = 0;
var comentario = document.getElementById('comment');
// -------------ADMIN----------------


//variables de Ventas para imprimir de administración
var gayol = document.getElementById('vGayol');
var provi = document.getElementById('vProvi');




enviar.addEventListener ('click' , enviarVentas);
function enviarVentas() {
    
    if(venta.value === '2' || venta2.value === '2' || venta3.value === '2'){
        console.log('suma para gayol');
        ventasG++;
        comentario.innerHTML = 'Ventas Gayol ' + ventasG; 

    }
    if(venta.value === '3' || venta2.value === '3' || venta3.value === '3'){
        console.log('suma para providencia');
        ventasP++;
        comentario.innerHTML = 'Ventas Providencia ' + ventasP;

    }     
}
    

}); //DOM CONTENT LOADED
})();

