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

const numero1,
      numero2,
      numero3,
      numero4,
      numero5;

