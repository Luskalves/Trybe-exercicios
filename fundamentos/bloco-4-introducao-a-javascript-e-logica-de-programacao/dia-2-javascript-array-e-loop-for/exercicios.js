let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let i = 0; i < numbers.length; i++){
    soma += numbers[i];
}
let media = soma / 10;
console.log("a media é de: " + media);

if(media > 20){
    console.log("O valor é maior que 20");
}else{
    console.log("O valor é menor que 20");
}