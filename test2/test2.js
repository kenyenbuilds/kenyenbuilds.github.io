function setup() {
createCanvas(600, 600);
background(206,207,209);
}


function draw() {

  
  // face
  fill(93, 52, 41);
  
  

  describe('A white circle with black outline in the middle of a gray canvas.');

  
  //eyes
  ellipse(300, 300, 250, 325);
fill('white');
ellipse(245, 290, 65, 35);
fill('white');
ellipse(360, 290, 65, 35);
fill(74, 46, 2);
ellipse(248, 290, 35, 35);
fill(74, 46, 2);
ellipse(362, 290, 35, 35);
fill('black');
ellipse(363, 290, 20, 20);
fill('black');
ellipse(249, 290, 20, 20);
fill('white');
ellipse(240, 280, 10, 10);
fill('white');
ellipse(353, 280, 10, 10);


 // shirt
  stroke('black');
  strokeWeight(5);
  fill('white'); 
  
   beginShape();
  vertex(210, 450);
  bezierVertex(180, 455, 145, 470, 120, 495);
  vertex(65, 600);
  vertex(535, 600);
  vertex(480, 495);
  bezierVertex(455, 470, 420, 455, 390, 450);
  vertex(350, 445);
  endShape(CLOSE);


  
  
  
  

    // ears
  fill(92, 52, 41);
  ellipse(165, 300, 30, 45);
  ellipse(430, 300, 30, 45);

  // eyebrows
strokeWeight(6)
  line(205, 230, 277, 230);
  line(325, 230, 395, 225);

  // nose
strokeWeight(3)
  fill(118, 76, 60);
  triangle(307, 285, 290, 330, 315, 325);

// mouth
   stroke('black');
  strokeWeight(4);
  strokeCap(ROUND);
  beginShape();
  vertex(290, 365, 330, 352);
  bezierVertex(300, 367, 320, 360, 330, 352);
  endShape();




// hair
fill(26, 27, 29);
ellipse(180 , 230, 90, 70);
ellipse(370 , 190, 110, 90);
ellipse(400 , 180, 80, 70);
ellipse(200 , 180, 80, 70);
ellipse(370 , 180, 80, 70);
ellipse(250 , 180, 80, 70);
ellipse(360 , 165, 80, 70);
ellipse(340 , 150, 80, 70);
ellipse(320 , 135, 80, 70);
ellipse(300 , 180, 80, 70);
ellipse(200 , 210, 80, 70);
ellipse(200 , 170, 80, 70);
ellipse(290 , 190, 80, 70);
ellipse(218 , 170, 80, 70);
ellipse(280 , 150, 80, 70);




}
 
 
  
  
  
  
  
  
  
  
  
  
