/**
 * @author Bruno P. R.
 * Fazer a tabuada usando o while dessa vez xd
 */



const input = require('readline-sync')

console.log("Tabuada usando o while")


valor = Number(input.question("Digite o valor desejado da tabuada: "))
let x = 1
while (x < 11){
    console.log(`${valor} X ${x} = ${valor * x} `)
    x++
}