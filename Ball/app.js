const ball = document.querySelector("div");
let px = 0;


const resize = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
}

const moveBall = () => {
        px += 30;
        ball.style.transform = `translateX(${px}px)`
}

    moveBall();


window.addEventListener('resize',resize);