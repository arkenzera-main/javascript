/**
 * @author Bruno P. R.
 * Lançamento de dados xd usando uma funcao gamer sei la irmao to com sono - Exemplo de uso da estrutura
 * do-while
 */

const input = require('readline-sync')
const colors = require('colors')

console.clear()
let face
let confirma = "n"



do {
    console.log("----------------------------------")
    console.log("Bem-vindo a porra do jogo do dado irmao, bora la")
    // sorteiro da face de um dado , analise combinatoria be like 
    face = Math.floor(Math.random() * 6) + 1
    console.log(`Face do dado: ${face}`)
    confirma = input.question("Quer jogar novamente?")

} while (confirma === "s");
