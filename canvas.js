const HEIGHT = 500,
  WIDTH = 1000;

/**
 * @type {HTMLCanvasElement}
 */
let canvas = document.getElementById("Canvas");
canvas.style.border = "1px solid green";

let pen = canvas.getContext("2d");
pen.canvas.width = WIDTH;
pen.canvas.height = HEIGHT;

// pen.beginPath();
function eyes() {
  pen.beginPath();
  pen.ellipse(WIDTH - 600, HEIGHT - 300, 25, 50, Math.PI / 2, 0, 2 * Math.PI);
  pen.fillStyle = "white";
  pen.fill();
  pen.stroke();

  pen.beginPath();
  pen.ellipse(WIDTH - 400, HEIGHT - 300, 25, 50, Math.PI / 2, 0, 2 * Math.PI);
  pen.fillStyle = "white";
  pen.fill();
  pen.stroke();
}

function eyecage() {
  pen.beginPath();
  pen.arc(WIDTH - 600, HEIGHT - 300, 20, 0, 2 * Math.PI);
  pen.fillStyle = "black";
  pen.fill();
  pen.stroke();

  pen.beginPath();
  pen.arc(WIDTH - 400, HEIGHT - 300, 20, 0, 2 * Math.PI);
  pen.fillStyle = "black";
  pen.fill();
  pen.stroke();
}

// var grd = pen.createLinearGradient(300, 0, 0, 200);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// pen.fillStyle = grd;
// pen.fillRect(100, 100, 300, 200);

pen.beginPath();
pen.arc(WIDTH / 2, HEIGHT / 2, 200, 0, 2 * Math.PI);
pen.fillStyle = "#FEEBD0";
pen.strokeStyle = "brown";
pen.fill();
pen.stroke();

eyes();
eyecage();
