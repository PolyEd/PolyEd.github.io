let stars;
let playerImage;
let meteorImage;
let player = {
    x:500,
    y:550,
    xVel:0,
    dazed:0
}
let meteors = [{
    x:500,
    y:0,
    yVel:0
}];
let keysPressed = {};
function preload(){
    stars = loadImage("stars.png");
    playerImage = loadImage("link.png");
    meteorImage = loadImage("unnamed.png");
}

function setup(){
    createCanvas(1000,700);
}
function draw(){
    background(0);
    image(stars,0,0,1000,700);
    image(playerImage, player.x, player.y);
    if (keysPressed["ArrowRight"]&& player.dazed <= 0){
        player.xVel +=1;
    }else if (keysPressed["ArrowLeft"]&& player.dazed <= 0){
        player.xVel -=1;
    }
    player.xVel *= 0.9;
    player.x += player.xVel;
    player.dazed-=1;

    if(player.x<0 ||player.x >1000 - playerImage.width && player.dazed <= 0){
        player.xVel *= -1;
        player.dazed = 30;
    }
   meteors.forEach(meteor => {
       image(meteorImage,meteor.x,meteor.y,48,48);
       meteor.yVel += 0.25;
       meteor.y += meteor.yVel;

   });
   if(Math.random()<0.02){
       meteors.push({
        x: random(1000),
        y : 0,
        yVel : 0
       })
   }
}

function keyPressed(){
    keysPressed[key]  = true;
}

function keyReleased(){
    keysPressed[key] = false;
}

//browser-sync start --server --files ["* .html", "* .css", "* .js"]