import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()

export function exercicio3(){
    console.log("Funcao Exercicio 3 - FOR")
    for( let contador:number = 1; contador <= 50; contador += 2){
        console.log(contador)
    }

}