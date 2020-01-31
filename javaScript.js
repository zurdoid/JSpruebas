/*document.getElementById('mensaje').innerHTML = 'mi nombre es Damian';

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

    // ---------- Object Literal -------------- +++es un poco mas estático, abajo viene un ejemplo del object constructor y es mas similar a la escritura de Java 
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
    // ***se pueden meter objetos y arreglos dentro del mismo objeto


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


    

    // ---------------- Object Constructor ------------- this (es como el tipo de formato, una nueva hoja que se crea pero respeta las caracteristicas que se especifican)
    //el nombre de la función comienza con MAYUSCULA
    function Tarea(nombre, urgencia){
        this.nombre = nombre;
        this.urgencia = urgencia;
    }

    //la tarea de color verde empieza con MAYUS igual que el nombre de la función
    const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');
    const tarea2 = new Tarea('Preparar Café', 'Urgente');
    const tarea3 = new Tarea('Jugar Ping Pong', 'Medio');
    const tarea4 = new Tarea('Hacer Dinero', 'URGENTE');

    console.log(tarea1);
    console.log(tarea2);
    console.log(tarea3);
    console.log(tarea4);



    //------------ FECHAS--------------

    const diaHoy = new Date();

    let valor = diaHoy;
//muestra el numero del mes. ENERO = 0
    valor = diaHoy.getMonth();

//muestra el dia. DOMINGO = 0
    valor = diaHoy.getDay();

//retorna el numero del dia del mes
    valor = diaHoy.getDate();
//año actual
    valor = diaHoy.getFullYear();
//minutos
    valor = diaHoy.getMinutes();
//horas
    valor = diaHoy.getHours();


    console.log(valor);



    //-------------------------CONDICIONALES-----------------------

    const puntaje = 1000;
//triple signo de igual verifica el valor y el tipo de dato, con solo 2 == solo verifica el valor
    if(puntaje === 1001){
        console.log('Si es igual');
    }else{
        console.log('No aplica');
    }


    const logueado = true;

    if(logueado){
        console.log('Si estas Logueado');
    }else{
        console.log('No iniciaste');
    }

    // menor < que ------- mayor > que ------ !== DIFERENTE -------- >= mayor o igual ---------menor o igual <=

    //ELSE IF ES UN "SINO"

    //operadores (|| == or) se usa para que se cumpla o una u otra condicion    (&& == and) se usan para que se cumplan dos condiciones 

    
    
    
    
    // switch

    const metodoPago = 'tarje';

    switch(metodoPago){
        case 'efectivo':
            console.log(`pagaste con ${metodoPago}`);
            break;
        case 'cheque':
            console.log(`pagaste con ${metodoPago}`);
            break;
        case 'tarjeta':
            console.log(`pagaste con ${metodoPago}`);
            break;
       default:
            console.log('metodo de pago no valido');
    }
    

    //------------------------loops-----------------------------


    for(let i=0; i<10; i++){
        console.log(`Numero: ${i}`);
    }
    

    //---------------ej2 de loop FOR------------------


    const carrito = ['chela', 'cigarros', 'basuru'];
        
    for(let i=0; i< carrito.length; i++){
        console.log(`Los productos que agregaste a tu carrito son: ${carrito[i]}`);
    }



    //while-----------------
//la condición es evaluada antes de ejecutar el código

let x = 0;

while(x<10){
    console.log(`Número ${x}`);
    x++;
}


//--------------DO WHILE
//ejecuta almenos una vez. digamos como nuestra variable es =11, no deberia funcionar por la condición, pero el while primero ejecuta y despues evalua
//por lo tanto imprime el valor


let i=11;
do{
    console.log(i);
    i++;
}while(i<10);



*/




/*
// -----------------------otros iteradores de Js

//ARREGLO
const pendientes = ['tarea', 'comer', 'fumar', 'beber', 'dormir'];
//ARREGLO CON OBJETOS
const carrito2 = [
    {id: 1, producto: 'libro'},
    {id: 2, producto: 'camisa'},
    {id: 3, producto: 'disco'}
];

//OBJETO
let automovil = {
    modelo: 2019,
    marca: 'chevrolet',
    color: 'rojo'
}

for(let q=0; q<pendientes.length; q++){
    console.log(pendientes[q]);
}

    //----------otra manera de escribir el ciclo FOR en JS
    //----------crea una variable automaticamente para poder imprimirs
    for(varCreada of pendientes){
        console.log(varCreada);
    }


    for(varCreada of carrito2){
        console.log(varCreada); //-------- imprime arreglo con obj dentro 
        console.log(varCreada.producto); //------- imprime los objetos directamente
    }



    for(varCreada1 of  Object.values(automovil)){ //para imprimir los valores de el objeto 
        console. log(varCreada1);
    }

    //-------------------FOR each------------------
    pendientes.forEach(function (loquesea) { // -- creas una variable y entra a todo el arreglo 
        console.log(loquesea);
    })

    
    //-------------------FOR each------------------
    pendientes.forEach(loquesea => { // -- LO mismo pero con arrow function
        console.log(loquesea);
    })

        //-------------------MAP------------------
        pendientes.map(loquesea => { // -- crea una copia de lo que esta recibiendo
            console.log(loquesea);
        })



//para usar for each y map pero con Objects

        Object.values(automovil).forEach(tarea =>{
           console.log(tarea);
        })
        
        //para usar for each y map pero con Objects y entrar a las LLAVES

        Object.keys(automovil).forEach(tarea2 =>{
            console.log(tarea2);
        })



        */



const cliente = {
    nombre: 'Alex',
    cuenta: 'Premium'
}

console.log(cliente);

//crear la variable

const nombreCliente = cliente.nombre;