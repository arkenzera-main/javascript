/**
 * @author Bruno P. R.
 * Calcular a quantidade de tijolos baianos 8 furos por metro quadrado
 */

const input = require('readline-sync')

console.clear()

let espaco_total, preco_por_tijolo, quantidade_total_de_tijolos_necessaria


espaco_total = Number(input.question("Qual o tamanho total do espaço que sera 'tijolado'"))
quantidade_total_de_tijolos_necessaria = espaco_total * 28
preco_por_tijolo = quantidade_total_de_tijolos_necessaria * 0.90
console.log(`A quantidade total de tijolos necessárias para o espaço de ${espaco_total} metros quadrados será de ${quantidade_total_de_tijolos_necessaria}`)
console.log(`O preço total para 'tijolar' esse espaço será de R$${preco_por_tijolo}`)