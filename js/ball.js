
function Ball(x, y, radius, color, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
}

Ball.prototype.render = function render() {
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, (2 * Math.PI), false);
    this.context.fill();
    this.context.closePath();
}
Ball.prototype.update = function () {
    this.render();
}
