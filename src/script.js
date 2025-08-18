const audio = document.getElementById('audio');
const playbutton = document.getElementById('playbutton');
const pausebutton = document.getElementById('pausebutton');
const songtitlediv = document.querySelector('.songtitlediv');
const volumeinput = document.getElementById('volumeinput');

audio.volume = volumeinput.value;
playbutton.style.transition = 'opacity 0.7s ease';
pausebutton.style.transition = 'opacity 0.7s ease';
songtitlediv.style.transition = 'opacity 0.7s ease';

songtitlediv.style.opacity = '0';
pausebutton.style.opacity = '0';
pausebutton.style.pointerEvents = 'none';

playbutton.addEventListener('click', () => {
    audio.play();
    songtitlediv.style.opacity = '1';
    playbutton.style.opacity = '0';
    playbutton.style.pointerEvents = 'none';
    pausebutton.style.opacity = '1';
    pausebutton.style.pointerEvents = 'auto';
});

pausebutton.addEventListener('click', () => {
    audio.pause();
    songtitlediv.style.opacity = '0';
    pausebutton.style.opacity = '0';
    pausebutton.style.pointerEvents = 'none';
    playbutton.style.opacity = '1';
    playbutton.style.pointerEvents = 'auto';
});

audio.addEventListener('play', (event) => {
    playbutton.style.opacity = '0';
    playbutton.style.pointerEvents = 'none';
    pausebutton.style.opacity = '1';
    pausebutton.style.pointerEvents = 'auto';
});

audio.addEventListener('pause', (event) => {
    pausebutton.style.opacity = '0';
    pausebutton.style.pointerEvents = 'none';
    playbutton.style.opacity = '1';
    playbutton.style.pointerEvents = 'auto';
});

audio.addEventListener('ended', (event) => {
    pausebutton.style.opacity = '0';
    pausebutton.style.pointerEvents = 'none';
    playbutton.style.opacity = '1';
    playbutton.style.pointerEvents = 'auto';
});

function changevolume(amount) {
    audio.volume = amount;
};

// local time display
function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    const options = {
        timeZone: 'Europe/Paris', // CET
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const formattedTime = now.toLocaleTimeString('en-GB', options);
    timeDisplay.textContent = `My local time is: ${formattedTime} CET`;
}

setInterval(updateTime, 10000);
updateTime();
