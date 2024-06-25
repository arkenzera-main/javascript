/**
 * @author Bruno P. R.
 * Cálculo da média entre dois números
 */


const colors = require('colors')
const input = require('readline-sync')
console.clear()
console.log("Cálculo da Média entre suas duas notas!")
let nota1, nota2, media
nota1 = Number(input.question("Qual sua primeira nota?"))
nota2 = Number(input.question("Qual sua segunda nota?"))
media = (nota1 + nota2) / 2;
console.log(media) 