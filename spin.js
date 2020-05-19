const spinBlock = document.querySelector('.spin-block');
const spin = document.querySelector('.spin');
const spinStop = document.querySelector('.spin-stop');
const disableBtn = document.querySelectorAll('.dis');
const amountOfRotation = document.querySelector('.feature-block-list');
const countdownNumbValue = document.querySelector('.countdown-numb-value');
const countdown = document.querySelector('.countdown');
const autoButton = document.querySelector('.auto-button');
const stopActive = document.querySelector('.stop-active');
const autoSpinBlock = document.querySelector('.auto-spin-block');

function deactivate() {
    spin.classList.toggle('stop-game');
    spinStop.classList.toggle('stop-game');
    disableBtn.forEach(item => item.classList.toggle('disable-btn'));
} 

spinBlock.addEventListener('click', deactivate);

amountOfRotation.addEventListener('click', ({ target: { dataset } }) => {
    countdown.classList.remove('stop-game');
    autoButton.classList.add('stop-game');
    deactivate();
    let timerId = setInterval(() => {
        countdownNumbValue.innerHTML = dataset.value--;
        spinBlock.classList.toggle('spin-block-dis');
        stopActive.classList.toggle('stop-btn-inactive');
        autoSpinBlock.classList.add('disable-hover');
        if(dataset.value <= -1) {
            clearInterval(timerId);
            countdown.classList.add('stop-game');
            autoButton.classList.remove('stop-game');
            spinBlock.classList.remove('spin-block-dis');
            autoSpinBlock.classList.remove('disable-hover');
            deactivate()
        };
    }, 1500);
    
    countdown.addEventListener('click', () => {
        countdown.classList.add('stop-game');
        autoButton.classList.remove('stop-game');
        deactivate();
        disableBtn.forEach(item => item.classList.remove('disable-btn'));
        spinBlock.classList.remove('spin-block-dis');
        clearInterval(timerId);
        autoSpinBlock.classList.remove('disable-hover');
    }) 
  });

 
