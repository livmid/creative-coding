let x=0
let y=0
let height=0
let width=0

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  //square unit 1
  
  fill(227,226,221)
  noStroke()
  rect(x,10,200,200)
  x=x+1
  
  fill(235,83,66)
  noStroke()
  rect(x+10,24,170,170)
  x=x+1
  
  fill(164,70,52)
  noStroke()
  rect(x+25,45,133,133)
  x=x+1
  
  fill(34,78,72)
  noStroke()
  rect(x+40,60,105,105)
  x=x+1
  
  fill(57,130,196)
  noStroke()
  rect(x+59,80,66,66)
  x=x+1

  
  //square unit 2

  fill(239,233,221)
  noStroke()
  rect(270,x,200,200)
  x=x-1
  
  fill(59,134,101)
  noStroke()
  rect(286,x+15,170,170)
  x=x-1
  
  fill(76,83,93)
  noStroke()
  rect(305,x+35,133,133)
  x=x-1
  
  fill(62,76,87)
  noStroke()
  rect(320,x+50,105,105)
  x=x-1
  
  fill(40,43,48)
  noStroke()
  rect(340,x+70,66,66)
  
  //square unit 3

  fill(206,205,200)
  noStroke()
  rect(533,width,200,200)
  width=width+1
  
  fill(199,153,66)
  noStroke()
  rect(550,width+15,170,170)
  width=width+1
  
  fill(184,63,78)
  noStroke()
  rect(570,width+30,133,133)
  width=width+1
  
  fill(163,42,77)
  noStroke()
  rect(585,width+45,105,105)
  width=width+1
  
  fill(221,96,40)
  noStroke()
  rect(605,width+60,66,66)
  width=width+1
  
  //square unit 4

  fill(239,230,225)
  noStroke()
  rect(10,height+270,200,200)
  height=height-1
  
  fill(56,128,123)
  noStroke()
  rect(24,height+285,170,170)
  height=height-1
  
  fill(123,66,57)
  noStroke()
  rect(45,height+307,133,133)
  height=height-1
  
  fill(214,61,64)
  noStroke()
  rect(60,height+320,105,105)
  height=height-1
  
  fill(62,141,200)
  noStroke()
  rect(80,height+340,66,66)
  height=height-1
  
  //square unit 5

  fill(215,207,193)
  noStroke()
  rect(270,height+275,200,200)
  height=height+1
  
  fill(170,35,32)
  noStroke()
  rect(286,height+285,170,170)
  height=height+1
  
  fill(190,56,45)
  noStroke()
  rect(305,height+307,133,133)
  height=height+1
  
  fill(198,53,34)
  noStroke()
  rect(320,height+320,105,105)
  height=height+1
  
  fill(222,60,37)
  noStroke()
  rect(340,height+340,66,66)
  
  //square unit 6

  fill(234,230,220)
  noStroke()
  rect(533,y+250,200,200)
  y=y+1
  
  fill(102,107,111)
  noStroke()
  rect(550,y+260,170,170)
  y=y+1
  
  fill(120,129,124)
  noStroke()
  rect(570,y+280,133,133)
  y=y+1
  
  fill(76,167,91)
  noStroke()
  rect(585,y+290,105,105)
  y=y+1
  
  fill(67,150,126)
  noStroke()
  rect(605,y+310,66,66)
   y=y+1
  
  //square unit 7

  fill(224,217,201)
  noStroke()
  rect(x+10,532,200,200)
  x=x+1
  
  fill(126,57,50)
  noStroke()
  rect(x+24,547,170,170)
  x=x+1
  
  fill(145,65,54)
  noStroke()
  rect(x+45,565,133,133)
  x=x+1
  
  fill(210,48,46)
  noStroke()
  rect(x+60,580,105,105)
  x=x+1
  
  fill(234,51,45)
  noStroke()
  rect(x+80,600,66,66)
  x=x+1
  
  //square unit 8

  fill(238,235,228)
  noStroke()
  rect(x+270,532,200,200)
  x=x+1
  
  fill(247,204,70)
  noStroke()
  rect(x+286,547,170,170)
  x=x+1
  
  fill(248,211,71)
  noStroke()
  rect(x+305,565,133,133)
  x=x+1
  
  fill(246,205,77)
  noStroke()
  rect(x+320,580,105,105)
  x=x+1
  
  fill(212,213,214)
  noStroke()
  rect(x+340,600,66,66)
  x=x+1
  
  //square unit 9

  fill(227,226,221)
  noStroke()
  rect(533,width+532,200,200)
  width=width-1
  
  fill(236,97,42)
  noStroke()
  rect(550,width+547,170,170)
  width=width-1
  
  fill(200,132,49)
  noStroke()
  rect(570,width+565,133,133)
  width=width-1
  
  fill(227,204,152)
  noStroke()
  rect(585,width+580,105,105)
  width=width-1
  
  fill(237,221,73)
  noStroke()
  rect(605,width+600,66,66)
  
}