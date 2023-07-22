


// INFERENCIA / formas de declarar variavel / escondido
// let x = 2;


//ANNOTATION / formas de declarar variavel /explicito
// let y: number = 2


//EXEMPLO 1
let z: number = 15;
z = 20
console.log(z)



// TIPOS DE DADOS
let nome: string = "Thiago";

let idade: number = 2;

const isAdmen: boolean = true;



// TIPO OBJETO
const user:{nome: string, idade: number} = {
    nome: "Thiago",
    idade: 25,
}



//TIPO ANY / nao usar, e quando nao sei o tipo
let a: any = 5
a = "Jessica"



//UNION TYPE
let id: string | number = "10"
id = 10


// TYPE ALIAS
type Anderson = number | string

const usuario: Anderson = 10


//FUNCAO

function sum(a:number,b:number) {  // em JS falta tipar
    return a + b;
}
console.log(sum(12,12));