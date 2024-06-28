/**
 * @author Bruno P. R.
 * Exercício para conversão de real para euro 
 */
const input = require('readline-sync')

console.clear()

let taxaconversao, valorreal, valoremeuro
taxaconversao = Number(input.question("Quanto Reais valem um Euro no dia de hoje?"))
valorreal = Number(input.question("Qual o total de Reais que serão conertidos?"))
valoremeuro = valorreal / taxaconversao
console.log(`${valorreal} Reais em Euros são ${valoremeuro.toFixed(2)} Euros`)