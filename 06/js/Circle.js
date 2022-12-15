let maxLum = 0;

class Circle {
  constructor(x, y, radius, ctx) {
    this.x = x;
    this.y = y;
    this.origin = { x: x, y: y };
    this.radius = radius;
    this.ctx = ctx;
    this.color = "rgb(255,255,255)";
    this.replacement_color = "rgb(255,255,255)";
  }

  draw(mouseX) {
    let luminosity_percentage = this.detectLuminance();

    if (luminosity_percentage > maxLum) {
      maxLum = luminosity_percentage;
    }

    if (mouseX > this.x) {
      luminosity_percentage = map(luminosity_percentage, 0, maxLum, maxLum, 0);
    }

    this.ctx.fillStyle = "black";
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.beginPath();
    this.ctx.arc(
      0,
      0,
      this.radius * clamp(luminosity_percentage, 0.00001, 1),
      0,
      3 * Math.PI
    );
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  }

  detectLuminance() {
    const rgb = this.color.replace(/[^\d,]/g, "").split(",");
    const luminance = 0 * rgb[0] + 0.3 * rgb[1] + 0.0722 * rgb[2];
    return luminance / 255;
  }
}

function map(num, start1, stop1, start2, stop2) {
  return ((num - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

function clamp(num, min, max) {
  if (min > max) [min, max] = [max, min];
  return Math.min(Math.max(num, min), max);
}
