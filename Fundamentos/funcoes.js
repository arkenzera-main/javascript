/**
 * @author Bruno P. R.
 * Estudo sobre as funções
 */

//funções simples são literais - tem nome
function hello(){
    console.log("Hello function!")
}
hello()
console.log(typeof(hello))

//função atribuida - função anônima
const hello2 = function(){
    console.log("Hello function atribuida")
}
hello2()

// função atribuida simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function!")
}
hello3()

// função atribuida simplificada (arrow function) em uma linha de código
const hello4 = _ => console.log("Hello arrow function in one line!")
hello4()