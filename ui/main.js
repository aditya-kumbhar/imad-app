var img = document.getElementById('madi');
var bday = document.getElementById('bday');
var inc = 0;

function moveRight()
{
    if(inc<550)
    {
        inc = inc + 1;
        bday.style.marginLeft = inc + 'px';
        
    }
    
}
img.onclick = function()
{
    var i = 0;
	while (i < 2) {
	    bday.innerHTML+=("Happy Birthday to you.<br>");
		i = i + 1;
	}
	
	bday.innerHTML+=("Happy Birthday dear Tai <br>");
	bday.innerHTML+=("Happy Birthday to you.<br>"); 

	var inter = setInterval(moveRight,1);
    
	
}