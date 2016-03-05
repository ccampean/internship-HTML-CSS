var borders = document.getElementsByClassName("left-navigation")[0];
var border_a = borders.children;

for(var i = 0;i < border_a.length; i++){
  border_a[i].children[0].addEventListener("click", change, false);
}

function change(){
  var x = document.getElementsByClassName('left-navigation')[0];
  var y = x.children;
  for(var i = 0; i < y.length; i++){
    y[i].children[0].classList.add("inactive");

    if(y[i].children[0].classList.contains("active")){
      y[i].children[0].classList.remove("active");
    }
  }
    event.currentTarget.classList.add("active");
    event.currentTarget.classList.remove("inactive");
}
