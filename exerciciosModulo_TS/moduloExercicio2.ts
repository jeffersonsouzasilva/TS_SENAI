import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()

export function exercicio2(){
    console.log("Funcao Exercicio 2 - FOR")
    for(let contador:number = 2; contador <= 10; contador +=2){
        console.log(contador)
    }
}