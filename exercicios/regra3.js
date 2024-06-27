/**
 * @author Bruno P. R.
 * Regra de tres no JS
 */


const input = require('readline-sync')

console.clear()
console.log("Cálculo do valor da porcentagem:")
console.log("X% de Y = valor")

//declaração de variáveis

let x, y, valor



//input
x = Number(input.question("Insira o valor de x:"))
y = Number(input.question("Insira o valor de y:"))

//processamento
valor = (x*y)/100

//outpuy
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)

