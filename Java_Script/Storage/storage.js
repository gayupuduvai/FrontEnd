function localstorage() {
  let Username = document.getElementById("username").value;
  let Password = document.getElementById("pswd").value;

  let nameError = document.getElementById("nameError");
  let pswdError = document.getElementById("pswdError");

  var validName = "Gayathri",
    password = "Gayu@2024";
  if (Username == validName && Password == password) {
    localstorage.setItem(Username);
    var getLocalItem = localstorage.getItem("Username");
    console.log(getLocalItem);
    localstorage.setItem(Password);
    window.location.assign(
      "http://127.0.0.1:5500/Java_Script/Storage/hompage.html"
    );
  } else {
    nameError.textContent = "Name Required";
    pswdError.textContent = "Password required";
  }
}
