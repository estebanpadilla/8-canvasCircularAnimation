/**
 * Using the sin and cos wave to create circular animations.
 */
window.addEventListener('load', init, false);
function init() {

    var canvas = null;
    var context = null;
    var ball = null;

    var width = window.innerWidth;
    var height = window.innerHeight;

    canvas = createCanvas(width, height);
    context = canvas.getContext('2d');

    ball = new Ball(200, 200, 5, '#b5e2ef', context);


    // for (var angle = 0; angle < Math.PI * 2; angle += 0.1) {
    //     console.log('--------------------');
    //     console.log('radian: ' + angle);
    //     console.log('cos: ' + Math.cos(angle));
    //     console.log('degrees: ' + Math.floor(angle / Math.PI * 180));
    // }

    var ox = ball.x;
    var oy = ball.y;
    var angle = 0;
    var angleStep = 0.02;
    var amplitudX = 100;
    var amplitudY = 50;

    function update() {

        context.clearRect(0, 0, width, height);

        angle += angleStep;

        // ball.y = oy + (Math.sin(angle) * amplitudY);
        ball.x = ox + (Math.cos(angle) * amplitudX);



        if (angle > (Math.PI * 2)) {
            angle = 0;
        }

        ball.update();
        drawUI();
        requestAnimationFrame(update);
    }

    update();

    function drawUI() {
        context.beginPath();
        context.strokeStyle = 'yellow';
        context.moveTo(0, (oy - amplitudY));
        context.lineTo(width, (oy - amplitudY));
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(0, (oy + amplitudY));
        context.lineTo(width, (oy + amplitudY));
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo((ox - amplitudX), 0);
        context.lineTo((ox - amplitudX), height);
        context.stroke();
        context.closePath();

    }
}

function createCanvas(width, height) {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = '#2b0d3b';
    return canvas;
}

