document.getElementById('mensaje').innerHTML = 'mi nombre es Damian';

var nombre,
    trabajo,
    escuela,
    nombre,
    

    nombre = 'damian';
    trabajo = 'chelero';
    escuela = 'la calle';
    nombre = 'jisus';

let juntas = (`${nombre} ${trabajo} ${escuela}`);
//en var si se puede nombrar a una variable con el mismo nombre, mientras que let no te lo permite y marca error



console.log(nombre);
console.log(trabajo);
console.log(escuela);
console.log(nombre);
//en 'nombre' imprime el segundo por la posición



//+++++STRINGS+++++++
// diferentes formas de concatenar cadenas +++ esta ya casi no se usa
console.log(nombre +' '+ trabajo );

// esta es la manera nueva de concatenar, son comillas inclinadas las que se necesitan (AltGr+})
console.log(`${nombre} ${escuela}`);

// length te da el numero de caracteres 
console.log(juntas.length);


//transforma a mayusculas
juntas = juntas.toUpperCase();

console.log(juntas);



// split va a dividir una cadena de texto
let actividad = 'estoy aprendiendo codigo javaScript con este curso';
nombre = actividad.split(' ');
console.log(nombre);
let intereses = 'caminar, jugar, correr, divertirse, beber, etc';
// hay que especificar que es lo que esta separando el texto para ejecutar el split, en este caso es la ","
interesesSplit = intereses.split(',');
console.log(interesesSplit);


// replace para cambiar algo del texto
let interReplace = intereses.replace('caminar', 'irme de pedo');
console.log(interReplace);

// include para verificar que exista dentro del texto
let correo = 'mail@correo.com';
comprobacion = correo.includes('@');
console.log(comprobacion);



// -------------NUMEROS--------------
var numero2 = 1;

var resultado = Math.round(2.5);

    resultado = Math.abs(numero2++);

    console.log(resultado);

    console.clear();

    resultado = new Date();
    console.log(new Date);

    let numeros = 23;
    console.log(numeros);

    numeros = String(numeros);

    console.log(numeros);

 

    // de String a numero
    dato = '0125487';
    console.log(dato);  //al imprimir aparece como String, no lo marca en azul como numero

    dato = Number(dato);
    console.log(dato); // ya lo marca como numero correctamente

    // de Numero a String

    dato = 1856; //ej de una fecha
    console.log(dato);
    
    dato = String(dato);
    console.log(dato);
    //++++++++ se puede usar String que es el mas general, al igual puedes usar parseInt ó parseFloat dependiendo el tipo de variable

    console.clear;

    // ++++++++++++++++ARRAYS+++++++++++++++++++

    const datos = ["nombre", "edad", "ciudad","pais","trabajo", "empresa"];
    console.log(datos);

    //otra manera de hacer arreglos pero casi no se usa
    const arreglo1 = new Array('nombre', 'edad', 'ciudad', 'pais');

    //seleccionas cual imprimir, recuerda que arrays empieza en 0, por lo tanto imprime pais
    console.log(datos[3]); 

    //los arrays pueden contener todo tipo de datos ** console.table li imprime como tabla
    const arreglo = ["nombre", 1850, true, "si", null, undefined];
    console.table(arreglo);
    // arreglo.length cuenta los datos que se registran en el array
    console.log(arreglo.length);

    //para agregar un nuevo dato al arreglo **casi no se usa**
    arreglo[6] = "trabajo";

    // la mejor forma de hacerlo +++++ agrega al FINAL del arreglo
    arreglo.push('diversion');
    console.log(arreglo);

    // agregar al principio del arreglo
    arreglo.unshift('gozadera');

    // elimina del final del arreglo
    arreglo.pop();

    // eliminar del principio del arreglo **** si se escribe 2 veces lo elimina doble, ya sea pop ó shift
    arreglo.shift();

    //borra un rango, digamos desde la posicion cero a la 5
    arreglo.splice(0, 5);

    //le da vuelta al orden
    arreglo.reverse();

    //ordena alfabeticamente
    arreglo.sort();

    console.clear();


    // ------------------------------OBJETOS-----------------------------------

    
    const persona = {
        nombre: 'Damian',
        apellido: 'ID',
        edad: 20,
        ciudad: 'CDMX',
        trabajo: 'lagozadera',
        bueno: true,
        
        favoritos: {
            musica: 'electro',
            chela: 'corona',
            fiesta: 'diario'
        },
        meses: ['ene','feb','mar']
    }

    //imprime la posicion que quieres
     console.log(persona);
        console.log(persona['nombre']);
     console.clear();
    // ***//se pueden meter objetos y arreglos dentro del mismo objeto


    //+++++++++Template Strings++++++++++++

    const nomb = 'Damian',
          job = 'chelero';

          console.log('Nombre: ' + nomb + ', Trabajo: ' + job);
          console.log(`Nombre: ${nomb}, Trabajo: ${job}`);
    //ambas imprimen lo mismo, es mas usada y mas clara la de abajo para no olvidar los signos de +


    // -------------FUNCIONES------------------------------------

    //Function declaration ------------- asi se le conoce a esta manera de declarar la funciómn
    function saludo() {
        console.log('Hola');
    }

    saludo(); //mandas a llamar la función para que se imprima


     //Function expression--------------   
    const suma = function(){
        console.log(2+2);
    }

    suma();


    



