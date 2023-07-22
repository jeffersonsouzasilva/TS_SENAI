import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()



export function exercicio7(){
    console.log("Funcao Exercicio 7 - While")

    let n: number = 0
    let soma: number = 0

    while (n <= 100 && n >= 0 ){

        soma = soma + n
        console.log(soma)
        
        n ++
    }

}



export function exercicio8() {
    console.log("Funcao Exercicio 8 - While")


    let idade:number = parseInt(prompt("Digite a idade: "))

    while( idade < 18){
        idade = parseInt(prompt("Digite a idade: "))
    }
    console.log ("Voce atingiu a maior idade !")
}




export function exercicio9() {
    console.log("Funcao Exercicio 9 - While")

    let n:number = parseInt(prompt("Digite um numero: "))

    while (n >= 0){
        console.log(n)
        n -= 1
    
    }
}