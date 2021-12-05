function maiorIndex (array){
  let biggestArray;

  for(let i = 0; i < array.lenght; i++){

    if(array[i] > array[i + 1]){
      biggestArray = array[i];
    }
    
  }

  return biggestArray;
};


let lista = [1,3,2];

console.log(maiorIndex(lista))