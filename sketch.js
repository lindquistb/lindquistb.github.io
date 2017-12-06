////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIANT By Bruce Lindquist

// Some of the useful resources I used to learn how to do this project:

// David Shiffman's "The Coding Train" videos:

// Painting with Pixels
// https://www.youtube.com/watch?v=NbX3RnlAyGU

// Amplitude Analysis
// https://www.youtube.com/watch?v=NCCHQwNAN6Y&t=8s

// Loading and Playing Sounds
// https://www.youtube.com/watch?v=Pn1g1wjxl_0

// Pixel Array
// https://www.youtube.com/watch?v=nMUMZ5YRxHI&t=6s

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Resources used for my project:

// Songs:
// will he - joji
// https://www.youtube.com/watch?v=R2zXxQHBpd8

// Why So Serious? The Joker Theme The Dark Knight Soundtrack - Hans Zimmer
// https://www.youtube.com/watch?v=1zyhQjJ5UgY

// One They Fear - TES V Skyrim Soundtrack
// https://www.youtube.com/watch?v=XTUFdPJeukY

// Images:
// Dr Manhattan from the Watchmen comic series
// http://media.comicbook.com/2016/05/watchmen-dr--manhattan-hd-wallpapers-184238-1280x0.jpg

// Skyrim wallpaper
// https://images.alphacoders.com/186/186993.jpg

// Joker Wallpaper
// http://3.bp.blogspot.com/-SSRIhd560jo/U8ELAKQLvPI/AAAAAAAAAC0/fP65bYL1Zd4/s1600/dark-knight-joker-best-quote2.jpg

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// variables to control images, sounds and amplitute

var joker;
var jokersound;
var skyrim;
var skyrimsound;
var watch;
var watchsound;
var amp;
var home;
var about;
var variant;


// preloading images and songs so it's ready to go when the page loads
function preload(){
  
  watch = loadImage("images/watch.png")
  variant = loadImage("images/variant.png");
  about = loadImage("images/about.png");
  home = loadImage("images/home.png");
  joker = loadImage("images/joker.png");
  skyrim = loadImage("images/skyrim.png");
  jokersound = loadSound("songs/joker2.mp3");
  skyrimsound = loadSound("songs/skyrim.mp3");
  watchsound = loadSound("songs/joji.mp3")
  
}

//setting up initial things
function setup() {
  createCanvas(screen.width, screen.height); // making the canvas the size of whatever screen the monitor is
  background(0); //background black
  amp = new p5.Amplitude(); //creating new amplitude thingy
 
 scene= 0; //setting scene to default home screen
}

function keyTyped(){
  
  if(key == "0"){
      scene = 0;
      background(0);
      
      skyrimsound.stop();
      watchsound.stop();
      jokersound.stop();
      //resizeCanvas(windowWidth,windowHeight);
      
  }
  
    if(key == "1"){
      scene = 1;
      background(0);
      skyrimsound.stop();
      watchsound.stop();
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
      watchsound.stop();
      if(skyrimsound.isPlaying()){
      skyrimsound.stop();}
      else{
        skyrimsound.play();
      }
    }
      
      if(key == "3"){
      scene = 3;
      background(0);
      jokersound.stop();
      skyrimsound.stop();
      
      if(watchsound.isPlaying()){
      watchsound.stop();}
      else{
        watchsound.play();
      }
      
    }
    
    if(key == "4"){
      scene = 4;
      background(0);
      
      skyrimsound.stop();
      watchsound.stop();
      jokersound.stop();
      //resizeCanvas(windowWidth,windowHeight);
    }
    
}

function draw() {
  
  imageMode(CENTER); //making the images center (this probably isn't effecting anything)
  noStroke(); //making sure the shapes have no stroke 
  
  var rms = amp.getLevel();  // getting a number from the level of amplitude it's usually around 0.01-0.03
  var qrs = rms*100; // multiplying it so it's a useable variable and so I don't have to do it every time I use rms
  var speed = 100; // was playing around with the speed of the shapes appearing but it didn't seem to effect much
  
  // the home screen
  if(scene == 0){
  imageMode(CORNER); // switching this one's image to the corner. For some reason the drawn images and the actual images aren't both effected by imageMode center.. couldn't figure it out.
  image(home,0,0); // home image (it's a copout becuase text is hard)
    
  
  for(var i = 0; i < 200 ; i++){
  
    var x = random(width);
    var y = random(height);
    var c = variant.get(x,y);
    
    fill(c);
    noStroke();
    
    rect(x,y,4,4);
    ellipse(x,y,4,4);
    
  }
}
  
  // the garbage about page lol
  if(scene == 4){
    background(0);
    imageMode(CENTER);
    image(about,windowWidth/2,windowHeight/2);
    
  }
  
  // the joker scene
  if(scene == 1){
  
  // these are setting if amp is x do y. crs is for circle size and srs is for square size

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
  
  //logs the amp to allow for easier adjustments as I go  
  console.log(qrs);
  // moves the image off from 0,0 in the top left. COULD NOT GET THIS TO CENTER with imageMode(CENTER)
  //translate(width*0.07,height*0.07);
  // this makes the shapes keep popping up. speed theoretically controlls the amount of shapes but it doesn't seem to respond well. too high and it lags
  for(var i = 0; i < speed ; i++){
  
  // this is telling the shape to find a random spot on the image and then turn that colour
    var x = random(width);
    var y = random(height);
    var c = joker.get(x,y);
    fill(c);
    
    // this actually makes the shapes
    rect(x,y,srs,srs);
    ellipse(x,y,crs,crs);
     }
  }
  
  // the skyrim scene
  if(scene == 2){
  
  // the same as the joker scene but with slightely different variables in amplitude/shape dynamic
    
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
  //translate(width*0.07,height*0.07);
  
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
  
  // the watchmen/joji scene
  if(scene == 3){
    
  console.log(qrs);
  
  
  for(var i = 0; i < speed ; i++){
  
    var x = random(width);
    var y = random(height);
    var c = watch.get(x,y);
    fill(c);
    
  // shape/amp dynamic occurs after the fill is determined, so the fill can be changed. if it's too quite, it is filled in with black shapes
     if (qrs < 20){
    crs = 10;
    srs = 10;
  // 0 for fill 50% opacity
    fill(0,50);
  }
  
  // when the bassline hits and louder singing, this gives colour to the image
    if(qrs>20){
    
    crs = 10;
    srs = 10;
    }
    noStroke();
    
    rect(x,y,srs,srs);
    ellipse(x,y,crs,crs);
     }
  }

}