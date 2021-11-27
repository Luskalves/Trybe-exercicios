let a1 = 10; 
let a2 = 50;
let a3 = 120;

const valid = a1 + a2 + a3; 

if(a1 <= 0 || a2 <=0 || a3 <=0 ){

    console.log("ERROR!");

}
else{
    if (valid === 180){
        console.log("True");
    }else if(valid != 180){
        console.log("False");
    }
}
