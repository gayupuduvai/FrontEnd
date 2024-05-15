// 1. DOM Forms
function myForms() {
  let x = document.getElementById("number").value;
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Enter valid input";
  } else {
    // text = "Input is Ok";
    return false;
  }
  document.getElementById("numdemo").innerHTML = text;

  let y = document.getElementById("name").value;
  let error;
  if (y === "") {
    error = "Name is required";
  } else {
    return false;
  }
  document.getElementById("namedemo").innerHTML = error;
}

// 2. DOM CSS
// document.getElementById("cssDom1").style.fontStyle = "italic";
// document.getElementById("cssDom2").style.fontSize = "larger";
// document.getElementById("cssDom2").style.color = "blue";
