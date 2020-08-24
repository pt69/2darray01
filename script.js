let arr01 = [1, 2, 3, 4, 5, 6];
let arr02 = [1, 2, 3, 4, 5, 6];
let arr03 = [1, 2, 3, 4, 5, 6];
let arr04 = [1, 2, 3, 4, 5, 6];
let arr05 = [1, 2, 3, 4, 5, 6];
let arr06 = [1, 2, 3, 4, 5, 6];
let arr2D = [];

function setup() {
  createCanvas(700, 700);
  
  arr2D[0] = arr01
  arr2D[1] = arr02
  arr2D[2] = arr03
  arr2D[3] = arr04
  arr2D[4] = arr05
  arr2D[5] = arr06
}

function draw() {
  background(51);
  for (let i = 0; i<6; i++) {
    for (let j=0; j<6; j++) {
      let k = dist(mouseX, mouseY, arr2D[i][j]*100, arr2D[j][i]*100)
        strokeWeight(20+k/10);
        stroke(30*arr2D[i][i], 100, 255-30*arr2D[j][j], 255-k);
      point(arr2D[i][j]*100, arr2D[j][i]*100);
    }
  }
}