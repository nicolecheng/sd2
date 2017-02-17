var button = document.getElementById("b"); 
var c = document.getElementById("canvas");
var rid;

var clear = function(){
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0,0,c.clientWidth,c.clientHeight);	
}

var stop = function(){
    window.cancelAnimationFrame(rid);
}

var animateDot = function(){
    var x = 0;
    window.cancelAnimationFrame(rid); // ensures only 1 instance of circle runs
    var circle = function(){
	clear();
	var ctx = c.getContext('2d');
	ctx.beginPath();
	ctx.fillStyle = "#FF0000";
	ctx.arc(x,c.height/2,20,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
	x++;
	rid = window.requestAnimationFrame( circle );
    };
    circle();
}; // closure fxn, limits the scope of certain vars

c.addEventListener('click',animateDot);

button.addEventListener("click", stop);
