var garden, gardenImg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    gardenImg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");

}

function setup(){
     createCanvas(1000,800);

    garden = createSprite(500,400,1000,800);
    garden.addImage("addImage",gardenImg)

    tom = createSprite(870, 600);
    tom.addAnimation("nome", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("yeahme", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(0);

    if(tom.x - jerry.x < (tom.width/2 - jerry.width/2))
    { 
        tom.velocityX=0;
        tom.addAnimation("tme", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tme");
        jerry.addAnimation("jme", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jme");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
    }
}