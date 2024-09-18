/**
 * @author Bruno P. R.
 * Tela de login les go porra
 * Encapsulamento
 */



class Usuairos {
    constructor(login,senha){
        this.login = login // this significa atributo público
        let _senha = senha //atributo privado (encapsulamento)
        //-------------------------------------------------------
        //método para obter a senha (get)
        this.getSenha = () => _senha
        //método para modificar a senha (set)
        this.setSenha = (novaSenha) => _senha = novaSenha
        //-------------------------------------------------------






    }

    logar() {
        console.log(`Usuario: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === "admin" && this.getSenha() === "123@senac"){
            console.log(`Usuario autenticado`)     
        }
        else {
            console.log("MORRA HACKER!")
        }
    }
}

console.clear()

const user1 = new Usuairos("admin","123456")
user1.logar()
user1.setSenha("123@senac") //setar a senha do usuário
user1.logar()


