const soundDiv = document.querySelectorAll('.sound-div');

function sound() {
    var audio = new Audio(); 
    audio.src = 'assets/audio/Button_Click.wav'; 
    audio.autoplay = true;
}

soundDiv.forEach(item => item.addEventListener('click', sound));