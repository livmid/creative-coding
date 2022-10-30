// constante globale
const pixelRatio = window.devicePixelRatio;
// variable globale
let monCanvas;
let mesOutils;
let angle = 0;
const tiles = [];
function start() {
  // constante locale
  monCanvas = document.getElementById("ecal");
  monCanvas.width = (window.innerWidth - 100 * pixelRatio) * pixelRatio;
  monCanvas.height = (window.innerHeight - 100 * pixelRatio) * pixelRatio;
  monCanvas.style.width = window.innerWidth - 60 * pixelRatio;
  monCanvas.style.height = window.innerHeight - 60 * pixelRatio;
  mesOutils = monCanvas.getContext("2d");

  const number = 10;
  const size = monCanvas.width / number
  const color = "black"
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      tiles.push(
        new Tile(
          i * size + size / 2,
          j * size + size / 2,
          size,
          color,
          mesOutils
        )
      );
    }
  }

  document.addEventListener("click", function (event) {
    tiles.forEach((tile) => {
      if (
        (event.clientX - 60) * pixelRatio > tile.x - tile.size / 2 &&
        (event.clientX - 60) * pixelRatio < tile.x + tile.size / 2 &&
        (event.clientY - 60) * pixelRatio > tile.y - tile.size / 2 &&
        (event.clientY - 60) * pixelRatio < tile.y + tile.size / 2
      ) {
       
        tile.updateAngle();
      }
    });
  });

  animate();
}

function animate() {
  mesOutils.clearRect(0, 0, monCanvas.width, monCanvas.height);

  tiles.forEach((tile) => {
    tile.draw();
  });

  requestAnimationFrame(animate);
}

window.onload = () => {
  start();
};
