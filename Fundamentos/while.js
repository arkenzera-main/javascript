/**
 * @author Bruno P. R.
 * Estudo das estruturas while e do-while :3
 */

const input = require('readline-sync')


let x = 1
let y = 1







while ( x < 11){
    console.log(`Teste da estrutura while!`)
    x++
}




input.question("Pressione a tecla [ENTER] para continuar")

do {
    console.log("Teste da estrutura while") 
    y++
 } while (y < 11)