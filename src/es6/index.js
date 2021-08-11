// Default params y concatenacion
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