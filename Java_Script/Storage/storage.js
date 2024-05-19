function formlocalStorage() {
  let Username = document.getElementById("username").value;
  let Password = document.getElementById("pswd").value;

  let nameError = document.getElementById("nameError");
  let pswdError = document.getElementById("pswdError");

  let validName = "Gayathri";
  let validPassword = "Gayu@2024";
  
  nameError.textContent = "";
  pswdError.textContent = "";

  if (Username === validName && Password === validPassword) {
    
    localStorage.setItem("name", Username);
    // var data = localStorage.getItem("name");
    // console.log(data);
    window.location.assign("http://127.0.0.1:5500/Java_Script/Storage/hompage.html") 
  } else {
    if (Username === ""){
      nameError.textContent = "Name is Required";
    } else if (Username !== validName){
      nameError.textContent = "Invalid Name";
    }

    if (Password === "") {
      pswdError.textContent = "Password is required";
    } else if (Password !== validPassword) {
      pswdError.textContent = "Invalid Password";
    }
  }
  
}


document.getElementById("loginPage").addEventListener("submit", function(event) {
  event.preventDefault();
  formlocalStorage();
});
