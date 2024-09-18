/**
 * @author Bruno P. R.
 * Exercício de fixação dos conceitos de POO
 */

const colors = require('colors')
const input = require('readline-sync')
class Conta {
    //atributos encapsulados
    constructor(numero, titular, saldo){
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
    }
    //métodos
    getNumero(){
        return this._numero
    }
    getTitular(){
        return this._titular
    }
    getSaldo(){
        return this._saldo
    }
    exibirSaldo(){
        console.log(`${this.getTitular()}, seu saldo é de: R$${this.getSaldo().toFixed(2)} reais`)
    }
    depositar(valor){
        this._saldo += valor
        console.log(`Crédito de R$${valor.toFixed(2)}`.green)
    }    
    sacar(valor){
        if (this._saldo - valor < 0){
            console.log("Saldo insuficiente!")
        } else if(this._saldo - valor === 0) {
            this._saldo -= valor
            console.log(`Saque de R$${valor.toFixed(2)}`.red)
        } else {
            this._saldo -= valor
            console.log(`Saque de R$${valor.toFixed(2)}`.red)
        }
    
    }
    pix(valor, destino){
        if (valor > this._saldo){
            console.log(`Pix de R$${valor.toFixed(2)} nao realizado, saldo insuficiente`)
        } else {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`Pix de R$${valor.toFixed(2)} adicionado na conta de ${destino.getTitular()} com sucesso`.bold)
        }
        
        console.log(`O valor de: R$${valor} sera adicionado na conta destino!`)
        
    }
    
}
class ContaPoupanca extends Conta {
    constructor(numero, titular, saldo){
        super(numero, titular, saldo)
    }
    exibirSaldoPoupanca(){
        console.log(`O saldo da conta poupanca de ${this.getTitular} é R$${this.getSaldo().toFixed(2)}`)
    }
}






console.clear()

                                                                                                                  
                                                                                                                  
console.log("BBBBBBBBBBBBBBBBB               AAA               NNNNNNNN        NNNNNNNN        CCCCCCCCCCCCC     OOOOOOOOO     ".yellow)
console.log("B::::::::::::::::B             A:::A              N:::::::N       N::::::N     CCC::::::::::::C   OO:::::::::OO   ".yellow)
console.log("B::::::BBBBBB:::::B           A:::::A             N::::::::N      N::::::N   CC:::::::::::::::C OO:::::::::::::OO ".yellow)
console.log("BB:::::B     B:::::B         A:::::::A            N:::::::::N     N::::::N  C:::::CCCCCCCC::::CO:::::::OOO:::::::O".yellow)
console.log("  B::::B     B:::::B        A:::::::::A           N::::::::::N    N::::::N C:::::C       CCCCCCO::::::O   O::::::O".red)
console.log("  B::::B     B:::::B       A:::::A:::::A          N:::::::::::N   N::::::NC:::::C              O:::::O     O:::::O".red)
console.log("  B::::BBBBBB:::::B       A:::::A A:::::A         N:::::::N::::N  N::::::NC:::::C              O:::::O     O:::::O".red)
console.log("  B:::::::::::::BB       A:::::A   A:::::A        N::::::N N::::N N::::::NC:::::C              O:::::O     O:::::O".red)
console.log("  B::::BBBBBB:::::B     A:::::A     A:::::A       N::::::N  N::::N:::::::NC:::::C              O:::::O     O:::::O".blue)
console.log("  B::::B     B:::::B   A:::::AAAAAAAAA:::::A      N::::::N   N:::::::::::NC:::::C              O:::::O     O:::::O".blue)
console.log("  B::::B     B:::::B  A:::::::::::::::::::::A     N::::::N    N::::::::::NC:::::C              O:::::O     O:::::O".blue)
console.log("  B::::B     B:::::B A:::::AAAAAAAAAAAAA:::::A    N::::::N     N:::::::::N C:::::C       CCCCCCO::::::O   O::::::O".blue)
console.log("BB:::::BBBBBB::::::BA:::::A             A:::::A   N::::::N      N::::::::N  C:::::CCCCCCCC::::CO:::::::OOO:::::::O".green)
console.log("B:::::::::::::::::BA:::::A               A:::::A  N::::::N       N:::::::N   CC:::::::::::::::C OO:::::::::::::OO ".green)
console.log("B::::::::::::::::BA:::::A                 A:::::A N::::::N        N::::::N     CCC::::::::::::C   OO:::::::::OO   ".green)
console.log("BBBBBBBBBBBBBBBBBAAAAAAA                   AAAAAAANNNNNNNN         NNNNNNN        CCCCCCCCCCCCC     OOOOOOOOO     ".green)
console.log("---------------------------------------------------------------------------------------------------------------------")
let cc1 = new Conta(1, "Robson Vaamonde", 1000)
console.log(`Cliente: ${cc1.getTitular()} | Conta: ${cc1.getNumero()}`.bold)
cc1.exibirSaldo()
console.log("")
let cc2 = new Conta(2, "Sirlene Sanches", 2000)
console.log(`Cliente: ${cc2.getTitular()} | Conta: ${cc2.getNumero()}`.bold)
cc2.exibirSaldo()
console.log("")
let cc3 = new Conta(3, "Leandro Ramos", 3000)
console.log(`Cliente: ${cc3.getTitular()} | Conta: ${cc3.getNumero()}`.bold)
cc3.exibirSaldo()
console.log("")
console.log("---------------------------------------------------------------------")
let cp1 = new ContaPoupanca(10, "Robson Vaamonde", 500)
console.log(`Cliente: ${cp1.getTitular()} | Conta: ${cp1.getNumero()}`.bold)
cp1.exibirSaldoPoupanca()

