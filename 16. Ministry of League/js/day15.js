/*
function toggleClass(el){
    if(el.className == "robo-default"){
        el.className.style.backgroundColor = "#9d7";
    } else if ((el.className == "robo-default") || (el.className == "robo-active")){
        el.className.style.backgroundColor = "#9c6";
    }
}
*/

/*document.getElementById("spoil-robo").addEventListener("click", function() {
    this.style.backgroundColor='#9d7';
}, true);*/

// steps
/*
 * 1. store currently selected item var current = document.getElementsByClassName()
 * 2. remove active class from current item
 * 3. on click -> set active class on clicked element
 * 4. store clicked item, as current +> current = this;
 */

/*var item = document.getElementsByClassName("robo-default");

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", changeColor);
}

function changeColor(event) {
    for (var i = 0; i<item.length; i++) {
        item[i].classList.add("robo-default");
    }
    event.currentTarget.classList.remove("robo-default");
    event.currentTarget.classList.add("robo-active");
}*/
/*var item = document.getElementsByClassName("robo-default");

function addBackground(event) {
    for (var i = 0; i < item.length; i++) {
        item[i].classList.add("robo-active");
    }
}
function removeBackground(event) {
    for (var i=0; i<item.length; i++) {
        item[i].classList.remove("robo-active")
    }
}
item.addEventListener("click", addBackground(event) {});
item.addEventListener("mouseout", removeBackground(event) {});*/


/*document.getElementsByClassName("robo-default").addEventListener("click", function(){
    /!*document.currentTarget.classList.add("robo-active");*!/
    this.style.backgroundColor = "#9d7"
});*/

/*/!* see https://jsfiddle.net/5h0surnk/2/!*!/
 addEventListener("click", function(element) {
 function changeColor() {
 var item = document.getElementsByClassName("robo-active");
 if (null !== item) {
 item.className = "robo-default"
 }
 element.className += "robo-active"
 }
 });*/

$('.robo').on('click', function() {
    if ($('.robo').hasClass('robo-default')) {
        $('.robo').removeClass('robo-default').addClass('robo-active');
    } else if ($('.robo').hasClass('robo-active')) {
        $('.robo').removeClass('robo-active').addClass('robo-default');
    }
});
