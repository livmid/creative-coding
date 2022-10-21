let ink

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pixelDensity(1)
  

  angleMode(DEGREES)
  rectMode(CENTER)

}

function draw() {
  background(10,20,30);
  noFill()
  stroke(255)
  
  translate(width/2,height/2)

  for(var i=0;i<200;i++){
    push()

    rotate(sin(frameCount-i))
    rotate(cos(frameCount+i))

    ellipse(0,0,10-i*10,600+i*200,200-i)

    pop()
  }

  
  
}