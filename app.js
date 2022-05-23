const KEYS = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

document.addEventListener('keydown', e => {
    const key = e.key;
    const keyIndex = KEYS.indexOf(key);
    if (keyIndex > -1) {playNote(keys[keyIndex])};
})

function playNote(key) {
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    audio.addEventListener('ended', () => {
        key.classList.remove('playing')
    });
}