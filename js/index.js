
// datos de ingreso
var usuario = document.getElementById ('user');
var contraseña = document.querySelector ('#password');

// boton

var ingreso = document.getElementById ('btn-ingreso');


ingreso.addEventListener('click', evaluarUsuario);

function evaluarUsuario(event){
    event.preventDefault();
    if(usuario.value === ''){
        alert('Usuario incorrecto');
        usuario.focus();
    }else if(contraseña.value === ''){
            alert('Contrseña incorrecta');
            contraseña.focus();
        }else{
            
            
        }

    }




