const ball = document.querySelector(".ball");
ball.style.left = "0px";
ball.style.top = "0px";
let sx = 10;
let sy = 10;
let width = window.innerWidth - ball.offsetWidth;
let height = window.innerHeight - ball.offsetHeight;

const resize = () => {
    width = window.innerWidth - (ball.offsetWidth / 2);
    height = window.innerHeight - (ball.offsetHeight / 2);   
}

const moveBall = () => {
   let moveX = ball.offsetLeft += sx;
   let moveY = ball.offsetTop += sy;
   console.log(width,height,ball.style.left,ball.style.top);
   ball.style.left = `${moveX}px`;
   ball.style.top = `${moveY}px`;

   if(width < moveX) {
        sx = sx * -1;
   }
   else if(height < moveY) {
        sy = sy * -1;
   }
   if(moveX < 0) {
        sx = sx * -1;
   }
   else if(moveY < 0) {
        sy = sy * -1;
   }
}


setInterval(moveBall,20);
window.addEventListener('resize',resize);