let stateList = ['PA','AM','SP','BA','MG','RJ','MT','PR','CE','AC','RM','TO','PE','PI','MR','PB','SE','ES','GO','RN','RR','SC','AL','AP','MA','MS','DF']

let stateUser = document.getElementById('estado-user');

function createState(){
    for(let i = 0; i < stateList.length; i++){
        const criaOption = document.createElement('option');
        criaOption.innerText = stateList[i]; 
        stateUser.appendChild(criaOption);
    }
}

window.onload = createState;

const valueDate = document.getElementById('data-inicio')
const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click',hmmFunc)

function hmmFunc(){
    let dataTamanho = valueDate.value
    let nanSla = Date.parse(dataTamanho)
    console.log(isNaN(nanSla))
    console.log(dataTamanho)
}
