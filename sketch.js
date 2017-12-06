var joker;
var jokersound;
var amp;


function preload(){
  joker = loadImage("images/joker.png")
  jokersound = loadSound("songs/joker2.mp3");
  
}

function setup() {
  createCanvas(screen.width, screen.height);
  background(0);
  amp = new p5.Amplitude();
  amp.setInput(jokersound);
  
  //song.loop();
  //jokersound.loop();
 
  scene1= 0;
}


function keyTyped(){
    if(key == "1"){
      scene1 = 1;
      jokersound.play();
    } else{
      scene1 = 0;
  }
}

function draw() {
  
  imageMode(CENTER);
  //translate(width/12, height/12);
  //background(0);
  var rms = amp.getLevel();
  var qrs = rms*100;
  //var srs = 0;
  //var crs = 0;
  var speed = 100;
  if(scene1 == 1){
    
  if(qrs < 0.2){
    crs = 0;
    srs = 0;
  }
  
  if(qrs > 0.2){
    crs = 1;
    srs = 0;
  }
  
   if(qrs > 1){
    crs = 0;
    srs = 1;
  }
  
  if(qrs > 2){
    crs = 2;
    srs = 0;
  }
  
  if(qrs > 4){
    crs = 4;
    srs = 0;
   }
   
  if (qrs > 8){
    crs = 4;
    srs = 4;
   }
   
  if (qrs > 12){
    crs = 8;
    srs = 8;
  }

  if (qrs > 15){
    crs = 16;
    srs = 16;
  }
  
   if (qrs > 20){
    crs = 30;
    srs = 30;
  }
  
  if (qrs > 40){
    crs = 30;
    srs = 30;
   }
 
  console.log(qrs);
  
  
  translate(200,0);
  for(var i = 0; i < speed ; i++){
  
    var x = random(width);
    var y = random(height);
    var c = joker.get(x,y);
    //crs = 0;
    fill(c);
    noStroke();
    
    rect(x,y,srs,srs);
    ellipse(x,y,crs,crs);
     }
  }
else{
  fill(0);
  rect(0,0,screen.width,screen.height);
}

}