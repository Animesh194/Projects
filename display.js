var bolds = document.querySelectorAll(".bold");
var spans = document.querySelectorAll(".sp");
var meter = document.getElementsByClassName("gauge_meter");
var text = document.getElementsByClassName("digit");
setSpeedNumbers();
setSpeedLine();
getSpeed();

function setSpeedNumbers(){
	var count = -39;
	for(var i = 0;i < 6;i++){
		var countdeg = count + "deg";
		bolds[i].style.transform = "rotate("+countdeg+")";
		count += 20;
	}
	count = -103;
	for(var i = 6;i < bolds.length;i++){
		var countdeg = count + "deg";
		bolds[i].style.transform = "rotate("+countdeg+")";
		count += 20;
	}
}

function setSpeedLine(){
	var count = -27;
	for(var i = 0;i < spans.length;i++){
		if(i == 5)
			count += 2;
		var countdeg = count + "deg";
		spans[i].style.transform = "rotate("+countdeg+")";
		count += 20;
	}
}

function getSpeed(){
	var urlParams = new URLSearchParams(window.location.search);
	var params = urlParams.toString();
	var speed_string = "";
	
	for(var i = params.length-1;params[i] != '=';i--){
		speed_string += params[i];
	}

	var mul = 1, speed = 0, cur = 0;
	for(var i = 0;i < speed_string.length;i++){
		cur = Number(speed_string[i]);
		speed += cur*mul;
		mul = mul*10;
	}
	moveMeter(speed);
}

function moveMeter(speed){
	var angle = speed - 40;
	meter[0].style.transform = "rotate(-40deg)";
	meter[0].style.transitionDuration = .01*speed+"s";
	meter[0].style.transform = "rotate("+angle+"deg)";
	text[0].textContent = speed;
}
