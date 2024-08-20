/**
 * @author Bruno P. R.
 * Atividade 4 - Criar várias coisas que funcionam e não dão errado nunca quero morrer
 * 
 */


class Carro {
    constructor(ano,cor){
        this.ano = ano
        this.cor = cor
    }
    criarCarro(){
        console.log("Carro criado!")
        console.log(`Ano de fabricacao: ${this.ano}`)
        console.log(`Cor do seu carango: ${this.cor}`)
    }
    ligar(){
        console.log("Vrum vrum vrum, voce sente um ronco do motor!")
    }
    desligar(){
        console.log("Seu carro vai ficar com raiva! Ele quer andar mais!")
        console.log("Voce sente o carro parando e nenhum barulho do motor")

    
    }
    acelerar(){
        console.log("VRUMMMMMMMMM VRUMMMMMMMM VRUMMMMMMMM seu carango ta super veloz na pista!")
    }

}

class Aviao extends Carro {
    constructor(ano, cor, envergadura){
        super(ano, cor)
        this.envergadura = envergadura
    }
    criarAviao(){
        console.log("Aviao criado!")
        console.log(`Ano de fabricacao: ${this.ano}`)
        console.log(`Cor do seu aviao: ${this.cor}`)
        console.log(`Envergadura do seu aviao: ${this.envergadura}`)
    }
    aterrizar(){
        console.log("Seu aviao esta se preparando para pousar bem bom!")

    }
    acelerar(){
        console.log("Seu aviao esta ficando mais veloz como a luz!")
    }
    desligar(){
        console.log("Seu aviao esta caindo naoooo, aterrizar primeiro seria melhor!!!")
    }
    ligar(){
        console.log("Vrum vrum vrum de aviao agora, ele esta se preprando para partir!")
    }
}
















console.clear()
console.log("Bem-vindo ao mundo carango!")

const carro1 = new Carro(1984, "branco")
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.desligar()
const carro2 = new Carro(1999, "amarelo")
carro2.criarCarro()

const aviao1 = new Aviao(2007, "amarelo", 11)
aviao1.criarAviao()
aviao1.ligar()
aviao1.acelerar()
aviao1.desligar()
