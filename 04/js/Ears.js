class Ears{
    constructor(x, y, radius, ctx) {
        this.x = x;
        this.y = y;
        this.originRadius = radius;
        this.targetRadius = radius;
        this.radius = radius;
        this.ctx = ctx;

        // easing
        this.speed = 0.01;
        this.t = 0.5;
    }

    draw(x, y) {
        if (Math.abs(this.targetRadius - this.radius) > 0.01) this.scale();
    else this.radius = this.targetRadius;
        this.ctx.save();
        //this.ctx.scale(0.75,1)
        this.ctx.translate(this.x, this.y);
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
}
resetAndGo() {
    this.t = 0;
    this.originRadius = this.radius;
    if (this.radius == 0) {
      this.targetRadius = 60 + 100;
    } else {
      this.targetRadius = 0;
    }
    this.originHue = this.hue;
    this.targetHue = this.hue + 50;
  }
  scale() {
    this.t += this.speed;
    const ease = Easing.bounceOut(this.t);
    this.radius = Math.abs(
        this.originRadius + (this.targetRadius - this.originRadius) * ease
      );
      this.hue = this.originHue + (this.targetHue - this.originHue) * ease;
    }

    distance(target, goal) {
        return Math.sqrt(
          Math.pow(target.x - goal.x, 2) + Math.pow(target.y - goal.y, 2)
        );
      }
}