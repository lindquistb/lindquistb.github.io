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
    if(key == "1"){
      scene = 1;
      skyrimsound.stop();
      jokersound.play()
      //amp.setInput(jokersound);
      fill(0);
      rect(0,0,screen.width,screen.height);
    }
    
    if(key == "2"){
      scene = 2;
      jokersound.stop();
      skyrimsound.play();
      //amp.setInput(skyrimsound);
      fill(0);
      rect(0,0,screen.width,screen.height);
    }
     else{
      scene1 = 0;
   }
}

function draw() {
  
  imageMode(CENTER);
  
  var rms = amp.getLevel();
  var qrs = rms*100;
  var speed = 100;
  
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
    var c = skyrim.get(x,y);
    //crs = 0;
    fill(c);
    noStroke();
    
    rect(x,y,srs,srs);
    ellipse(x,y,crs,crs);
     }
  }

//else{
  //fill(0);
  //rect(0,0,screen.width,screen.height);
//}

}