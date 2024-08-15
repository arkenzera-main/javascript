/**
 * @author Bruno P. R.
 * Estudo mega gamer sobre as funções mais uma vez
 */


// Funções atribuidas obrigatoriamente precisam ser criadas no início do código ( antes de serem executadas )

// função literal com parâmetros
function somar(num1, num2){
    return (console.log(num1+num2))
}
somar(1,222)

// função atribuida simplificada com parametros
let somarAtribuida = function (num1, num2){
    return (console.log(num1+num2))

}
somarAtribuida(4,9)

// função atribuida simplificada com arrow funciton e parametros
let somarAF = (num1,num2) => {
    return (console.log(num1+num2))
}
somarAF(13,17)

// função atribuida simplificada arrow function com parametros em uma linha de código
// O return fica implicito nesse caso, não precisando ser digitado lol lol xd 
let somarAFS = (num1, num2) => console.log(num1+num2)
somarAFS(3,3)