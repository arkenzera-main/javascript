/**
 * @author Bruno P. R.
 * Exemplo da estrutura switch case
 */

const input = require('readline-sync')
const color = require('colors')


let opcao
console.clear()
console.log("---------------------------------------------")
console.log("Exemplo da estrutura de controle switch case")
console.log("Escolha o sistema operacional que será usado")
console.log("Windows = 1")
console.log("Linux = 2")
console.log("MACOS = 3")
opcao = Number(input.question("Digite o sistema operacional a ser iniciado: "))
switch (opcao) {
    case 1:
        console.clear()
        console.log("Você escolheu o sistema operacional Windows")
        break;
    case 2:
        console.clear()
        console.log("Você escolheu o sistema operacional Linux")
        break
    case 3:
        console.clear()
        console.log("Você escolheu o sistema operacional MAC-OS")
        break

    default:
        break;
}
