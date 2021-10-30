let r = 255;
let g = 255;
let b = 255;

let mode = sessionStorage.getItem('mode') || 'circle';
let counter = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);

  // меняется цвет раз в 50 мс
  setInterval(() => {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
  }, 50);
}

function draw() {
  if (keyIsPressed) {
    if (key === 'c') {
      mode = 'circle';
    } else if (key === 't') {
      mode = 'triangle';
    } else if (key === 's') {
      mode = 'square';
    } else if (key === 'p') {
      mode = 'point';
    }
    sessionStorage.setItem('mode', mode);
  }
  if (mouseIsPressed) {
    fill(r, g, b);
    switch (mode) {
      case 'circle':
        ellipse(mouseX, mouseY, 60, 60);
        break;
      case 'square':
        rect(mouseX - 22.5, mouseY - 22.5, 45, 45, 10);
        break;
      case 'triangle':
        const first = {
          x: mouseX - 45 * 0.5,
          y: mouseY + 45 * (3 ** (1/2)) / 6,
        };
        const second = {
          x: mouseX + 45 * 0.5,
          y: mouseY + 45 * (3 ** (1/2)) / 6,
        };
        const third = {
          x: mouseX,
          y: mouseY - 45 * (3 ** (1/2)) / 3,
        }
        triangle(first.x, first.y, second.x, second.y, third.x, third.y);
        break;
      case 'point':
        point(mouseX, mouseY);
        strokeWeight(5);
        break;
    }
  }
}
