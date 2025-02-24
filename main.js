var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")

var color="red"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
var mouse_x,mouse_y
canvas.addEventListener('mousedown',my_mousedown);
function my_mousedown(e){
    color=document.getElementById('colors').value;
    mouse_x=e.clientX-canvas.offsetLeft
    mouse_y=e.clientY-canvas.offsetTop
    circle(mouse_x,mouse_y)
    
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}

 function click(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
 }