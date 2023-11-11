export const defaultSketch = `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}`;

export const activity0Sketch = `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#96d676');
  flower(width/2, height/2);
  bee(width/2, height/2);
}















function bee(x, y) {
  fill(166, 225, 229, 150);
  ellipse(x - 50, y - 20, 75, 40);
  ellipse(x - 50, y, 75, 40);
  ellipse(x + 50, y - 20, 75, 40);
  ellipse(x + 50, y, 75, 40);

  noStroke();
  fill('#ffd33d');
  ellipse(x, y, 100, 150);

  stroke('#2d1805');
  strokeWeight(5);
  line(x - 45, y - 25, x + 45, y - 25);
  line(x - 48, y, x + 48, y);
  line(x - 45, y + 25, x + 45, y + 25);
  line(x - 35, y + 50, x + 35, y + 50);

  noStroke();
  fill('#2d1805');
  triangle(x - 10, y + 73, x + 10, y + 73, x, y + 85);
  circle(x - 25, y - 50, 15);
  circle(x + 25, y - 50, 15);
  stroke('#2d1805');
  strokeWeight(3);
  noFill();
  arc(x, y - 45, 15, 20, 0, PI);
  arc(x - 25, y - 75, 50, 50, PI+HALF_PI, TWO_PI);
  arc(x + 25, y - 75, 50, 50, PI, PI+HALF_PI);
  fill('#2d1805');
  noStroke();
  circle(x - 25, y - 100, 10);
  circle(x + 25, y - 100, 10);
}

function flower(x, y) {
  for(let i = 0.0; i <= TWO_PI; i += PI/3) {
    fill('#7f9bda');
    noStroke();
    ellipse(x + cos(i)*110, y + sin(i)*110, 125, 125);
  }
  fill('#ffeba1');
  circle(x, y, 150);
}`;

export const defaultHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>
`;

export const defaultCSS = `html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}`;

export default function createDefaultFiles() {
  return {
    'index.html': {
      content: defaultHTML
    },
    'style.css': {
      content: defaultCSS
    },
    'sketch.js': {
      content: defaultSketch
    }
  };
}
