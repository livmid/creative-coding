class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.setup();
  }

  initWebcam() {
    this.video = document.createElement("video");

    navigator.getMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    navigator.getMedia(
      {
        video: { width: 640, height: 480 },
        audio: false,
      },
      (stream) => {
        this.video.srcObject = stream;
        this.video.play();
      },
      (err) => {
        console.log("An error occured! " + err);
      }
    );
  }

  setup() {
    this.initWebcam();
    this.grid = [];
    this.scale = 4;
    this.mouse = { x: 0, y: 0 };
    this.stepX = Math.floor(100 / 50);
    this.stepY = Math.floor(200 / 30);
    this.offsetX =
      (window.innerWidth / 10) * this.pixelRatio -
      (this.stepX * 50 * this.scale) / 2;
    this.offsetY =
      (window.innerHeight / 2) * this.pixelRatio -
      (this.stepY * 50 * this.scale) / 2;
    for (let j = 0; j < 480; j += this.stepY) {
      for (let i = 0; i < 640; i += this.stepX) {
        this.grid.push(
          new Circle(i * this.scale, j * this.scale, 40, this.ctx)
        );
      }
    }

    document.addEventListener("mousemove", (event) => {
      this.mouse = {
        x: event.clientX * this.pixelRatio,
        y: event.clientY * this.pixelRatio,
      };
      this.PositionXY();
    });

    this.draw();
  }

  PositionXY() {
    this.grid.forEach((circle, index) => {
      const distance = Math.sqrt(
        Math.pow(circle.x - this.mouse.x, 5)
      );
      let zoom = 0.5;
      let range = 200 * this.pixelRatio;
      let differenceX = this.mouse.x - circle.x;
      let differenceY = this.mouse.y - circle.y;
      if (distance < range) {
        const l = this.map(distance, 5, range * 2, 0, Math.PI * 2);
        const angle = Math.cos(l);
        const amt = this.map(angle, -1, 1, 0, zoom);
        differenceX *= amt;
        differenceY *= amt;
        circle.x = circle.origin.x - differenceX;
        circle.y = circle.origin.y - differenceY;
      } else {
        circle.x = circle.origin.x;
        circle.y = circle.origin.y;
      }
    });
  }

  detectPixels() {
    if (this.video) {
      this.ctx.drawImage(this.video, 0, 0, 640, 480);
    }
    this.imgData = this.ctx.getImageData(0, 0, 640, 480);
    this.pixels = this.imgData.data;

    this.rgb = [];
    for (let j = 0; j < 480; j += this.stepY) {
      for (let i = 0; i < 640; i += this.stepX) {
        let index = (j * 640 + i) * 4;
        this.rgb.push({
          r: this.pixels[index],
          g: this.pixels[index + 1],
          b: this.pixels[index + 2],
          a: this.pixels[index + 3],
        });
      }
    }
  }

  draw() {
    this.detectPixels();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const mouseProgress = this.mouse.x;

    this.grid.forEach((circle, index) => {
      const color = this.rgb[index];
      circle.color = `rgba(${color.r}, ${color.g}, ${color.b},0.4)`;
      circle.draw(mouseProgress);
    });

    requestAnimationFrame(this.draw.bind(this));
  }

  map(x, inMin, inMax, outMin, outMax) {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
}

window.onload = function () {
  new App();
};
