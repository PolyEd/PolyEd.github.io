function setup(){
    createCanvas(600,600);
    frameRate(30); //changes the framerate

}

function draw(){ //draw by default is 60 fps
    background(200); //set the background to rgb(200,200,200)
    //rectMode(CENTER);
    //rect(200,200,100,100);
    //ellipse(400,200,100,100);
    //circle(600,600,100);
    //triangle(100,100,200,100,400,300);
    //quad(100,200,100,500,200,500,200,400);
    //beginShape();
    //vertex(240,240);
    //list of vertices
    //endShape(CLOSE);

    //FILL (color)
    //STROKE (color and weight)

    rectMode(CENTER);
    fill("bisque");
    rect(300,300,100,100);
}

function mousePressed(){
    //
    stroke(0);
    
}