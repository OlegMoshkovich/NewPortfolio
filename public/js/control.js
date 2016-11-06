var x = 10;
var r;
var id = "new";

var cubeWidth = 100;
var cubeHeight = 100;

var w = window.innerWidth;
var h = window.innerHeight;

var div = document.createElement("div");
div.style.width = cubeWidth;
div.style.height = cubeHeight;
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

div.setAttribute("id", "new");
document.getElementById("main").appendChild(div);

function mouseOver(){
 document.getElementById(id).style.background = "yellow";
 document.getElementById(id).innerHTML = "Move"
r = Math.random();
 var w = r*1000;
 // var v = r*1000;
  position(w,h);


}

function mouseOut(){
 document.getElementById(id).style.background = "red";







}

function position(w,h){
 document.getElementById(id).style.left = w/2 - cubeWidth/2;
 document.getElementById(id).style.bottom = -(h/2 - cubeWidth/2);
 console.log(w);
 console.log(h);
}

document.getElementById(id).onmouseover = function() {mouseOver()};
document.getElementById(id).onmouseout = function() {mouseOut()};
window.onresize = resize;

function resize()
{

  position(w,h);
}
