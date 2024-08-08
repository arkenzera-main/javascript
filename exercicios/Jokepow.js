/**
 * Atividade JOKEPOW
 * @author Bruno - Edson - Diego
 */

const input = require('readline-sync')
const colors = require('colors')

console.clear()
console.log("------------------------------------------------------------------------------------------------------")
let pedra, papel, tesoura, computador, jogador, aleatorio
console.log("       ░▒▓█▓▒░░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ")
console.log("       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ")
console.log("       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ")
console.log("       ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ")
console.log("░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ")
console.log("░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ")
console.log(" ░▒▓██████▓▒░ ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓█▓▒░       ░▒▓██████▓▒░ ░▒▓█████████████▓▒░  ")
                                                                                                    
console.log("                                        Jogo da MORTE!".italic.bold)                                                                                            
console.log("1. Papel")
console.log("2. Pedra")
console.log("3. Tesoura")
jogador = Number(input.question("Escolha a sua jogada: "))
aleatorio = Math.floor(Math.random() * 10) + 1
console.clear()
computador = Math.floor(Math.random() * 3) + 1
if (computador === 1) {
    console.log("O computador jogou papel!")
    
} else if ( computador === 2 ) {
    console.log("O computador jogou pedra!")
    
} else if (computador === 3) {
    console.log("O computador jogou tesoura!")
}
switch (jogador) {
    case 1:
        console.log("Você escolheu papel!".blue)
        if (computador === 2) {
            console.log("Você venceu!".green)
            console.log("              Você venceu!".green)
            console.log("             ___________".yellow)
            console.log("            '._==_==_=_.'".yellow)
            console.log("            .-\\:      /-.".yellow)
            console.log("           | (|:.     |) |".yellow)
            console.log("            '-|:.     |-'".yellow)
            console.log("              \\::.    /".yellow)
            console.log("               '::. .'".yellow)
            console.log("                 ) (".yellow)
            console.log("               _.' '._".yellow)
            console.log("             ___________".yellow)
        } else if (computador === 1) {
            console.log("O jogo empatou!".yellow)
            
        } else if (computador === 3){
            console.log("Você perdeu!".red)
            console.log("              Você perdeu!".red)
            console.log("      NO!                          MNO!".red)
            console.log("     MNO!!         [NBK]          MNNOO!".red)
            console.log("   MMNO!                           MNNOO!!".red)
            console.log(" MNOONNOO!   MMMMMMMMMMPPPOII!   MNNO!!!!".red)
            console.log(" !O! NNO! MMMMMMMMMMMMMPPPOOOII!! NO!".red)
            console.log("       ! MMMMMMMMMMMMMPPPPOOOOIII! !".red)
            console.log("        MMMMMMMMMMMMPPPPPOOOOOOII!!".red)
            console.log("        MMMMMOOOOOOPPPPPPPPOOOOMII!".red)
            console.log("        MMMMM..    OPPMMP    .,OMI!".red)
            console.log("        MMMM::   o.,OPMP,.o   ::I!!".red)
            console.log("          NNM:::.,,OOPM!P,.::::!!".red)
            console.log("         MMNNNNNOOOOPMO!!IIPPO!!O!".red)
            console.log("         MMMMMNNNNOO:!!:!!IPPPPOO!".red)
            console.log("          MMMMMNNOOMMNNIIIPPPOO!!".red)
            console.log("             MMMONNMMNNNIIIOO!".red)
            console.log("           MN MOMMMNNNIIIIIO! OO".red)
            console.log("          MNO! IiiiiiiiiiiiI OOOO".red)
            console.log("     NNN.MNO!   O!!!!!!!!!O   OONO NO!".red)
            console.log("    MNNNNNO!    OOOOOOOOOOO    MMNNON!".red)
            console.log("      MNNNNO!    PPPPPPPPP    MMNON!".red)
            console.log("         OO!                   ON!".red)
        }
        break;
    case 2:
        console.log("           Você escolheu pedra!".blue)
        if (computador === 1) {
            console.log("              Você perdeu!".red)
            console.log("      NO!                          MNO!".red)
            console.log("     MNO!!         [NBK]          MNNOO!".red)
            console.log("   MMNO!                           MNNOO!!".red)
            console.log(" MNOONNOO!   MMMMMMMMMMPPPOII!   MNNO!!!!".red)
            console.log(" !O! NNO! MMMMMMMMMMMMMPPPOOOII!! NO!".red)
            console.log("       ! MMMMMMMMMMMMMPPPPOOOOIII! !".red)
            console.log("        MMMMMMMMMMMMPPPPPOOOOOOII!!".red)
            console.log("        MMMMMOOOOOOPPPPPPPPOOOOMII!".red)
            console.log("        MMMMM..    OPPMMP    .,OMI!".red)
            console.log("        MMMM::   o.,OPMP,.o   ::I!!".red)
            console.log("          NNM:::.,,OOPM!P,.::::!!".red)
            console.log("         MMNNNNNOOOOPMO!!IIPPO!!O!".red)
            console.log("         MMMMMNNNNOO:!!:!!IPPPPOO!".red)
            console.log("          MMMMMNNOOMMNNIIIPPPOO!!".red)
            console.log("             MMMONNMMNNNIIIOO!".red)
            console.log("           MN MOMMMNNNIIIIIO! OO".red)
            console.log("          MNO! IiiiiiiiiiiiI OOOO".red)
            console.log("     NNN.MNO!   O!!!!!!!!!O   OONO NO!".red)
            console.log("    MNNNNNO!    OOOOOOOOOOO    MMNNON!".red)
            console.log("      MNNNNO!    PPPPPPPPP    MMNON!".red)
            console.log("         OO!                   ON!".red)
        } else if (computador === 3){
            console.log("              Você venceu!".green)
            console.log("             ___________".yellow)
            console.log("            '._==_==_=_.'".yellow)
            console.log("            .-\\:      /-.".yellow)
            console.log("           | (|:.     |) |".yellow)
            console.log("            '-|:.     |-'".yellow)
            console.log("              \\::.    /".yellow)
            console.log("               '::. .'".yellow)
            console.log("                 ) (".yellow)
            console.log("               _.' '._".yellow)
            console.log("             ___________".yellow)
        } else if (computador === 2){
            console.log("O jogo empatou!".yellow)
        }
        break;
    case 3:
        console.log("Você escolheu tesoura!".blue)
        if (computador === 1){
            console.log("Você venceu!".green)
            console.log("              Você venceu!".green)
            console.log("             ___________".yellow)
            console.log("            '._==_==_=_.'".yellow)
            console.log("            .-\\:      /-.".yellow)
            console.log("           | (|:.     |) |".yellow)
            console.log("            '-|:.     |-'".yellow)
            console.log("              \\::.    /".yellow)
            console.log("               '::. .'".yellow)
            console.log("                 ) (".yellow)
            console.log("               _.' '._".yellow)
            console.log("             ___________".yellow)
        } else if (computador === 2){
            console.log("Você perdeu!".red)
            console.log("              Você perdeu!".red)
            console.log("      NO!                          MNO!".red)
            console.log("     MNO!!         [NBK]          MNNOO!".red)
            console.log("   MMNO!                           MNNOO!!".red)
            console.log(" MNOONNOO!   MMMMMMMMMMPPPOII!   MNNO!!!!".red)
            console.log(" !O! NNO! MMMMMMMMMMMMMPPPOOOII!! NO!".red)
            console.log("       ! MMMMMMMMMMMMMPPPPOOOOIII! !".red)
            console.log("        MMMMMMMMMMMMPPPPPOOOOOOII!!".red)
            console.log("        MMMMMOOOOOOPPPPPPPPOOOOMII!".red)
            console.log("        MMMMM..    OPPMMP    .,OMI!".red)
            console.log("        MMMM::   o.,OPMP,.o   ::I!!".red)
            console.log("          NNM:::.,,OOPM!P,.::::!!".red)
            console.log("         MMNNNNNOOOOPMO!!IIPPO!!O!".red)
            console.log("         MMMMMNNNNOO:!!:!!IPPPPOO!".red)
            console.log("          MMMMMNNOOMMNNIIIPPPOO!!".red)
            console.log("             MMMONNMMNNNIIIOO!".red)
            console.log("           MN MOMMMNNNIIIIIO! OO".red)
            console.log("          MNO! IiiiiiiiiiiiI OOOO".red)
            console.log("     NNN.MNO!   O!!!!!!!!!O   OONO NO!".red)
            console.log("    MNNNNNO!    OOOOOOOOOOO    MMNNON!".red)
            console.log("      MNNNNO!    PPPPPPPPP    MMNON!".red)
            console.log("         OO!                   ON!".red)
        } else if (computador === 3){
            console.log("O jogo empatou!".yellow)
        }
        break;
    default:
        break;
}
if ( aleatorio === 7){
    console.log("                                  _______")
    console.log("                           _,,ad8888888888bba,_")
    console.log("                        ,ad88888I888888888888888ba,")
    console.log("                      ,88888888I88888888888888888888a,")
    console.log("                    ,d888888888I8888888888888888888888b,")
    console.log(`                  d88888PP"""" ""YY88888888888888888888b,`)
    console.log(`                 ,d88"'__,,--------,,,,.;ZZZY8888888888888,`)
    console.log(`                ,8IIl'"                ;;l"ZZZIII8888888888,`)
    console.log(`               ,I88l;'                  ;lZZZZZ888III8888888,`)
    console.log(`             ,II88Zl;.                  ;llZZZZZ888888I888888,`)
    console.log(`            ,II888Zl;.                .;;;;;lllZZZ888888I8888b`)
    console.log(`           ,II8888Z;;                 ´;;;;;''llZZ8888888I8888,`)
    console.log(`           II88888Z;'                        .;lZZZ8888888I888b`)
    console.log(`           II88888Z; _,aaa,      .,aaaaa,__.l;llZZZ88888888I888`)
    console.log(`           II88888IZZZZZZZZZ,  .ZZZZZZZZZZZZZZ;llZZ88888888I888,`)
    console.log(`           II88888IZZ<'(@@>Z|  |ZZZ<'(@@>ZZZZ;;llZZ888888888I88I`)
    console.log(`          ,II88888;   '""" ;|  |ZZ; '"""     ;;llZ8888888888I888`)
    console.log(`          II888888l            ´;;          .;llZZ8888888888I888,`)
    console.log(`         ,II888888Z;           ;;;        .;;llZZZ8888888888I888I`)
    console.log(`         III888888Zl;    ..,   ´;;       ,;;lllZZZ88888888888I888`)
    console.log(`         II88888888Z;;...;(_    _)      ,;;;llZZZZ88888888888I888,`)
    console.log(`         II88888888Zl;;;;;' ´--'Z;.   .,;;;;llZZZZ88888888888I888b`)
    console.log(`         ]I888888888Z;;;;'   ";llllll;..;;;lllZZZZ88888888888I8888,`)
    console.log(`         II888888888Zl.;;"Y88bd888P";;,..;lllZZZZZ88888888888I8888I`)
    console.log(`         II8888888888Zl;.; ´"PPP";;;,..;lllZZZZZZZ88888888888I88888`)
    console.log(`         II888888888888Zl;;. ´;;;l;;;;lllZZZZZZZZW88888888888I88888`)
    console.log(`         ´II8888888888888Zl;.    ,;;lllZZZZZZZZWMZ88888888888I88888`)
    console.log(`          II8888888888888888ZbaalllZZZZZZZZZWWMZZZ8888888888I888888,`)
    console.log(`          ´II88888888888888888b"WWZZZZZWWWMMZZZZZZI888888888I888888b`)
    console.log(`           ´II88888888888888888;ZZMMMMMMZZZZZZZZllI888888888I8888888`)
    console.log(`            ´II8888888888888888 ´;lZZZZZZZZZZZlllll888888888I8888888,`)
    console.log(`             II8888888888888888, ´;lllZZZZllllll;;.Y88888888I8888888b,`)




}