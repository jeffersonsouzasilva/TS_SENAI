// Instalação TypeScript -> npm i -g typescript
// Instalação de pacote para rodar no terminal -> npm i -g ts-node
// Para rodar no terminal-> npx ts-node arquivo.ts
// Instalação de Prompt-Sync ->npm i prompt-sync
// Rodar prompt-sync -> npm i --save-dev @types/prompt-sync


import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()


import { exercicio1 } from './moduloExercicio1'; // importando funcao exercicio1
import { exercicio2 } from './moduloExercicio2';
import { exercicio3 } from './moduloExercicio3';
import { exercicio4 } from './moduloExercicio4';
import { exercicio5 } from './moduloExercicio5';
import { exercicio6 } from './moduloExercicio6';
import { exercicio7,exercicio8,exercicio9 } from './moduloExercicioVariosWhile';


let resposta : string;

do {
    console.log("Bem vindo ao menu exercicios!")
    resposta  = prompt ("Digite um numero de 1 a 9, para escolha um exercicio, ou para sair para interromper o programa: ")

    switch (resposta) {
        case "1":
            // caso a resposta seja 1
            console.log("Voce escolheu o exercicio 1")
            exercicio1() //chamar exercicio 1

            break;
        
        case "2":
            
            console.log("Voce escolheu o exercicio 2")
            exercicio2()
            break;
    
        case "3":
            
            console.log("Voce escolheu o exercicio 3")
            exercicio3()
            break;
        
        case "4":
            
            console.log("Voce escolheu o exercicio 4")
            exercicio4()
            break;  

        case "5":
            
            console.log("Voce escolheu o exercicio 5")
            exercicio5()
            break;
        
        case "6":
           
            console.log("Voce escolheu o exercicio 6")
            exercicio6()
            break;  

        case "7":
            
            console.log("Voce escolheu o exercicio 7")
            exercicio7()
            break;
        
        case "8":
           
            console.log("Voce escolheu o exercicio 8")
            exercicio8()
            break; 

        case "9":
           
            console.log("Voce escolheu o exercicio 9")
            exercicio9()
            break; 
            
        default:
            console.log("Voce nao escolheu nenhum dos exercicios")
            break;
    }

} while (resposta != "sair");