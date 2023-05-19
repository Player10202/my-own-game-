var kong,kongImg,kongjumpImg
var helicopter, lefthelicopterImg, righthelicopterImg
var backgroundimg
var invisiground
var invisiground2, invisiground3
var helicopter1,helicopter2,helicopter3,helicopter4, helicopter5,helicopter6

function preload(){
backgroundimg=loadImage("background.jpg")
kongImg=loadImage("kingkongstand.png")
kongjumpImg=loadImage("kingkongjump.png")
lefthelicopterImg=loadImage("helileft.png")
righthelicopterImg=loadImage("heliright.png")

}

function setup() {


  createCanvas(1600,900);
  

invisiground=createSprite(800,810,1606,15)
invisiground.visible=true
invisiground2=createSprite(65,450,15,900)
invisiground2.visible=true
invisiground3=createSprite(1400,450,15,900)
invisiground3.visible=true

kong=createSprite(500,700,50,50)
kong.addImage(kongImg)





}

function draw() {
  background(backgroundimg);  

  if(keyWentDown("space")){
    kong.velocityY-=3
    kong.addImage(kongjumpImg)


  }


  else if(keyWentUp("space")){
    kong.addImage(kongjumpImg)
    kong.scale=2.4
  }

  kong.velocityY+=1
  kong.collide(invisiground) 


if (kong.collide(helicopter1)){
  helicopter1.remove()

}




  drawSprites();
}

function spawnhelicopter(){
if(frameCount % 60===0){
  helicopter=createSprite(0,random(100,700),10,10)
  helicopter.addImage(lefthelicopterImg)
}

}