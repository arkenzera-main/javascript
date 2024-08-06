/**
 * @author Bruno P. R.
 * Ficha do Aluno - Cálculo do IMC
 */

const input = require('readline-sync')
const colors = require('colors')

console.clear()

let altura, peso, idade, imc, nome

console.log(".----------------.  .----------------.  .----------------.")
console.log("| .--------------. || .--------------. || .--------------. |")
console.log("| |     _____    | || | ____    ____ | || |     ______   | |")
console.log("| |    |_   _|   | || ||_   \\  /   _|| || |   .' ___  |  | |")
console.log("| |      | |     | || |  |   \\/   |  | || |  / .'   \\_|  | | ")
console.log("| |      | |     | || |  | |\\  /| |  | || |  | |         | |")
console.log("| |     _| |_    | || | _| |_\\/_| |_ | || |  \\ `.___.'\\  | |")
console.log("| |    |_____|   | || ||_____||_____|| || |   `._____.'  | |")
console.log("| |              | || |              | || |              | |")
console.log("| '--------------' || '--------------' || '--------------' |")
console.log(" '----------------'  '----------------'  '----------------' ")
console.log("")

nome = input.question("Qual o seu nome? ")
peso = Number(input.question("Qual o seu peso em kilogramas? ").replace(",", "."))
altura = Number(input.question("Qual a sua altura em cm? "))
idade = Number(input.question("Qual a sua idade? "))
imc = peso / ((altura / 100) * (altura / 100))
console.log("")
console.log("")
console.clear()
console.log("----------------------------------------------------")
console.log("Ficha do Aluno".bgMagenta)
console.log("Nome: " + nome)
console.log("Seu IMC é de: " + imc.toFixed(2))
console.log("Sua idade: " + idade + " anos")
console.log("Sua altura: " + altura + "cm")
console.log("Seu peso: " + peso + "kg")
if (imc < 18.5) {
    console.log("Classificação: Magreza - Obesidade grau 0".white)
} else if (imc < 25) {
    console.log("Classificação: Normal - Obesidade grau 0")
} else if (imc < 30) {
    console.log("Classificação: Sobrepeso - Obesidade grau 1".yellow)
} else if (imc < 40) {
    console.log("Classificação: Obesidade - Obesidade grau 2".red)
} else {
    console.log("Classificação: Obesidade Grave - Obesidade grau 3".bgRed)
} 
console.log("----------------------------------------------------")