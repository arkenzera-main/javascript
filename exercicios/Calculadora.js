/**
 * @author Bruno P. R.
 * Calculadora gamer
 * 
 */

const input = require('readline-sync')

let bi1,bi2,bi3,bi4,mediafinal
console.clear()
bi1 = Number(input.question("Insira sua nota do primeiro bimestre:"))
bi2 = Number(input.question("Insira sua nota do segundo bimestre:"))
bi3 = Number(input.question("Insira sua nota do terceiro bimestre:"))
bi4 = Number(input.question("Insira sua nota do quarto bimestre:"))
mediafinal = (bi1+bi2+bi3+bi4)/4
console.log(`O resultado final da sua média é ${mediafinal}`)