/*alert("Helloooo");

let tentativas = 1;
let numeroSecreto;
let chute;
let jogarNovamente = 1;

console.log(numeroSecreto);


while( jogarNovamente == 1){
    
    chute = 0;
    tentativas = 1;
    numeroSecreto = parseInt(Math.random() * 101);

    while(numeroSecreto != chute){

        chute = prompt("Escolha um numero entre 1 e 100");

        if(numeroSecreto > chute ){
            alert("O numero sercreto é maior");
        }
        else if(numeroSecreto < chute){
            alert("O numero secreto é menor");
        }
        else{
            break;
        }

        tentativas++;
    }

    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Você acertou o numero secreto em ${tentativas} ${palavraTentativas}`);
    
    jogarNovamente = prompt("Digite 1 para jogar jogar novamente");
}

*/


let numeroSecreto;
let tentativas = 1;
let inputNumero;
let chute = null;
let texto = document.querySelector("#texto_titulo");
let texto_tentativas = document.querySelector("#texto_tentativas");
let input = document.getElementById('chute')
let img = document.getElementById("img");
console.log(numeroSecreto);
let dica;

//chama a função jogar assim que a pagijna inicia
document.addEventListener("DOMContentLoaded", jogar);

function jogar(){
    
    chute = null;
    numeroSecreto = parseInt(Math.random() * 101);
    console.log(numeroSecreto);
    texto_tentativas.textContent = '';
    tentativas = 1;
    dica = "Jogo da adivinhação!";
    input.value = '';
    escrever();
    img.src = "./img/1.png";
}

function escrever(){
    texto.textContent = `${dica}`;
}

function valida(){
    
    inputNumero = document.getElementById("chute");

    if (inputNumero.value == chute){
        dica = "Tente um número diferente";
        escrever();
    }
    else{
        chute = inputNumero.value;

        if(chute != ""){
            compara();
        }
        else{
            dica = "Escolha um número!";
            escrever();
        }
    }
}

function compara(){

    document.getElementById("texto_tentativas").style.display = "block";

    if(numeroSecreto > chute ){
        dica = `O número secreto é maior que ${chute}`;
        escrever();
        Srincrivel();
    }
    else if(numeroSecreto < chute){
        dica = `O número secreto é menor que ${chute}`;
        escrever();
        Srincrivel();
    }
    else{
        acertou();
    }

    texto_tentativas.textContent = `Tentativas n° ${tentativas}`;
    tentativas++;
}

function acertou(){
    document.getElementById("texto_tentativas").style.display = "none";
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    dica = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
    escrever();
    img.src = "./img/10.png";
}

function Srincrivel(){
    if(tentativas >= 3 && tentativas < 9){
        img.src = `./img/${tentativas - 1}.png`
    }
    else if (tentativas >= 9){
        img.src = `./img/9.png`
    }
}

