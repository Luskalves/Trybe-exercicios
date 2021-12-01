function verificaPalindrome(palavra){
  
  let palavraReversa = palavra.split("").reverse().join("");

  if (palavraReversa === palavra){
    return true;
  }else{
    return false;
  }

}

let palindrome = 'arara';
let naoPalindrome = 'desenvolvimento'

console.log(verificaPalindrome(palindrome))
console.log(verificaPalindrome(naoPalindrome))
