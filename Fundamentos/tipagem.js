/**
 * @author Bruno P. R.
 * Estudo das variaveis - itpagem dinâmica
 */
console.clear()
console.log("-----Strings-----")
let nome = "Bruno Politi Romero"
console.log("↓ Tipo:",typeof(nome))
console.log(nome)
//concatenação ( unir texto com conteúdo de uma variável )
console.log("Professor: " + nome) // evite concatenar
console.log(`Professor: ${nome}`)
let peso = 70
let altura = 1.70
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) // toFixed arrendonda casas decimais
// Atenção gamer!
console.log("Booleanos")
let chave = true 
console.log(typeof(chave))
let lampada = false
console.log(typeof(lampada))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)
