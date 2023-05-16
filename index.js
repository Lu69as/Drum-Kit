document.addEventListener("keydown", function (keyboard) 
{
    playSound(keyboard.key.toLowerCase());
    playAnimation(keyboard.key.toLowerCase());
   setTimeout(() => 
   {
    stopAnimation(keyboard.key.toLowerCase());
   }, 175);
});

function playSound(key) {
    switch (key) {
        case 'w':
            new Audio('./sounds/crash.mp3').play();
            break;
        case 'a':
            new Audio('./sounds/kick-bass.mp3').play();
            break;
        case 's':
            new Audio('./sounds/snare.mp3').play();
            break;
        case 'd':
            new Audio('./sounds/tom-1.mp3').play();
            break;
        case 'f':
            new Audio('./sounds/metal-pipe.mp3').play();
            break;
        case 'g':
            new Audio('./sounds/gun1.mp3').play();
            break;
        case 'h':
            new Audio('./sounds/gun2.mp3').play();
            break;
        case 'j':
            new Audio('./sounds/tom-2.mp3').play();
            break;
        case 'k':
            new Audio('./sounds/tom-3.mp3').play();
            break;
        case 'l':
            new Audio('./sounds/tom-4.mp3').play();
            break;
    }
}

function playAnimation(currentKey) 
{
    document.querySelector(`.${currentKey}`).classList.add('pressed');
}
function stopAnimation(currentKey) 
{
    document.querySelector(`.${currentKey}`).classList.remove('pressed');
}

function play(playbtn) 
{
    playSound(playbtn)
    playAnimation(playbtn)
    setTimeout(() => 
    {
        stopAnimation(playbtn);
       }, 175);
}