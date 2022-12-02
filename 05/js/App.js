import{Visual} from './visual.js';

class App {
  constructor() {
    console.log("launch")
    this.setWebgl();
    WebFont.load({
    google: {
    families: ['Hind:700']
    },
    fontactive:()=>{
      // console.log("font active")
      // this.visual=new Visual()

      // window.addEventListener('resize',this.resize.bind(this),false)
      // this.resize()

      // requestAnimationFrame(this.animate.bind(this))
    }


  });
  this.visual=new Visual();
  // window.addEventListener('resize',this.resize.bind(this),false)
  this.resize()
  this.animate();
  // console.log("visual", WebFont)
    this.pixelRatio = window.devicePixelRatio || 1;
    // this.canvas = document.createElement("canvas");
    // this.canvas.width = window.innerWidth * this.pixelRatio;
    // this.canvas.height = window.innerHeight * this.pixelRatio;
    // this.canvas.style.width = window.innerWidth;
    // this.canvas.style.height = window.innerHeight;
    // document.body.appendChild(this.canvas);
    // this.ctx = this.canvas.getContext("2d");
    // this.setup();
  }

  // setup() {

  //   const center={
  //     x:(window.innerWidth/2)*this.pixelRatio,
  //     y:(window.innerHeight/2)*this.pixelRatio,
      
  //   }

  //   //eyes
  //   this.eyes = new Array(
  //   new Eye(center.x - 110, center.y - 60, 25, this.ctx),
  //   new Eye(center.x + 110, center.y - 60, 25, this.ctx),
  //   );


  //   // eye - mouse movement

  //   this.mouse = { x: 0, y: 0 };
  //   const amount = 2000;
  //   let radius = 10;
  //   this.PHI = 137.51 / 16;
  //   this.angle = 0;

  //   for (let i = 0; i < amount; i++) {
  //     radius += 0.2;
  //     const x = center.x + Math.cos(this.angle * (Math.PI / 2)) * radius;
  //     const y = center.y + Math.sin(this.angle * (Math.PI / 2)) * radius;
  //     this.angle += this.PHI;
  //   }

 

  //   // document.addEventListener("click", this.click.bind(this));
  //   document.addEventListener("mousemove", this.move.bind(this));
  //   document.addEventListener("click", this.click.bind(this));

  //   this.draw();
  // }

  // draw() {
  //   this.ctx.fillStyle = "#59636c";
  //   this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  //   // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //   // this.fibonacciPoints.forEach((point) => point.draw());



  //   this.eyes.forEach((eye) => {
      
  //     eye.draw(this.mouse.x, this.mouse.y);
  //   });
  //   requestAnimationFrame(this.draw.bind(this));
  // }

  move(e) {
    this.mouse = {
      x: e.clientX * this.pixelRatio,
      y: e.clientY * this.pixelRatio,
    };
    
  }

  dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }

  setWebgl(){
    this.renderer=new PIXI.Renderer({
      width:document.body.clientWidth,
      height:document.body.clientHeight,
      antialias:true,
      transparent:false,
      resolution:(window.devicePixelRatio>1)?2:1,
      autoDensity:true,
      powerPreference:"high-performance",
      backgroundColor:0xffffff,
    });
    document.body.appendChild(this.renderer.view)

    this.stage=new PIXI.Container();
    // this.animate();
  }
  resize(){
    this.stageWidth=document.body.clientWidth
    this.stageHeight=document.body.clientHeight

    this.renderer.resize(this.stageWidth,this.stageHeight)

    this.visual.show(this.stageWidth, this.stageHeight,this.stage)
  }
  animate(){
    // console.log("draw")
    requestAnimationFrame(this.animate.bind(this))

    this.visual.animate()

    this.renderer.render(this.stage)
  }
}

window.onload = function () {
  new App();
};
