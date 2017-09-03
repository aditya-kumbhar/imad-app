var img = document.getElementById('madi');

var inc = 0;

function moveRight()
{
    inc = inc + 10;
    img.style.marginLeft = inc + 'px';
    
}
img.onclick = function()
{
    var inter = setInterval(moveRight,100);
    
}