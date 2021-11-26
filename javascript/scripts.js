const pessoaCandidata = "aprovada"

switch(pessoaCandidata){
    
    case "aprovada":
        console.log("Você foi aprovado(a)! :D");
        break
    case "lista":
        console.log("Você esta na lista!");
        break;
    case "reprovada":
        console.log("Você foi reprovada! :(");
        break;

    default:
        console.log("Não se aplica!");
}