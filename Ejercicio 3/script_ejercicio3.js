//Dado un array de números enteros positivos desordenados, devolver otro 
// array con los números ordenados.
function ordenar(arr) {
  const nuevoArray = [...arr];
  for (let i = 0; i < nuevoArray.length; i++) {
    for (let j = 0; j < nuevoArray.length - i - 1; j++) {
      if (nuevoArray[j] > nuevoArray[j + 1]) {
        let temporal = nuevoArray[j];
        nuevoArray[j] = nuevoArray[j + 1];
        nuevoArray[j + 1] = temporal;
      }
    }
  }
  return nuevoArray;
}

console.log(ordenar([14, 23, 99, 874, 93, 12]));

//Crear una función que reciba un número entero positivo y devuelva true si dicho 
// número es par o false encaso contrario
function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(7));

//Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, 
// dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la
// falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber los días 
// que tardará una planta en alcanzar cierta alturaDeseada. Crear una función que 
// reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números
//enteros positivos y devuelva el número de días que tardará la planta en medir la 
// alturaDeseada.

function calcularDiasCrecimiento(velocidadCrecimiento,velocidadDecrecimiento, alturaDeseada) {
  let altura = 0;
  let dias = 0;
  while (altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;
    if(altura >= alturaDeseada){ return dias}
    altura -= velocidadDecrecimiento;
  }
  return dias;
}

console.log(calcularDiasCrecimiento(10,1,20));