let luskaGame = [10,21,33,45,46,58]
let numerosSorteados = [];
let pontos = 0;

for(let i = 0; i< 6; i++){
    let sorteio = Math.floor(Math.random() * 60) + 1;
    numerosSorteados[i] = sorteio;
    numerosSorteados.push[numerosSorteados[i]]

    if(numerosSorteados[i] === luskaGame[i]){
        pontos++;
    }
}

console.log("Os números do jogador são: "+ luskaGame)
console.log("os números sorteados são: "+ numerosSorteados)


if(pontos >= 5){
    console.log('O jogador Venceu!')
}else{
    console.log('O jogador não Venceu!')
}


