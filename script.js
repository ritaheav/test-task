const soundDiv = document.querySelectorAll('.sound-div');
const turbo = document.querySelector('.turbo');
const turboButton = document.querySelector('.turbo-button');
const totalCount = document.querySelector('.total-count');
const buttonMinus = document.querySelector('.button-minus');
const buttonPlus = document.querySelector('.button-plus');

function sound() {
    let audio = new Audio(); 
    audio.src = 'assets/audio/Button_Click.wav'; 
    audio.autoplay = true;
}

soundDiv.forEach(item => item.addEventListener('click', sound));

turboButton.addEventListener('click', () => {
    turbo.classList.toggle('inactive');
    turboButton.classList.toggle('turbo-button-off');
})

let count = 0;
document.addEventListener('click', (e) => {
    if(e.target.id === "button-minus") {
        count -= 1;
    };
    if(e.target.id === "button-plus") {
        count += 1;
    }
    totalCount.innerHTML = "$" + count;
})

  