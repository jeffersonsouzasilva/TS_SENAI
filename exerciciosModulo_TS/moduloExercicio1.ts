import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()

export function exercicio1 (){
    console.log("Funcao Exercicio 1 - FOR")
    for( let contador:number = 1; contador <= 10; contador ++){
        console.log(contador)
    }
}