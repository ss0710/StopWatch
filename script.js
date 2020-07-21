let sec = 0;
let min = 0;
let hours = 0;

let displaySec = 0;
let displayMin = 0;
let displayHours = 0;

let res = false;
let interval = null;

function stopWatch(){

	sec++;

	if(sec / 60 === 1)
	{
		sec = 0;
		min++;

		if(min / 60 ===1)
		{
			min=0;
			hours++;
		}
	}

	if(sec<10)
	{
		displaySec = "0" + sec.toString();
	}
	else
	{
		displaySec =sec.toString();
	}

	if(min<10)
	{
		displayMin = "0" + min.toString();
	}
	else
	{
		displayMin =min.toString();
	}

	if(hours<10)
	{
		displayHours = "0" + hours.toString();
	}
	else
	{
		displayHours =hours.toString();
	}

	document.getElementById("display").innerHTML = displayHours + ":" + displayMin + ":" + displaySec;
}



function start(){
	console.log("function called");
	if(res === false)
	{
		res = true;
  		interval = window.setInterval(stopWatch , 1000);	
		document.getElementById("startStop").innerHTML = "Stop";
	}
	else{
        res = false;
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
	}	
}


function reset(){

	window.clearInterval(interval);
    min = 0;
    sec = 0;
    hours = 0;
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("display").innerHTML = "00:00:00";
    res = false;
}


