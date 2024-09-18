/**
 * @author Bruno P. R.
 * Atividade 4 - Criar várias coisas que funcionam e não dão errado nunca quero morrer
 * 
 */

const colors = require('colors');

class Carro {
    constructor(modelo, ano, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    criarCarro() {
        console.log("Carro criado!");
        console.log(`Modelo do seu carro: ${this.modelo}`);
        console.log(`Ano de fabricação: ${this.ano}`);
        console.log(`Cor do seu carango: ${this.cor}`);
    }

    ligar() {
        console.log("Vrum vrum vrum, você sente um ronco do motor!");
    }

    desligar() {
        console.log("Seu carro vai ficar com raiva! Ele quer andar mais!");
        console.log("Você sente o carro parando e nenhum barulho do motor");
    }

    acelerar() {
        console.log("VRUMMMMMMMMM VRUMMMMMMMM VRUMMMMMMMM seu carango tá super veloz na pista!");
    }
}

class Aviao extends Carro {
    constructor(modelo, ano, cor, envergadura) {
        super(modelo, ano, cor);
        this.envergadura = envergadura;
    }

    criarAviao() {
        console.log("Avião criado!");
        console.log(`Modelo do seu avião: ${this.modelo}`);
        console.log(`Ano de fabricação: ${this.ano}`);
        console.log(`Cor do seu avião: ${this.cor}`);
        console.log(`Envergadura do seu avião: ${this.envergadura}`);
    }

    aterrizar() {
        console.log("Seu avião está se preparando para pousar bem bom!");
    }

    acelerar() {
        console.log("Seu avião está ficando mais veloz como a luz!");
    }

    desligar() {
        console.log("Seu avião está caindo! Aterrizar primeiro seria melhor!!!");
    }

    ligar() {
        console.log("Vrum vrum vrum de avião agora, ele está se preparando para partir!");
    }
}

console.clear();
console.log("Bem-vindo ao mundo carango!".bold);

const carro1 = new Carro("ferrari", 1984, "vermelho".red);
console.log("--------------------");
carro1.criarCarro();
carro1.ligar();
carro1.acelerar();
carro1.desligar();

const carro2 = new Carro("fusca", 1999, "amarelo".yellow);
console.log("--------------------");
carro2.criarCarro();

const aviao1 = new Aviao("Boeing", 2007, "azul".blue, 11);
console.log("--------------------");
aviao1.criarAviao();
aviao1.ligar();
aviao1.acelerar();
aviao1.desligar();
