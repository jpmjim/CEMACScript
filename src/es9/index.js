//Operador de Reposo--- nos permite extraer las propiedades de un objeto que aun no se a construido.
const obj = {
  name: 'jimmy',
  age: 30,
  country: 'PE'
};

let {country, ...all} = obj;
console.log(all);
//==============================================================

//Propiedades de Propagación --- vamos apoder unir 1 o 2 o 3 o cuantos elementos queramos de objetos a un nuevo objeto.
//Objeto 1
const obj = {
  name: 'jimmy',
  age: 30,
};

//Objeto 2
const obj1 = {
  ...obj, //esta es la forma de anidarlos
  country: 'PE'
}

console.log(obj1);
//==============================================================

//Promise.Finally --- saber cuando a terminad el llamado y poder ejecutar alguna funcion o logica de codigo.

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Hello World!'), 3000)
    : reject(new Error('Test Error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))//promesa finalizada
//=======================================================================

//Regex --- como podemos agrupar bloques de regex y poder acceder a cada uno de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;//regex de una fecha
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day); //acceder cada uno de los elementos del regex segun sea el caso