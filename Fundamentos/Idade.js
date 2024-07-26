/**
 * @author Bruno P. R.
 * Estudo das estruturas de controle if-else
 */

const input = require("readline-sync")

let idade

console.clear()
console.log("Estudo da estrutura if-else")
console.log("Validar maioridade penal")
idade = Number(input.question("Digite a sua idade:"))

//usando a estrutura if-else para validar a idade
if (idade < 18) {
    console.log("Eae novinha suave na navi?")
} else {
    console.log("Eae coroa suave gosta de um mucilon rsxd lol?")
}