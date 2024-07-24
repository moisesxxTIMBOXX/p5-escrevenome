function setup() {
    createCanvas(700, 700);
  background("blue");
  }
  function draw() {
    
    
    stroke("black");
    fill("pink");
   // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect( mouseX,mouseY,25,35 );  
    }
  }