/**
 * @author Bruno P. R.
 * Calcular o volume de um aquário 
 */

const input = require('readline-sync')

let comprimento, altura, largura, volume

console.clear()
comprimento = Number(input.question("Digite o comprimento em cm: "))
largura = Number(input.question("Digite a largura em cm: "))
altura = Number(input.question("Digite a altura em cm: "))
volume = (altura*largura*comprimento) / 1000

console.log(`O volume total em cm cúbicos é de ${volume}`)