// 1. Crea un programa que imprima en consola los números impares del 1 al 50.

let num = 50;

for (let i = 0; i <= num; i++) {
  if (i % 2 != 0) {
    console.log(`Los numeros impares son : ${[i]}`);
  }
}
