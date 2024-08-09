/**
 * @author Bruno P. R.
 * Exemplo de encadeamento do laço for
 */

const input = require('readline-sync')


console.clear()
for(let i=1;i<11;i++){
    console.log("")
    console.log(`Tabuada do ${i}`)
    for(let z =1;z<11;z++){
        console.log(`${i} X ${z} = ${i*z}`)
    }

}