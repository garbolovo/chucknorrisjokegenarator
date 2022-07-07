//api url = http://api.icndb.com/jokes/random/

// DOM
//button
const buttonEl = document.querySelector('.button');
//form
const formEl = document.querySelector('.form');
//input
const inputEl = document.querySelector('#number');
//jokes
const jokesEl = document.querySelector('.jokes');

//list builder
const htmlListBuilder = (items, key, out, domElement) => {

    items.forEach(item => {
        out += `
        
        <li>${item[key]}</li>
        
        `
    })
    domElement.innerHTML = out
    return out
}

const generateJoke = () => {
    let output = '';
    const number = inputEl.value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let response = JSON.parse(this.responseText);
            const jokes = response.value
            // console.log(jokes)
            output = htmlListBuilder(jokes, 'joke', output, jokesEl)

        } else {
        }
    }
    xhr.send()
}


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    generateJoke()
});


