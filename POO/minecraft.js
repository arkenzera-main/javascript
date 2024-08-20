/**
 * @author Bruno P. R.
 * POO - Fundamentos da programação orientada a objetos
 * Conceitos de abstração, herança e polimorfismo
 */


class Bloco {
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }
    //métodos
    criarBloco() {
        console.log("---------------------------------")
        console.log("┍━┑")
        console.log("┕━┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)


    }
    construir() {
        console.log(`Bloco de ${this.textura} colocado!`)

    }
    minerar() {
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }


}

class Enxada extends Bloco {
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)
        this.conquista = conquista
    }
    //metodos
    criarEnxada() {
        console.log("---------------------------------")
        console.log("-")
        console.log("/")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }
    arar() {
        console.log("._._._._. Terra arada!")
        if (this.conquista === true) {
            console.log("***Conquista Obtida!***")
        }

    }
    //polimorfismo - Sobreescrite de um método existente
    minerar() {
        console.log("XxX dano atribuido!")
    }

}

//criação de mundo
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | | ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")
console.log("")

//criando um objeto - bloco de terra
const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()

//criando um objeto - bloco de madeira
const bloco2 = new Bloco(2, "madeira")
bloco2.criarBloco
bloco2.construir()

//criando um objeto - bloco de pedra
const bloco3 = new Bloco(3, "pedra")
bloco3.criarBloco
bloco3.minerar()

//criando uma enxada de madeira 
const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()

//criando uma enxada de ferro
const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()

//criando outra enxada de diamante (testar o polimorfismo)
const enxada3 = new Enxada(10, "diamente", false)
enxada3.criarEnxada()
enxada3.minerar()

