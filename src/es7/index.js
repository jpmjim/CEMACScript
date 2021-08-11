//ES7 --- Nace en junio de 2016
//===============================
let numbers = [1,2,3,7,8];
if (numbers.includes(6)) { //usando el metodo includes para validacion, la disponibilidad del objeto, para saber si hay un valor dentro un string, o de un arreglo, disponiblidad mas amigable
  console.log('Si se encuentra el valor 7');
} else {
  console.log('No se encuentra.')
}

//como evelar a la potencia
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);