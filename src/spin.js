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

function spinMove() {
  amountOfRotation.addEventListener('click', ({ target: { dataset } }) => {
    countdown.classList.remove('stop-game');
    autoButton.classList.add('stop-game');
    countdownNumbValue.innerHTML = dataset.count;
    spin.classList.add('stop-game');
    spinStop.classList.remove('stop-game');
    disableBtn.forEach(item => item.classList.add('disable-btn-clone'));
    spinBlock.classList.add('disable-btn-spin');
    let timerId = setInterval(() => {
      countdownNumbValue.innerHTML--;
        spinBlock.classList.toggle('spin-block-dis');
        stopActive.classList.toggle('stop-btn-inactive');
        autoSpinBlock.classList.add('disable-hover');
        if(countdownNumbValue.innerHTML <= 0) {
            clearInterval(timerId);
            countdown.classList.add('stop-game');
            autoButton.classList.remove('stop-game');
            spinBlock.classList.remove('spin-block-dis');
            autoSpinBlock.classList.remove('disable-hover');
            stopActive.classList.remove('stop-btn-inactive');
            spin.classList.remove('stop-game');
            spinStop.classList.add('stop-game');
            spinBlock.classList.remove('disable-btn-spin');
            disableBtn.forEach(item => item.classList.remove('disable-btn-clone'));
        };
    }, 1500);
    
    countdown.addEventListener('click', () => {
        countdown.classList.add('stop-game');
        autoButton.classList.remove('stop-game');
        spin.classList.remove('stop-game');
        spinStop.classList.add('stop-game');
        spinBlock.classList.remove('disable-btn-spin');
        spinBlock.classList.remove('spin-block-dis');
        clearInterval(timerId);
        autoSpinBlock.classList.remove('disable-hover');
        stopActive.classList.remove('stop-btn-inactive');
        disableBtn.forEach(item => item.classList.remove('disable-btn-clone'));
    }) 
  });

spinBlock.addEventListener('click', () => {
    spin.classList.toggle('stop-game');
    spinStop.classList.toggle('stop-game');
    disableBtn.forEach(item => item.classList.toggle('disable-btn-clone'));
    autoSpinBlock.classList.toggle('disable-hover');
});
};

export { spinMove };



 
