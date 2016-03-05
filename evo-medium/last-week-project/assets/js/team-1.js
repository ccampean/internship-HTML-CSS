var acc = document.getElementsByClassName('fa-angle-down');

for (var i = 0; i<acc.length; i++) {
  acc[i].addEventListener('click', function(event) {
    var angle = event.currentTarget.classList;
    var element = event.currentTarget.parentElement.previousElementSibling.classList;
    if (!element.contains('active')) {
      element.add('active');
      angle.remove('fa-angle-down');
      angle.add('fa-angle-up');
    }
    else {element.remove('active');
          angle.remove('fa-angle-up');
          angle.add('fa-angle-down');
    }
  });
}

// bookmark seemore
var bookmarks = document.getElementById('bookmarks').getElementsByClassName('firstdiv');
var expand = document.getElementById("seemore");

var container = [];
var div_circle = [];
var circle = [];
var fa =[];
var div_text =[];
var paragraph = [];
var span_text = [];
var small_text = [];
var horizontal_line = [];
expand.addEventListener('click', function(event) {
  event.preventDefault();
  for (var i = 0; i < 5; i++) {

    expand.style.display = "none";
    container[i] = document.createElement('div');
    div_circle[i] = document.createElement('div');
    circle[i] = document.createElement('span');
    fa[i] = document.createElement('i');
    div_text[i] = document.createElement('div');
    paragraph[i] = document.createElement("p");
    span_text[i] = document.createElement('span');
    small_text[i] = document.createElement('small');
    horizontal_line[i] = document.createElement('hr');

    paragraph[i].innerHTML = "Cello Lessons";
    small_text[i].innerHTML = "By Brad Birdsall";

    container[i].className = 'circle-bookmark';
    div_circle[i].className = 'c100 small pull-left';
    fa[i].className = 'fa fa-bookmark';
    span_text[i].className = 'grey';

    container[i].appendChild(div_circle[i]).appendChild(circle[i]).appendChild(fa[i]);
    container[i].appendChild(div_text[i]).appendChild(paragraph[i]);
    div_text[i].appendChild(span_text[i]).appendChild(small_text[i]);
    div_text[i].appendChild(horizontal_line[i]);

    bookmarks[0].appendChild(container[i]);
  }
});
// end seemore
