//EMACScript 8 --- junio del 2017
//==================================
//Object.entris --- el cual nos permite devolver la clave y los valores de una matriz.
const data = {
  frontend: 'Jimmy',
  backend: 'Isabel',
  desing: 'Ana',
}

//como se transformar este obejto en matriz
const entries = Object.entries(data);
console.log(entries);
//con length nos permite saber cuantos elementos contiene el obejto sin convertir anteriormente
 console.log(entries.length);
 //==================================================================================

 //Object.values --- el cual devuelve los valores de un objeto a un arreglo.
 const data = {
  frontend: 'Jimmy',
  backend: 'Isabel',
  desing: 'Ana',// training coman como desarrollador.
}

//Transformacion (STRINGS)--- como volver un arreglo de strings con los valores en un arreglo
const values = Object.values(data);
console.log(values);
console.log(values.length);
//==================================================================================

//Padding --- anteponer o agregar una cadena vacia o elementos al string. nos sirve para la presentación de una estructura de elementos.
const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----')); //asignación de elementos
//==================================================================================

//Promesas --- Async Await
//Async nos sirve para marcar una función como asincrona y su valor de retorno es una promesa
//Await solo aplicable  a las funciones marcadas con async, pone en espera la ejecución de la función mientras la promesa se resuelve, abriendo  paso ala ejecución de otras funciones.
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

//Forma de ejecutar async y await correctamente
//forma adecuada de manejar errores dentro de funciones
const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotherFunction();
//=========================================================================
 