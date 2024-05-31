const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    //console.log(pipePosition);
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' '); 

    if (pipePosition <= 150 && pipePosition > 0 && marioPosition < 90) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./imagem/R-unscreen.gif'
        mario.style.width = '100px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);