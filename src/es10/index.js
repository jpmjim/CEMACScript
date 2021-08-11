//ES10 -- implementación en Arrays
let array = [1,2,3, [1,2,3, [1,2,3]]];

//metodo flat --- nos permite devolver una matriz con cualquier submatriz aplanada. podemos ver por niveles
console.log(array.flat(2)); //lvl2 -- valor de la profundidad trabajar con el metodo flat

//flat map --- permite mapear cada elemento despues pasarle una funcion y aplanarlo segun el resultado.
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//trim.Start --- permite eliminar los espacios en blanco de un string
let hello = '                      hello world';
console.log(hello);//sin
console.log(hello.trimStart());//con

//trim.End --- eliminar espacio al final del texto
let hello = 'hello world                  ';
console.log(hello);//sin
console.log(hello.trimEnd());//con

//Optional catch biding --- que podemos pasar de forma opcional el parametro de error al valor de catch.
try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//fromEntries --- el cual transforma la clave valor en un objeto, array to object, muy importante al trabajar con arreglos o de objetos a arreglos.
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//Objeto Simbolo (symbol object) --- el cual no spermite acceder a una descripsion.
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);

