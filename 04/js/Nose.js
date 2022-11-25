class Nose {
    constructor(x, y, radius, ctx) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.ctx = ctx;
    }

    draw(x, y) {

    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.fillStyle = "black";
    // this.ctx.scale(1,0.75)
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 20, 0, Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    // this.ctx.save();
    // this.ctx.translate(this.x, this.y);
    // // this.ctx.scale(1,0.8)
    // this.ctx.lineWidth=7
    // this.ctx.beginPath();
    // this.ctx.arc(0, 0, 50, 0, Math.PI * 2);
    // this.ctx.stroke();
    // this.ctx.closePath();
    // this.ctx.restore();

    // this.ctx.save();
    // this.ctx.translate(this.x, this.y);
    // // this.ctx.scale(1,0.8)
    // this.ctx.lineWidth=7
    // this.ctx.beginPath();
    // this.ctx.arc(0, 0, 50, 0, Math.PI * 2);
    // this.ctx.stroke();
    // this.ctx.closePath();
    // this.ctx.restore();
}
}

