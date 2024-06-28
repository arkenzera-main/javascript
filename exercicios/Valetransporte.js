/**
 * @author Bruno P. R.
 * Calcular o valor do valetransporte
 */

const input = require('readline-sync')
console.clear()
let salariobruto, valetransporte,aliquota
salariobruto = Number(input.question("Qual o seu salario bruto?"))
aliquota = (6*salariobruto) /100
salarioliquido = salariobruto - aliquota
console.log(``)