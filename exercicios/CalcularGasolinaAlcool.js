/**
 * @author Bruno P. R.
 * Calcular se vale mais a pena usar gasolina ou alcool pra saber qual é mais brabo
 */

const input = require("readline-sync")
const colors = require("colors")
let precoalcool, precogasolina
console.clear()
precoalcool = Number(input.question("Qual o preço do álcool? "))
precogasolina = Number(input.question("Qual o preço da gasolina? "))
if (precoalcool/precogasolina < 0.7) {
    console.log("O álcool ta valando mais a pena!".green)
} else {
    console.log("A gasolina está mais em conta!".blue)
}