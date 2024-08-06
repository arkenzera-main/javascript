/**
 * @author Bruno P. R.
 * App para verificar a eligibilidade de uma pessoa perante ao direito de voto
 */

const input = require('readline-sync')
const colors = require('colors')

let idade

console.clear()
idade = Number(input.question("Qual a sua idade?"))
if (idade < 16){
    console.log("Você ainda não tem idade para votar!".bgRed)
} else if (idade === 16 || idade === 17 || idade > 70 ){
    console.log("Você pode votar se quiser!".blue)
} else if(idade >= 18 && idade <= 70) {
    console.log("Você deve votar!".yellow)
}