/**
 * @author Bruno P. R.
 * Exercício dia 27/06/24 
 * Calcular valor total com desconto de um produto 
 */
const input = require('readline-sync')


console.clear()
let x, valortotal, valordesconto
valortotal = Number(input.question("Valor total do produto?"))
x = (Number(input.question("Porcentagem de desconto aplicada?")) * valortotal) /100
valordesconto = valortotal - x
console.log(`O desconto será de ${x}%, aplicando em ${valortotal}, tem-se então que o valor com desconto é de ${valordesconto}`)
