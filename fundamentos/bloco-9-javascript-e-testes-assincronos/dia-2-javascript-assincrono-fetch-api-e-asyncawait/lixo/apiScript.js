// apiScript.js
const API_URL = 'https://api.coincap.io/v2/assets';

const fetchJoke = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();

// meu 