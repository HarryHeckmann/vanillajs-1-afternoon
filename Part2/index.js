
var idInput = document.getElementById('idInput');
var colorInput = document.getElementById('colorInput');

function setCard(){
   let card = document.getElementById(idInput.value);
   card.style.color = colorInput.value;
}


