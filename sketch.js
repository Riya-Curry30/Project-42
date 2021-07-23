/*var hr = hour();
var mn = minute();
var sc = second();*/

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  
 var hr = hour();
 var mn = minute();
 var sc = second();


  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  /*console.log("Min", mn);
  console.log("Hour", hr);
  console.log("Seconds", sc);*/
  console.log("Seconds is red, Minutes is white, Hours is blue");


  translate(350,400)
  //drawing seconds hand
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing minute hand
  push();
  rotate(mnAngle);
  stroke("white");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing hour hand
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing seconds arc
  strokeWeight(7);
  stroke("red");
  noFill();
  arc(0,0,500,500, 0, scAngle);

  //drawing minute arc
  strokeWeight(7);
  stroke("white");
  noFill();
  arc(0,0,400,400,0,mnAngle);

  //drawing hour arc
  strokeWeight(7);
  stroke("blue");
  noFill();
  arc(0,0,300,300,0,hrAngle);


  

  drawSprites();
}