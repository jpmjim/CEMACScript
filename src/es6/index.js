// Default params y concatenacion
//====================================
// Una de las características añadidas a ecmascript6 son los parámetros por defecto
// Esto significa que podemos establecer ciertos valores que le pasamos a una función de una manera por defecto.
// Ejemplo;
// Antiguamente se utilizaba este metodo

// Antes de ES6
function newFunction(name, age, country) {
  var name = name  || 'jimmy';
  var age = age || 30;
  var country = country || 'PE';
  console.log(name, age, country);
}

//Hoy en dia se pueden asignar los valores dentro de los parámetros de esta manera.
//Y al llamar la función, esta por defecto si no le pasamos algún otro parámetro al llamarla nos dira el nombre, edad y país que le hemos indicado.

//ES6
function newFunction2(name = 'Jimmy', age = 30, country = "PE") {
  console.log(name, age, country);
};
newFunction2();
newFunction2('Ricardo', '23', 'CO');

//=============================================================================================

//Concatenación
//============================
//Otra de las novedades es la concatenación
//Antes para concatenar algo simple como un “Hello world”
//Debíamos hacer algo como lo que esta en nuestra “let” “epicPhrase”
//Llamar a nuestras variables y usar strigs para crear un espacio y los signos de mas.

// Antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Hoy en dia es mucho mas sencillo concatenar, porque podemos hacerlo de esta manera

//ES6
let epicPhrase2 = `${hello} ${world}`; //el uso de las plantillas literales (template literals)
console.log(epicPhrase2);
//==================================================================================

//LET y CONST, Multilínea, Spread Operator y Desestructuración
//==============================================================
//Antes de ES6 --- Multilineas en los strings esto funcionaba pero no es la mejor opcion
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase epica que necesitamos."

//ES6 mas facil para el salto de linea de multilinea
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica.
`;

console.log(lorem);
console.log(lorem2);
//==================================================================

//Antes del ES6 --- Desestructuracion de elementos 
//Creamos un objeto

let person = {
  'name': 'Oscar',
  'age': 32,
  'country': 'MX'
}; 
console.log(person.name, person.age);

//ES6 -- es ma facil destructurar elementos
let {name, age, country} = person;
console.log(name, age, country);
//====================================================================

//ES6 --- Spread Operator (operador de propagación) nos permite la expansion de varios elementos
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2]; //con "..." podemos traer elementos de un array para la creacion de una nueva(expansion).
console.log(education);
//====================================================================

//Antes ES6 --- originalmente se usaba var para asignacion de las variables
var hola = 'hola'; //esta disponible de forma global

//ES6 --- let solo esta disponible en el SCOPE, dentro del bloque donde va ser llamado
{
  var globalVar = "Global Var"; //si es accesible 
}

{
  let globalLet = 'Global Let'; //en globallet no podemos acceder esta dentro de otro scope se encuentra dentro de un bloque 
  console.log(globalLet); //para poder acceder hacer el console dentro del mismo bloque
}

console.log(globalVar);

//ES6 --- const definir una varible constante. no se puede reasignar, no cambia su valor.
const a = 'b';
//=======================================================================

//Arrow Functions, Promesas y Parámetros en objetos // simplificamos nuestro codigo lo hacemos amigable
//===================================================
//Parámetros en objetos --- Propiedad de objetos mejorada
let name = 'jimmy';
let age =  30;

//antes de ES6 (es5)
obj = {name: name, age: age}; //des esta forma se podia acceder alos elementos.
//ES6
obj2 = {name, age};
console.log(obj2);
//=================================================================================

//Arrow Functions --- Funciones tipo flecha, tiene una syntasis mas reducida y un this no vinculable.las arrow functions son funciones anonimas
const names = [
  {name: 'Joel', age: 30},
  {name: 'Oscar', age: 32}
]

//antes ES6 --- esta es una funcion anonima.
let listOfNames = names.map(function(item){
  console.log(item.name); 
})

//ES6 --- arrow function --- Forma #1
let listOfNames2 = names.map(item => console.log(item.name));

//pueden usar constantes (CONST)
const listOfNames3 = (name, age, country) => {
  //Forma #2
}
//solo si pasamos solo un elemento
const listOfNames4 = name => {
  //Forma #3
}
//cmas amigable
const square = num => num * num; //ya no tengo que generar un return, no tener bloques de llaves, lo asignamos directamente.
//==================================================================================

//Promesas --- que vamos a trabajar el asincronismo, donde js  no es sincronico que puede ejecutar muchos elementos al mismo tiempo, si no que ejecuta elementos x elementos. una promesa es algo que va a pasar en algun momento.

//estructura de la promesa
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!'); //resolvio la promesa
    } else {
      reject('Ups!!');
    }
  });
}

//ejecutar promesa
helloPromise()
  .then(response => console.log(response)) //then nos permite obtener esa respuesta (pueden ser varios)
  .then(() => console.log('hola'))
  .catch(error => console.log(error)); //catch nos permite obtener el error, el valor que no ha sido correcto 
//==============================================================================

//Clases, Módulos y Generadores
//================================================================================
//Clases las clases nos facilita la vida como programadores y en el caso particular de JS , nos permite trabajar orientada a objetos.
class calculator {
  constructor(){ //desifnamos las variables que van aestar disponibles en un scope global
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) { //utilizamos el metodo sum, para sumar nuestros valores
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 2));
//=====================================================================

//Módulos --- Import y export modulos dentro de ES6
//importamos de nuestro hilo principal
import {hello} from './module';
hello();
//=====================================================================

//Generadores --- una funcion especial que retorna una serie de valores segun el algotirmo definido con "*" (asterisco), muy importante cuando trabajemos con logicas o algoritmos.
function* helloWorld() {
  if (true) {
    yield 'Hello, ';//yield guarda este estado de forma interna, 1° elemento
  }
  if (true) {
    yield 'World';//2° elemento
  }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);//next para obtener el valor del sgt elemento,valor 1° elemento
console.log(generatorHello.next().value);// valor del 2° elemento

console.log(generatorHello.next().value);// el valor aun no esta definido.

