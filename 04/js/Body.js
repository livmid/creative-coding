class Body{
    constructor(x, y, radius, ctx) {
        this.x = x;
        this.y = y;
        this.originRadius = radius;
        this.targetRadius = radius;
        this.radius = radius;
        this.ctx = ctx;

        // easing
        this.speed=0.01
        this.t=0.5
    }

    draw(x, y) {
      // easing
      if (Math.abs(this.targetRadius - this.radius) > 0.01) this.scale();
    else this.radius = this.targetRadius;

    // shape
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.fillStyle = "white";
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
        this.targetRadius = 250 + 100;
      } else {
        this.targetRadius = 0;
      }
    }
    scale(){
      this.t += this.speed;
      const ease = Easing.bounceOut(this.t);
      this.radius = Math.abs(
      this.originRadius + (this.targetRadius - this.originRadius) * ease
      )
    }
    distance(target, goal) {
      return Math.sqrt(
        Math.pow(target.x - goal.x, 2) + Math.pow(target.y - goal.y, 2)
      )
}
}