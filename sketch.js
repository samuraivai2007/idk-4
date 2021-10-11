var bg ;

 function preload(){
bg=loadImage("white dragon.jpg")
}

function setup() {
 createCanvas(700,700);

 x=createInput("").attribute("placeholder", "Enter value ");
 x.position(100,400);
 btn=createButton("Submit");
 btn.position(100,500); 
 btn.mousePressed(()=>{
   xv=x.value()
    if(xv==1){
        var url="https://samuraivai2007.github.io/idk3/"
        window.location.href=url
}else if(xv==2){
    var url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    window.location.href=url
  } else { 
    var url="https://samuraivai2007.github.io/bn/";
    window.location.href=url
} 
 });
 
}

function draw() {
 
    background(bg);
     fill("red");
      textSize(30);
       text("Maze Game",100,100);
        text("Trex Runner",100,200); 
        text("Epic Archery",100,300); 
//handleMousePressed();

drawSprites();
}