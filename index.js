var wsound = new Audio('./sounds/crash.mp3').play();
var asound = new Audio('./sounds/kick-bass.mp3').play();
var ssound = new Audio('./sounds/snare.mp3').play();
var dsound = new Audio('./sounds/tom-1.mp3').play();
var jsound = new Audio('./sounds/tom-2.mp3').play();
var ksound = new Audio('./sounds/tom-3.mp3').play();
var lsound = new Audio('./sounds/tom-4.mp3').play();

document.addEventListener("keydown", function (keyboard) {
    playSound(keyboard.key.toLowerCase());
    playAnimation(keyboard.key.toLowerCase());
   setTimeout(() => {
    stopAnimation(keyboard.key.toLowerCase());
   }, 175);
});
function playSound(key) {
    switch (key) {
        case 'w':
            wsound.play();
            break;
        case 'a':
            asound.play();
            break;
        case 's':
            ssound.play();
            break;
        case 'd':
            dsound.play();
            break;
        case 'j':
            jsound.play();
            break;
        case 'k':
            ksound.play();
            break;
        case 'l':
            lsound.play()
            break;
    }
}
function playAnimation(currentKey) {
    document.querySelector(`.${currentKey}`).classList.add('pressed');
}
function stopAnimation(currentKey) {
    document.querySelector(`.${currentKey}`).classList.remove('pressed');
}
