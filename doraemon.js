const HEIGHT = 750,
  WIDTH = 1000;

/**
 * @type {HTMLCanvasElement}
 */
let canvas = document.getElementById("Doraemon");
canvas.style.border = "1px solid green";

let pen = canvas.getContext("2d");
pen.canvas.width = WIDTH;
pen.canvas.height = HEIGHT;

function body() {
  pen.beginPath();
  pen.moveTo(WIDTH / 2 - 150, HEIGHT / 2 + 70);
  pen.lineTo(WIDTH / 2 - 150, HEIGHT / 2 + 260);
  pen.quadraticCurveTo(
    WIDTH / 2,
    HEIGHT / 2 + 270,
    WIDTH / 2 + 150,
    HEIGHT / 2 + 260
  );
  pen.lineTo(WIDTH / 2 + 150, HEIGHT / 2 + 70);
  pen.fillStyle = "#03adef";
  pen.strokeStyle = "black";
  pen.lineWidth = 3;
  pen.stroke();
  pen.fill();
  pen.closePath();

  pen.beginPath();
  pen.moveTo(WIDTH / 2 - 151, HEIGHT / 2 + 80);
  pen.lineTo(WIDTH / 2 - 151, HEIGHT / 2);
  pen.lineTo(WIDTH / 2 + 151, HEIGHT / 2);
  pen.lineTo(WIDTH / 2 + 151, HEIGHT / 2 + 80);
  pen.fillStyle = "#03adef";
  pen.strokeStyle = "transparent";
  pen.fill();
  pen.stroke();
}

function head() {
  pen.beginPath();
  pen.arc(WIDTH / 2, HEIGHT / 2 - 115, 190, 0, 2 * Math.PI);
  pen.fillStyle = "#03adef";
  pen.strokeStyle = "black";
  pen.fill();
  pen.stroke();
}

function feet() {
  pen.beginPath();
  pen.moveTo(WIDTH / 2 - 150, HEIGHT / 2 + 260);

  pen.quadraticCurveTo(
    WIDTH / 2 - 200,
    HEIGHT / 2 + 300,
    WIDTH / 2 - 160,
    HEIGHT / 2 + 320
  );
  pen.moveTo(WIDTH / 2 - 160, HEIGHT / 2 + 319);
  pen.lineTo(WIDTH / 2 + 160, HEIGHT / 2 + 320);
  pen.quadraticCurveTo(
    WIDTH / 2 + 200,
    HEIGHT / 2 + 300,
    WIDTH / 2 + 150,
    HEIGHT / 2 + 260
  );
  pen.moveTo(WIDTH / 2, HEIGHT / 2 + 320);
  pen.lineTo(WIDTH / 2, HEIGHT / 2 + 240);
  pen.lineTo(WIDTH / 2 - 10, HEIGHT / 2 + 240);
  pen.lineTo(WIDTH / 2 + 10, HEIGHT / 2 + 240);
  pen.strokeStyle = "black";
  pen.stroke();
}

function necklace() {
  pen.beginPath();
  pen.moveTo(WIDTH / 2 + 160, HEIGHT / 2 - 8);
  pen.lineTo(WIDTH / 2 - 160, HEIGHT / 2 - 8);
  pen.lineTo(WIDTH / 2 - 160, HEIGHT / 2 + 12);
  pen.lineTo(WIDTH / 2 + 160, HEIGHT / 2 + 12);
  pen.lineTo(WIDTH / 2 + 160, HEIGHT / 2 - 8);
  pen.fillStyle = "red";
  pen.fill();
  pen.stroke();
}

function macgicBag() {
  pen.beginPath();
  pen.arc(WIDTH / 2, HEIGHT / 2 + 65, 130, 0, 2 * Math.PI);
  pen.fillStyle = "white";
  pen.strokeStyle = "black";
  pen.lineWidth = 2;
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.moveTo(WIDTH / 2 - 90, HEIGHT / 2 + 75);
  pen.arc(WIDTH / 2, HEIGHT / 2 + 75, 90, 0, Math.PI);
  pen.stroke();
}

function bell() {
  pen.beginPath();
  pen.arc(WIDTH / 2, HEIGHT / 2 + 20, 20, 0, 2 * Math.PI);
  pen.fillStyle = "gold";
  pen.strokeStyle = "black";
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.moveTo(WIDTH / 2, HEIGHT / 2 + 40);
  pen.lineTo(WIDTH / 2, HEIGHT / 2 + 30);
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.arc(WIDTH / 2, HEIGHT / 2 + 25, 5, 0, 2 * Math.PI);
  pen.fillStyle = "black";
  pen.fill();
  pen.stroke();
  pen.closePath();
  pen.beginPath();
  pen.moveTo(WIDTH / 2 - 20, HEIGHT / 2 + 20);
  // pen.lineTo(WIDTH / 2 + 19, HEIGHT / 2 + 10);
  pen.quadraticCurveTo(
    WIDTH / 2,
    HEIGHT / 2 + 6,
    WIDTH / 2 + 19,
    HEIGHT / 2 + 10
  );
  pen.moveTo(WIDTH / 2 - 20, HEIGHT / 2 + 15);
  // pen.lineTo(WIDTH / 2 + 15, HEIGHT / 2 + 6);
  pen.quadraticCurveTo(WIDTH / 2, HEIGHT / 2, WIDTH / 2 + 15, HEIGHT / 2 + 6);
  pen.stroke();
  pen.closePath();
}

function leftArm() {
  pen.beginPath();
  pen.moveTo(WIDTH / 2 - 160, HEIGHT / 2 + 5);
  // pen.lineTo(WIDTH / 2 - 230, HEIGHT / 2 + 100);
  pen.quadraticCurveTo(
    WIDTH / 2 - 190,
    HEIGHT / 2 + 40,
    WIDTH / 2 - 220,
    HEIGHT / 2 + 100
  );
  pen.lineTo(WIDTH / 2 - 180, HEIGHT / 2 + 130);
  pen.lineTo(WIDTH / 2 - 150, HEIGHT / 2 + 110);
  pen.fillStyle = "#03adef";
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.moveTo(WIDTH / 2 - 160, HEIGHT / 2 + 5);
  pen.lineTo(WIDTH / 2 - 160, HEIGHT / 2 + 100);
  pen.lineTo(WIDTH / 2 - 151, HEIGHT / 2 + 100);
  pen.lineTo(WIDTH / 2 - 151, HEIGHT / 2 + 5);
  pen.fillStyle = "#03adef";
  pen.strokeStyle = "transparent";
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.arc(WIDTH / 2 - 200, HEIGHT / 2 + 115, 35, 0, 2 * Math.PI);
  pen.fillStyle = "white";
  pen.fill();
  pen.strokeStyle = "black";
  pen.stroke();
}

function rightArm() {
  pen.beginPath();
  pen.moveTo(WIDTH / 2 + 160, HEIGHT / 2 + 5);
  // pen.lineTo(WIDTH / 2 - 230, HEIGHT / 2 + 100);
  pen.quadraticCurveTo(
    WIDTH / 2 + 190,
    HEIGHT / 2 + 40,
    WIDTH / 2 + 220,
    HEIGHT / 2 + 100
  );
  pen.lineTo(WIDTH / 2 + 180, HEIGHT / 2 + 130);
  pen.lineTo(WIDTH / 2 + 150, HEIGHT / 2 + 110);
  pen.fillStyle = "#03adef";
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.moveTo(WIDTH / 2 + 160, HEIGHT / 2 + 5);
  pen.lineTo(WIDTH / 2 + 160, HEIGHT / 2 + 100);
  pen.lineTo(WIDTH / 2 + 151, HEIGHT / 2 + 100);
  pen.lineTo(WIDTH / 2 + 151, HEIGHT / 2 + 5);
  pen.fillStyle = "#03adef";
  pen.strokeStyle = "transparent";
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.arc(WIDTH / 2 + 200, HEIGHT / 2 + 115, 35, 0, 2 * Math.PI);
  pen.fillStyle = "white";
  pen.fill();
  pen.strokeStyle = "black";
  pen.stroke();
}

function face() {
  pen.beginPath();
  pen.arc(WIDTH / 2, HEIGHT / 2 - 90, 160, 0.8 * Math.PI, 0.2 * Math.PI);
  pen.fillStyle = "white";
  pen.strokeStyle = "black";
  pen.fill();
  pen.stroke();

  pen.beginPath();
  pen.arc(WIDTH / 2, HEIGHT / 2 - 190, 15, 0, 2 * Math.PI);
  pen.fillStyle = "red";
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.arc(WIDTH / 2 - 4, HEIGHT / 2 - 195, 6, 0, 2 * Math.PI);
  pen.fillStyle = "white";
  pen.strokeStyle = "transparent";
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.moveTo(WIDTH / 2, HEIGHT / 2 - 174);
  pen.lineTo(WIDTH / 2, HEIGHT / 2 - 70);

  pen.quadraticCurveTo(
    WIDTH / 2 + 70,
    HEIGHT / 2 - 80,
    WIDTH / 2 + 120,
    HEIGHT / 2 - 110
  );

  pen.moveTo(WIDTH / 2, HEIGHT / 2 - 70);
  pen.quadraticCurveTo(
    WIDTH / 2 - 70,
    HEIGHT / 2 - 80,
    WIDTH / 2 - 120,
    HEIGHT / 2 - 110
  );

  pen.strokeStyle = "black";
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.moveTo(WIDTH / 2 + 40, HEIGHT / 2 - 122);
  pen.lineTo(WIDTH / 2 + 120, HEIGHT / 2 - 120);

  pen.moveTo(WIDTH / 2 + 40, HEIGHT / 2 - 142);
  pen.lineTo(WIDTH / 2 + 120, HEIGHT / 2 - 144);
  pen.moveTo(WIDTH / 2 + 40, HEIGHT / 2 - 162);
  pen.lineTo(WIDTH / 2 + 120, HEIGHT / 2 - 170);

  pen.moveTo(WIDTH / 2 - 40, HEIGHT / 2 - 122);
  pen.lineTo(WIDTH / 2 - 120, HEIGHT / 2 - 120);

  pen.moveTo(WIDTH / 2 - 40, HEIGHT / 2 - 142);
  pen.lineTo(WIDTH / 2 - 120, HEIGHT / 2 - 144);
  pen.moveTo(WIDTH / 2 - 40, HEIGHT / 2 - 162);
  pen.lineTo(WIDTH / 2 - 120, HEIGHT / 2 - 170);
  pen.stroke();
}
//Math.PI
function eyes() {
  pen.beginPath();
  pen.ellipse(WIDTH / 2 - 40, HEIGHT / 2 - 230, 40, 55, 0, Math.PI, 0);
  pen.arc(WIDTH / 2 - 40, HEIGHT / 2 - 230, 40, 0, Math.PI);
  pen.fillStyle = "white";
  pen.fill();
  pen.strokeStyle = "#000000";
  pen.lineWidth = 2;
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.ellipse(WIDTH / 2 + 40, HEIGHT / 2 - 230, 40, 55, 0, Math.PI, 0);
  pen.arc(WIDTH / 2 + 40, HEIGHT / 2 - 230, 40, 0, Math.PI);
  pen.fillStyle = "white";
  pen.fill();
  pen.strokeStyle = "#000000";
  pen.lineWidth = 2;
  pen.stroke();
  pen.closePath();
}

let y = HEIGHT / 2 - 220;
let speed = 1;
function animationEyes() {
  requestAnimationFrame(animationEyes);
  head();
  body();
  macgicBag();
  feet();
  face();
  leftArm();
  rightArm();
  necklace();
  bell();
  eyes();

  pen.beginPath();
  pen.arc(WIDTH / 2 - 20, y, 5, 0, 2 * Math.PI);
  pen.fillStyle = "black";
  pen.fill();
  pen.stroke();
  pen.closePath();

  pen.beginPath();
  pen.arc(WIDTH / 2 + 20, y, 5, 0, 2 * Math.PI);
  pen.fillStyle = "black";
  pen.fill();
  pen.stroke();
  pen.closePath();

  if (y >= HEIGHT / 2 - 210 || y <= HEIGHT / 2 - 230) {
    speed = -speed;
  }

  y += speed;
}

animationEyes();
