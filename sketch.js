var joker;
var jokersound;
var skyrim;
var skyrimsound;
var amp;


function preload(){
  
  joker = loadImage("images/joker.png");
  skyrim = loadImage("images/skyrim.png");
  jokersound = loadSound("songs/joker2.mp3");
  skyrimsound = loadSound("songs/skyrim.mp3");
  
}

function setup() {
  
  createCanvas(screen.width, screen.height);
  background(0);
  amp = new p5.Amplitude();
  //amp.setInput(jokersound);
  
  //song.loop();
  //jokersound.loop();
 
  scene= 0;
}

function keyTyped(){
  
  if(key == "0"){
      scene = 0;
      background(0);
      if(skyrimsound.isPlaying()){
      skyrimsound.stop();}
      if(jokersound.isPlaying()){
      jokersound.stop();}
      resizeCanvas(windowWidth,windowHeight);
      sentence = "Oh Hello There asd;jasdlgjasdl;gjkasldjkgasdl;kgjasdlgjk;ag"
    fill(255);
    textAlign(CENTER);
    textSize(10);
    text(sentence,windowWidth/2,windowHeight/2,80,100);
  }
  
    if(key == "1"){
      scene = 1;
      background(0);
      skyrimsound.stop();
      if(jokersound.isPlaying()){
      jokersound.stop();}
      else{
        jokersound.play();
      }
    }
    
    if(key == "2"){
 
      
      scene = 2;
      background(0);
      jokersound.stop();
      
      if(skyrimsound.isPlaying()){
      skyrimsound.stop();}
      else{
        skyrimsound.play();
      }
      noStroke();
    }
    
}

function draw() {
  
  imageMode(CENTER);
  
  var rms = amp.getLevel();
  var qrs = rms*100;
  var speed = 100;
  
  if(scene == 0){
    background(0);
    sentence = "Oh Hello There asd;jasdlgjasdl;gjkasldjkgasdl;kgjasdlgjk;ag"
    fill(255);
    textAlign(CENTER);
    textSize(10);
    text(sentence,windowWidth/2,windowHeight/2,80,100);
    //resizeCanvas(windowWidth, windowHeight);
  }
  
  if(scene == 1){
    
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
  translate(width*0.07,height*0.07);
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
  
  if(scene == 2){
    
  if(qrs < 1){
    crs = 0;
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
    srs = 0;
   }
   
  if (qrs > 10){
    crs = 0;
    srs = 4;
  }

  if (qrs > 12){
    crs = 4;
    srs = 4;
  }
  
  if (qrs > 15){
    crs = 15;
    srs = 15;
  }
  
   if (qrs > 20){
    crs = 20;
    srs = 20;
  }
  
   if (qrs > 25){
    crs = 30;
    srs = 0;
  }
  
  if (qrs > 30){
    crs = 30;
    srs = 30;
   }
  
  console.log(qrs);
  translate(width*0.07,height*0.07);
  
  for(var i = 0; i < speed ; i++){
  
    var x = random(width);
    var y = random(height);
    var c = skyrim.get(x,y);
    //crs = 0;
    fill(c);
    noStroke();
    
    rect(x,y,srs,srs);
    ellipse(x,y,crs,crs);
     }
  }

}