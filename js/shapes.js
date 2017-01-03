function Ball(x, y, radius, color, context) {
    this.x = x;
    this.ox = x;
    this.y = y;
    this.oy = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
}

Ball.prototype.update = function update() {
    this.render();
}

Ball.prototype.render = function render() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.closePath();
    this.context.fill();
}