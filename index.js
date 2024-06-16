var randNo1 = Math.floor(Math.random()*6) + 1;
var i1 = "images/dice" + randNo1 + ".png"; 
var image1 = document.getElementsByClassName("img1")[0]
image1.setAttribute("src",i1);

var randNo2 = Math.floor(Math.random()*6) + 1;
var i2 = "images/dice" + randNo2 + ".png"; 
var image2 = document.getElementsByClassName("img2")[0]
image2.setAttribute("src",i2);

heading = document.querySelector("h1");

if (randNo1 > randNo2){
    heading.innerHTML = "PLAYER 1 WON!!!"
}
 else if(randNo2 > randNo1){
    heading.innerHTML = "PLAYER 2 WON!!!"
 }

 else{
    heading.innerHTML = "Draw!"
 }
