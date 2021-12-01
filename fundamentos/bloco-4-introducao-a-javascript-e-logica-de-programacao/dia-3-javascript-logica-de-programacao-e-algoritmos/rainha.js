// posição da rainha
let rainhaLinha = 6;
let rainhaColuna = 8;

//posição do peão
let peaoLinha = 6;
let peaoColuna = 1;

//status inicial do ataque
let canattack = false;


//verifica se a coluna e a linha da rainha é a mesma do peão
if(rainhaColuna === peaoColuna || rainhaLinha === peaoLinha){
    canattack = true;
}

//verifica se a rainha consegue atacar na diagonal superior direita
for(let i = 1; i < 8; i++){
    let posicaoRainhaLinha = rainhaLinha + i;
    let posicaoRainhaColuna = rainhaColuna + i;
    
    if( posicaoRainhaColuna > 8 || posicaoRainhaLinha > 8){
        break;
    }

    if(posicaoRainhaColuna === peaoColuna || posicaoRainhaLinha == peaoLinha){
        console.log(posicaoRainhaColuna, posicaoRainhaLinha);
        console.log(peaoColuna, peaoLinha);
        canattack = true;
    }

}

//verifica se a rainha consegue atacar na diagonal inferior direita
for(let i = 1; i < 8; i++){
    let posicaoRainhaLinha = rainhaLinha - i;
    let posicaoRainhaColuna = rainhaColuna + i;

    if( posicaoRainhaColuna > 8 || posicaoRainhaLinha < 1){
        break;
    }

    if(posicaoRainhaColuna === peaoColuna || posicaoRainhaLinha == peaoLinha){
        console.log(posicaoRainhaColuna, posicaoRainhaLinha);
        console.log(peaoColuna, peaoLinha);
        canattack = true;
    }

}

//verifica se a rainha consegue atacar na diagonal inferior esquerda
for(let i = 1; i < 8; i++){
    let posicaoRainhaLinha = rainhaLinha - i;
    let posicaoRainhaColuna = rainhaColuna -i;

    if(posicaoRainhaColuna > 1 || posicaoRainhaLinha < 1){
        break;
    }
    if(posicaoRainhaLinha === peaoLinha || posicaoRainhaColuna === peaoColuna){
        console.log(posicaoRainhaColuna, posicaoRainhaLinha);
        console.log(peaoColuna, peaoLinha);
        canattack = true;
    }

}

//verifica se a rainha consegue atacar na diagonal superior esquerda
for(let i = 0; i < 8; i++){
    let posicaoRainhaLinha = rainhaLinha + i;
    let posicaoRainhaColuna = rainhaColuna - i;

    if(posicaoRainhaLinha > 8 || posicaoRainhaColuna < 1){
        break;
    }

    if(posicaoRainhaLinha === peaoLinha || posicaoRainhaColuna === peaoColuna){
        console.log(posicaoRainhaColuna, posicaoRainhaLinha);
        console.log(peaoColuna, peaoLinha);
        canattack = true;
    }
}


console.log("Pode atacar?", canattack)