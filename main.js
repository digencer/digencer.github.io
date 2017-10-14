(function() {
  var activeElement = document.getElementById("active");
  var elements = document.querySelectorAll(".subtitle");

  var myFunction = function(elem) {
    if (activeElement) {
      activeElement.id = "";
    }
    elem.id = "active";
    activeElement = elem;
    elem.scrollTop = 0;
  };

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction.bind(this, elements[i]), false);
  }
/*  document.getElementsByClassName('subtitle').onclick = function(e) {
    console.log(e);
    var id = e.target.id;
    if (activeElementId) {
      document.getElementById(activeElementId).classList.remove("active");
    }
    console.log(id);
    if (activeElementId !== id) {
      document.getElementById(id).classList.add("active");
      activeElementId = id;
    } else {
      activeElementId = null;
    }
  }; */
})();
