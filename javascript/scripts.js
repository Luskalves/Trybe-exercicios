const valorProduto = 10;
const valorVenda = 15;

let imposto = valorProduto * 0.2;
let lucro = 0;

for(let i = 1; i <= 1000; i++){
    let vendas = valorVenda - (valorProduto + imposto);
    lucro = lucro + vendas;
    if (lucro < 0 || valorProduto < 0 || imposto < 0){
        console.log("ERROR!!! - Os valores inseridos são inválidos!");
        break
    }
}

console.log(lucro);