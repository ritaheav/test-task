import './style.css';
import { spinMove } from './spin.js';

const soundDiv = document.querySelectorAll('.sound-div');
const turbo = document.querySelector('.turbo');
const turboButton = document.querySelector('.turbo-button');
const totalCount = document.querySelector('.total-count');
const buttonMinus = document.querySelector('.button-minus');
const buttonPlus = document.querySelector('.button-plus');
const coinCount = document.querySelector('.coin-count');

function sound() {
    let audio = new Audio(); 
    audio.src = 'audio/Button_Click.wav'; 
    audio.autoplay = true;
};

soundDiv.forEach(item => item.addEventListener('click', sound));

turboButton.addEventListener('click', () => {
    turbo.classList.toggle('inactive');
    turboButton.classList.toggle('turbo-button-off');
});


let coin = [0.01, 0.02, 0.03, 0.05, 0.08, 0.10, 0.20, 0.30, 0.50, 0.80, 1, 2, 3, 5, 8, 10, 20];
let i = 5;
let count;
coinCount.innerHTML = coin[5];

document.addEventListener('click', (e) => {
    let count = 1.50;
    if(e.target.id === "button-plus") {
        if(i !== coin.length - 1) {
            i += 1;
            coinCount.innerHTML = coin[i];
        } 
        if (i === coin.length - 1) {
            buttonPlus.classList.add('disable-btn');
        }
        buttonMinus.classList.remove('disable-btn');
    }
    if(e.target.id === "button-minus") {
        if (i !== 0) {
            i -= 1; 
            coinCount.innerHTML = coin[i];
        }
        if (i === 0) { 
            buttonMinus.classList.add('disable-btn');
        }
        buttonPlus.classList.remove('disable-btn');
    };
    count = coin[i] * 15;
    totalCount.innerHTML = "$" + count.toFixed(2);
});

spinMove();
