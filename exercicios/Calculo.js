/**
 * @author Bruno P. R.
 * @author Edson Santos
 * Calculadora super hiper mega gamer
 */
const input = require('readline-sync')
const colors = require('colors')

// Para calcular a porcentagem de alguma coisa, basta multiplicar os dois valors e depois dividir por 100.

let num1, num2, opcao
function somar(num1, num2) {
    return (num1 + num2)
}
function subtrair(num1, num2) {
    return (num1 - num2)
}
function multiplicar(num1, num2) {
    return (num1 * num2)
}
function divir(num1, num2) {
    return (num1 / num2)
}
function porcentagemde(num1, num2) {
    return (num1 * num2) / 100
}


num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
console.clear()
console.log("1 - Somar")
console.log("2 - Subtrair")
console.log("3 - Multiplicar")
console.log("4 - Dividir")
console.log("5 - Calcular porcentagem de: ")
opcao = Number(input.question("Digite a opcao desejada: "))
switch (opcao) {
    case 1:
        console.log(`A soma desses dois valors é: ${somar(num1, num2)}`)
        break;
    case 2:
        console.log(`A subtração desses dois valores e: ${subtrair(num1, num2)}`)
        break;
    case 3:
        console.log(`A multiplicacao desses dois valores e: ${multiplicar(num1, num2)} `)
        break;
    case 4:
        console.log(`A divisao desses dois valores e: ${divir(num1, num2)}`)
        break;
    case 5:
        console.log(`O valor de porcentagem do primeiro numero pelo segundo e: ${porcentagemde(num1, num2)}`)
        break;
}