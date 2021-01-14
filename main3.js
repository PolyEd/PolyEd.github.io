function setup(){
    createCanvas(600,600);
    frameRate(30); //changes the framerate

}
let lines = [];
let currentThickness = 1;
const rSlider = document.getElementById("r");
const gSlider = document.getElementById("g");
const bSlider = document.getElementById("b");

function draw(){ //draw by default is 60 fps
    background(255); //set the background to rgb(200,200,200)
    //lines[]
    //line = [point,point]
    //mousex
    //mousey
    //pmousex previous mousex
    //pmousey previous mousey

        background("white");
        noFill();
        strokeWeight(5);
        stroke("black");
        rect(0,0,600,600);
        strokeWeight(1);
        lines.forEach(linePoints =>{
            const [
                [px,py],
                [mx,my],
                thickness,
                [r,g,b]
            ] = linePoints;
            stroke(r,g,b);
            strokeWeight(thickness);
            line(px,py,mx,my);
        });
        if (mouseIsPressed && (pmouseX !== mouseX || pmouseY !== mouseY))
            lines.push([
                [pmouseX,pmouseY],
                [mouseX,mouseY],
                currentThickness,
                [+rSlider.value, +gSlider.value, +bSlider.value]

            ]);
        
    }
    
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

    //rectMode(CENTER);
    //fill("bisque");
    //rect(300,300,100,100);



/*function mouseMoved(){
    lines.push([
        [pmouseX, pmouseY],
        [mouseX, mouseY]
    ])
}*/
function keyPressed(){
    if (key === "t"){
        currentThickness +=1 ;
    }
    if(key === "r"){
        currentThickness -= 1;
    }
    currentThickness = constrain(currentThickness,1,25);
    if(key == "c"){
        lines = [];
    }
}

//function mousePressed(){
    //
//    stroke(0);
    
//}