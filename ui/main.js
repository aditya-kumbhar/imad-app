var img = document.getElementById('madi');
var bday = document.getElementById('bday');
var inc = 0;

function moveRight()
{
    inc = inc + 20;
    img.style.marginLeft = inc + 'px';
    
}
img.onclick = function()
{
    var inter = setInterval(moveRight,100);
    var name = "Tai";
	var i = 0;

	while (i < 2) {
	    	var timer = setTimeout(bday.innerHTML+=("Happy Birthday to you.<br>"),5000);
		i = i + 1;
	}
	
	bday.innerHTML+=("Happy Birthday dear " + name + ",<br>");
	bday.innerHTML+=("Happy Birthday to you.<br>");  
}