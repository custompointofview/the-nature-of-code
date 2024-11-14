function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(51);
}

var inc = 0.01;

// function draw() {
//   // background(51);

//   loadPixels();
//   var yOff = 0;
//   for (var x = 0; x < width; x++) {
//     var xOff = 0;
//     for (var y = 0; y < height; y++) {
//       var index = (x + y * width) * 4;
//       // var index = 0;
//       var r = noise(xOff, yOff) * 255;
//       pixels[index + 0] = r;
//       pixels[index + 1] = r;
//       pixels[index + 2] = r;
//       pixels[index + 3] = 255;
//       xOff += inc;
//     }
//     yOff += inc;
//   }
//   updatePixels();
//   // noLoop();

//   // let x = map(noise(xOff), 0, 1, 0, width);
//   // let y = map(noise(yOff), 0, 1, 0, width);

//   // xOff += 0.01;
//   // yOff += 0.01;
//   // ellipse(x, y, 24, 24);
// }
var x = 200;
var y = 200;

function draw() {
  stroke(255);
  strokeWeight(2);
  point(x, y);

  var r = floor(random(4));

  switch (r) {
    case 0:
      x += 1;
      break;
    case 1:
      x -= 1;
      break;
    case 2:
      y += 1;
      break;
    case 3:
      y -= 1;
      break;
  }
}
