/**
 * @author Bruno P. R.
 * Tabuada les go guys
 */



const input = require('readline-sync')
const colors = require('colors')

let valor 
console.clear()
console.log("Tabuada dos bacanos - só pra quem já fez kumon")
valor = Number(input.question("Digite o valor da tabuada meu bro: "))
console.log("")
console.log("")
for (let i=1; i<21; i++){
    console.log(`${valor} x ${i} = ${valor * i}`)
}