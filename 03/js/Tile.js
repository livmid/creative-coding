class Tile {
  constructor(x, y, size, color, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = false;
    this.angle = Math.round(Math.random()) * (Math.PI / 2);
    this.ctx = ctx;
    this.bgColor = color;
    this.lineColor = this.bgColor === "black"
    
  }

  updateAngle() {
    this.angle += Math.PI / 2;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.angle);
    this.ctx.fillStyle = this.circleColor;
    this.ctx.strokeStyle = this.lineColor;
    this.ctx.lineWidth = 0.5;
    this.ctx.beginPath();
    this.ctx.arc(
      0 - this.size / 2,
      0 - this.size / 2,
      this.size / 2,
      0,
      Math.PI / 2,
      false
    );
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(
      this.size / 2,
      this.size / 2,
      this.size / 2,
      Math.PI,
      -Math.PI / 2,
      false
    );
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
  }
}
