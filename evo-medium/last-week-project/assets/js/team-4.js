(function() {
  var firstdiv = document.getElementsByClassName("firstdiv");
  var seemore = document.getElementById("seeMore");
  var pElemTexts = ["Brevity is beautiful.",
    "Live for yourself.",
    "Work hard. Dream big.",
    "Life is a one time offer.",
    "Everything happens."];
  var smallElemTexts = ["By John Doe",
    "By Jane Doe",
    "By Joshua Doe",
    "By Whatever Doe",
    "By Aladin's Ghost"]

  var containers = [];
  var numbers = [];
  var circles = [];
  var pElem = [];
  var spans = [];
  var smalls = [];
  var hr = [];
  seemore.addEventListener('click', function() {
    for(var i = 0; i < 5; i++) {
      seemore.style.display = "none";
      containers[i] = document.createElement('div');
      circles[i] = document.createElement('div');
      numbers[i] = document.createElement('span');
      pElem[i] = document.createElement("p");
      spans[i] = document.createElement('span');
      smalls[i] = document.createElement('small')
      hr[i] = document.createElement('hr');

      // containers[i].className = "row";
      circles[i].className = "circle pull-left";
      numbers[i].innerHTML = i +6;
      pElem[i].innerHTML = pElemTexts[i];
      spans[i].className = "grey";
      smalls[i].innerHTML = smallElemTexts[i];

      containers[i].appendChild(circles[i]).appendChild(numbers[i]);
      containers[i].appendChild(pElem[i]);
      containers[i].appendChild(spans[i]).appendChild(smalls[i]);
      containers[i].appendChild(hr[i]);

      firstdiv[0].appendChild(containers[i])
    }
  });
})();
