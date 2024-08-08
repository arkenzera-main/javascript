/**
 * @author Bruno P. R.
 * Lançamento de dados xd
 */

const input = require('readline-sync')
const colors = require('colors')

console.clear()
let face
console.log("----------------------------------")
console.log("Bem-vindo a porra do jogo do dado irmao, bora la")
// sorteiro da face de um dado , analise combinatoria be like 
face = Math.floor(Math.random() * 6) + 1
console.log(`Face do dado: ${face}`)
switch (face) {
    case 1:
        console.log("A face do dado sorteada foi ⚀ - 1")
        break;
    case 2:
        console.log("A face do dado sorteada foi ⚁ - 2")
        break;
    case 3:
        console.log("A face do dado sorteada foi ⚂ - 3")
        break;
    case 4:
        console.log("A face do dado sorteada foi ⚃ - 4")
        break;
    case 5:
        console.log("A face do dado sorteada foi ⚄ - 5")
        break;
    case 6:
        console.log("A face do dado sorteada foi ⚅ - 6")
        break;
    default:
        break;
}