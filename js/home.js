var indexValue = 0;
slideShow();
function slideShow(){
  var i;
  var x = document.getElementsByClassName('slides');
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  indexValue++;
  if(indexValue > x.length) {indexValue = 1}
  x[indexValue-1].style.display = "block";
  setTimeout(slideShow, 1000);
}

//for the menu btn

const menu = document.getElementById('menu')
menu.style.height = '0px'

function hambtn () {
  if (menu.style.height == '0px') {
    menu.style.height = '200px'
  }
  else {
    menu.style.height = '0px'
  }
}
