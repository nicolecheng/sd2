var button = document.getElementById("b"); 
var c = document.getElementById("canvas");


var clear = function(){
    var ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.clearRect(0,0,c.clientWidth,c.clientHeight);	
}

button.addEventListener("click", stop);

var rid;

var animateDot = function(){
    var x = 0;

    var stop = function(){
	window.cancelAnimationFrame(rid);
    }

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

};

//circle();

//window.requestAnimationFrame( circle );

c.addEventListener('click',animateDot);
