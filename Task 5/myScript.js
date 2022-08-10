function validateForm() {
    let x = document.getElementById("email").innerHTML;
    console.log("email == ", x )
    if (x == "") {
      alert("Name must be filled out the email");
      return false;
    }
  }