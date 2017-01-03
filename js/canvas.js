/*
*/

window.addEventListener('load', init, false);
function init() {
    console.log('init');

    var canvas = undefined;
    var context = undefined;
    var ball = undefined;

    var width = window.innerWidth;
    var height = window.innerHeight;

    canvas = createCanvas(0, 0, width, height);
    context = canvas.getContext('2d');

    ball = new Ball(100, 100, 20, '#b5e2ef', context);
    ball.update();

    for (var angle = 0; angle < Math.PI * 2; angle += 0.1) {
        console.log('--------------------');
        console.log('radian: ' + angle);
        console.log('cos: ' + Math.cos(angle));
        console.log('degrees: ' + Math.floor(angle / Math.PI * 180));
    }

    function update() {

        requestAnimationFrame(update);

    }
}

function createCanvas(x, y, width, height) {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.left = x;
    canvas.style.top = y;
    canvas.style.background = '#2b0d3b';
    return canvas;
}