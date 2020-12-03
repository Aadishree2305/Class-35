//Create variables here
var dog, happyDog;
var database;
var foodStock, foodS;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  background(46,139,87);

  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  
}


function draw() {  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImage)
  }

  drawSprites();
  //add styles here
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food.x
  })
}