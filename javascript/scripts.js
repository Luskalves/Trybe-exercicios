const currentHour = 22;

if (currentHour >= 22){
    console.log("Não deveríamos comer nada, é hora de dormir")
}

else if (22 > currentHour && currentHour >= 18){
    console.log("Rango da noite, vamos jantar :D");
}
else if (18 > currentHour && currentHour >= 14){
    console.log("Vamos fazer um bolo pro café da tarde?");
}
else if (14 > currentHour && currentHour >= 11){
    console.log("Hora do almoço!!!");
}
else if (11 > currentHour && currentHour >= 4){
    console.log("Hmmm, cheiro de café recém passado");
}
