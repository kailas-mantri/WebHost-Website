function myFunction() {
  var x = document.getElementById("navigate");
  var y = document.getElementById("menuicon");
  if (x.className === "navigation") {
    x.className += " responsive";
    y.className = "fa fa-close";
  } else {
    x.className = "navigation";
    y.className = "fa fa-bars";
  }
}