function myKeyDown(event) {
	console.log(event.keyCode);
  if (event.keyCode == 37) {
	  var element = document.getElementById('circle');
	  var positionLeft = element.offsetLeft;
	  element.style.left = positionLeft - 10 + 'px';
  }
  if (event.keyCode == 38) {
	  var element = document.getElementById('circle');
	  var positionTop = element.offsetTop;
	  element.style.top = positionTop - 10 + 'px';
  }
  if (event.keyCode == 40) {
	  var element = document.getElementById('circle');
	  var positionTop = element.offsetTop;
	  element.style.top = positionTop + 10 + 'px';
  }
  if (event.keyCode == 39) {
    var element = document.getElementById('circle');
  	var positionLeft = element.offsetLeft;
 	element.style.left = positionLeft + 10 + 'px';
  }
}

function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
