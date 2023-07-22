import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()


export function exercicio5(){
    console.log("Funcao Exercicio 5 - FOR")

    let numeroAnterior: number = 0
    let numeroAtual: number = 1

    console.log(numeroAnterior)
    console.log(numeroAtual)

    for( let contador: number = 3; contador <= 10; contador ++){
        let numeroProximo: number = numeroAnterior + numeroAtual
        console.log(numeroProximo)

        numeroAnterior = numeroAtual
        numeroAtual = numeroProximo

    }
}