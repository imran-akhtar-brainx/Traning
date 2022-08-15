function validateForm() {
    // let x = document.getElementById("email").value;
    // console.log("email == ", x )
    // if (x == "") {
    //   alert("Name must be filled out the email");
    //   return false;
    // }
    let ele = document.getElementById("f-name")
    ele.addEventListener(data,function(evt){
        console.log(data, evt)
    });
  }

  function myFunction() {
    console.log(document.getElementById('f-name').value)
    // debugger
    if (document.getElementById('f-name').value.length < 4){
        document.getElementById('f-message').innerHTML = "wronge"
    }else{
        document.getElementById('f-message').innerHTML = "valid"
    }
    
  }
