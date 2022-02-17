const url = 'https://api.coincap.io/v2/assets'
function append(moedas) {

  const listaMoedas = moedas.map((moeda) => {
    const preco = Math.round(moeda.priceUsd);
    return {id: moeda.id, symbol: moeda.symbol, priceUsd: preco }
  })

  listaMoedas.forEach((moeda) => {
    const lista = document.getElementById('listagem');
    const divMoeda = document.createElement('div');
    const linha = document.createElement('li');

    divMoeda.innerHTML = `
    Nome moeda: ${moeda.id} |
    Simbolo Moeda: ${moeda.symbol} |
    Preço Moeda: ${moeda.priceUsd}`;
    linha.appendChild(divMoeda);
    lista.appendChild(linha)

  })
}

const geraMoedas = () => {

  fetch(url)
    .then((Response) => Response.json())
    .then((data) => append(data.data))
}

window.onload = geraMoedas;