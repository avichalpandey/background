
/*var r = 0;
var g = 50;
var b=255;*/

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1600,1600);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember   background(204);to fill the canvas with white paint before creating the ellipse.
  background(rgb(World.mouseX, World.mouseY, 0));
  //This ellipse is constrained to the 0-100 range
  //after setting withinBounds to true
 
}