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
function playw() 
{
    playSound('w')
    playAnimation('w')
    setTimeout(() => 
    {
        stopAnimation('w');
       }, 175);
}
function playa() 
{
    playSound('a')
    playAnimation('a')
    setTimeout(() => 
    {
        stopAnimation('a');
       }, 175);
}
function plays() 
{
    playSound('s')
    playAnimation('s')
    setTimeout(() => 
    {
        stopAnimation('s');
       }, 175);
}
function playd() 
{
    playSound('d')
    playAnimation('d')
    setTimeout(() => 
    {
        stopAnimation('d');
       }, 175);
}
function playf() 
{
    playSound('f')
    playAnimation('f')
    setTimeout(() => 
    {
        stopAnimation('f');
       }, 175);
}
function playj() 
{
    playSound('j')
    playAnimation('j')
    setTimeout(() => 
    {
        stopAnimation('j');
       }, 175);
}
function playk() 
{
    playSound('k')
    playAnimation('k')
    setTimeout(() => 
    {
        stopAnimation('k');
       }, 175);
}
function playl() 
{
    playSound('l')
    playAnimation('l')
    setTimeout(() => 
    {
        stopAnimation('l');
       }, 175);
}