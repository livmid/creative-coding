let monCanvas;
let outils;
let pixelRatio;
let square1;

function start() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.style.backgroundColor = "white";
  monCanvas.width = 1000;
  monCanvas.height = 1000;
  outils = monCanvas.getContext("2d");

  // lancement de la fonction de dessin
  dessine();
}

function dessine() {

  //square 1

  outils.save()
  outils.beginPath()
  outils.fillStyle="#e3e2d3"
  outils.fillRect(10,10,200,200)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#eb5342"
  outils.fillRect(24,24,170,170)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#a44634"
  outils.fillRect(45,45,133,133)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#224e48"
  outils.fillRect(60,60,105,105)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#3982c4"
  outils.fillRect(80,80,66,66)
  outils.stroke()
  outils.fill()
  outils.closePath()

  //square 2

  outils.save()
  outils.beginPath()
  outils.fillStyle="#efe9dd"
  outils.fillRect(270,10,200,200)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#3b8665"
  outils.fillRect(286,24,170,170)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#4c535d"
  outils.fillRect(305,45,133,133)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#3e4c57"
  outils.fillRect(320,60,105,105)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#282b30"
  outils.fillRect(340,80,66,66)
  outils.stroke()
  outils.fill()
  outils.closePath()

  //square 3

  outils.save()
  outils.beginPath()
  outils.fillStyle="#cecdc8"
  outils.fillRect(533,10,200,200)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#c79942"
  outils.fillRect(550,24,170,170)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#b83f4e"
  outils.fillRect(570,45,133,133)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#a32a4d"
  outils.fillRect(585,60,105,105)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#dd6028"
  outils.fillRect(605,80,66,66)
  outils.stroke()
  outils.fill()
  outils.closePath()

  //square 4

  outils.save()
  outils.beginPath()
  outils.fillStyle="#efe6e1"
  outils.fillRect(10,270,200,200)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#38807b"
  outils.fillRect(24,285,170,170)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#7b4239"
  outils.fillRect(45,307,133,133)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#d63d40"
  outils.fillRect(60,320,105,105)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#3982c4"
  outils.fillRect(80,340,66,66)
  outils.stroke()
  outils.fill()
  outils.closePath()

  //square 5

  outils.save()
  outils.beginPath()
  outils.fillStyle="#d7cfc1"
  outils.fillRect(270,270,200,200)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#aa2320"
  outils.fillRect(286,285,170,170)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#be382d"
  outils.fillRect(305,307,133,133)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#c63522"
  outils.fillRect(320,320,105,105)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#de3c25"
  outils.fillRect(340,340,66,66)
  outils.stroke()
  outils.fill()
  outils.closePath()

  //square 6

  outils.save()
  outils.beginPath()
  outils.fillStyle="#eae6dc"
  outils.fillRect(533,270,200,200)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#666b6f"
  outils.fillRect(550,285,170,170)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#78817c"
  outils.fillRect(570,307,133,133)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#4ca75b"
  outils.fillRect(585,320,105,105)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#43967e"
  outils.fillRect(605,340,66,66)
  outils.stroke()
  outils.fill()
  outils.closePath()

   //square 7

   outils.save()
   outils.beginPath()
   outils.fillStyle="#e0d9c9"
   outils.fillRect(10,532,200,200)
   outils.stroke()
   outils.fill()
   outils.closePath()
 
   outils.beginPath()
   outils.fillStyle="#7e3932"
   outils.fillRect(24,547,170,170)
   outils.stroke()
   outils.fill()
   outils.closePath()
 
   outils.beginPath()
   outils.fillStyle="#914136"
   outils.fillRect(45,565,133,133)
   outils.stroke()
   outils.fill()
   outils.closePath()
 
   outils.beginPath()
   outils.fillStyle="#d2302e"
   outils.fillRect(60,580,105,105)
   outils.stroke()
   outils.fill()
   outils.closePath()
 
   outils.beginPath()
   outils.fillStyle="#ea332d"
   outils.fillRect(80,600,66,66)
   outils.stroke()
   outils.fill()
   outils.closePath()

   //square 8

  outils.save()
  outils.beginPath()
  outils.fillStyle="#eeebe4"
  outils.fillRect(270,532,200,200)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#f7cc46"
  outils.fillRect(286,547,170,170)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#f8d347"
  outils.fillRect(305,565,133,133)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#f6cd4d"
  outils.fillRect(320,580,105,105)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#d4d5d6"
  outils.fillRect(340,600,66,66)
  outils.stroke()
  outils.fill()
  outils.closePath()

  //square 9

  outils.save()
  outils.beginPath()
  outils.fillStyle="#e3e2dd"
  outils.fillRect(533,532,200,200)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#ec612a"
  outils.fillRect(550,547,170,170)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#c88431"
  outils.fillRect(570,565,133,133)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#e3cc98"
  outils.fillRect(585,580,105,105)
  outils.stroke()
  outils.fill()
  outils.closePath()

  outils.beginPath()
  outils.fillStyle="#eddd49"
  outils.fillRect(605,600,66,66)
  outils.stroke() 
  outils.fill()
  outils.closePath()

  requestAnimationFrame(dessine);

  outils.restore()
}

window.onload = () => {
  start();
};
