/**
 * @author Bruno P. R.
 * Jogo do dado - exemplo de uso de uma funcao simples
 */

const input = require('readline-sync')
const colors = require('colors')

console.clear()
let face
let confirma = "n"



function jogardado() {
    console.log("----------------------------------")
    console.log("Bem-vindo a porra do jogo do dado irmao, bora la")
    // sorteiro da face de um dado , analise combinatoria be like 
    face = Math.floor(Math.random() * 6) + 1
    console.log(`Face do dado: ${face}`)
   

}
jogardado()

confirma = input.question("Quer jogar novamente? s/n")

if (confirma === "s"){
    jogardado()
}
