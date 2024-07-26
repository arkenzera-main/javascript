/**
 * Exercicio para calcular media usando if if else
 * @author Bruno P. R.
 */

const input = require("readline-sync")
const cores = require("colors")

console.clear()
console.log("Cálculo da Média entre suas duas notas!")
let nota1, nota2, media
nota1 = Number(input.question("Qual sua primeira nota? "))
nota2 = Number(input.question("Qual sua segunda nota? "))
media = (nota1 + nota2) / 2;
console.log(media) 
if (media >= 5) {
    console.log("Você foi aprovado!".brightCyan)
} else {
    console.log("Você foi reprovado".brightRed)
    
}