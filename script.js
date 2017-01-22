function myClickEvent() {
  alert('The button was pressed');
}

function myLoadEvent() {
  var element = document.getElementById('circle');
  element.addEventListener('click', myClickEvent);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
