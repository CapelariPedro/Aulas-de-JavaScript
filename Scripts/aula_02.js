/* Ex1 */
let nome =  'Pedro';
let idade = 27;

/* Ex2 */

let gosta_de_js = false;

/* Ex3 */

const nula = null;
let indefinida;

/* Ex4 */

let carro = {
    cor: "Azul",
    ano: 2015,
    modelo: 'Eco Sport'
};

/* Ex5 */

let frutasFavoritas = ["Laranja", "Banana", "Ameixa"];

/* Ex6 */

function saudacao(nome){
    console.log('Olá '+ nome +' Saudação');
}

saudacao('Pedro');


/* Ex7 */

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(10, 5))

/* Ex 8 */

function validarIdade(idade){
    if (idade >= 18){
        console.log("Pode Beber Alcoolicos");
    }else{
        if (idade <= 0){
            console.log("Idade Invalida");
        }else{
            console.log("Pode beber Coca-Cola");
        }
    }
    
}

validarIdade(12);

/* Ex 9 */

for(let i = 1; i <= 10; i++){
    console.log(i);
}

/* Ex 10 */

function cPf(celsius){
    return (celsius * 9 /5 ) + 32;
}

console.log("Fahrenheit: "+ cPf(0));


