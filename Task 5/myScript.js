let dict = {}
function validateName(value){
    if (value=="firstName"){
        if(document.getElementById("f-name").value.length < 1){
            displayValidationMessage("f-message","f-name", "invalid");
            dict["fistName"] = 0;
        }
        else{
            displayValidationMessage("f-message","f-name", "valid")
            dict["fistName"] = 1;
        }
    }
    else if(value=="lastName"){
        if(document.getElementById("l-name").value.length < 1){
            displayValidationMessage("l-message","l-name", "invalid");
            dict["lastName"] = 0;
        }
        else{
            displayValidationMessage("l-message","l-name", "valid");
            dict["lastName"] = 1;
        }
    }
}

function validateEmail(){
    let email = document.getElementById('email').value;
    let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regex.test(email)){
        displayValidationMessage("email-message","email", "valid")
        dict["email"] = 1;
    }
    else{
        displayValidationMessage("email-message","email", "invalid")
        dict["email"] = 0;
    }
}

function validateAge(){
    let age = document.getElementById('age').value;
    if(age < 18){
        displayValidationMessage("age-message","age", "invalid");
        dict["age"] = 0;
    }
    else{
        displayValidationMessage("age-message","age", "valid")
        dict["age"] = 1;
    }
}

function validateContact(){
    let contact = document.getElementById('contact').value;
    let regex = new RegExp(/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    if(regex.test(contact)){
        displayValidationMessage("contact-message","contact", "valid")
        dict["contact"] = 1;
    }
    else{
        displayValidationMessage("contact-message", "contact", "invalid")
        dict["contact"] = 0;
    }
}

let password = " "
function validatePassword(){
    password = document.getElementById('pwd').value;
    console.log(password)
    let regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
    if(regex.test(password)){
        displayValidationMessage('pwd-message','cfrn-pwd', 'valid')
        dict["password"] = 1;
    }
    else{
        displayValidationMessage('pwd-message','cfrn-pwd', 'invalid')
        dict["password"] = 0;
    }
}

function validatePasswordConferm(){
    confermPassword = document.getElementById('cfrn-pwd').value;
    if(confermPassword == password){
        displayValidationMessage('conferm-message', 'cfrn-pwd','valid')
        dict["cnfrnPassword"] = 1;
    }
    else{
        displayValidationMessage('conferm-message','cfrn-pwd', 'invalid')
        dict["cnfrnPassword"] = 0;
    }
}



function displayValidationMessage(messageElement,element,message){
    let messageEle = document.getElementById(messageElement);
    let ele = document.getElementById(element)
    if (message=="valid"){
        messageEle.innerHTML = message;
        messageEle.style.color = "green"
        ele.style.border = "solid 1px green"
    }
    else{
        messageEle.innerHTML = message;
        messageEle.style.color = "red"
        ele.style.border = "solid 1px red"
    }
}


function validateForm(){
    console.log(Object.values(dict).values , "lenth ", Object.values(dict).length)
    for (value in Object.values(dict)){
        if (value == 0){
            alert("please fill the form correctly")
            console.log("Not valid form")
        }
        else if (Object.values(dict).length !=6 ){
            alert("please fill the form correctly")
            console.log("Not valid form")
        }
        
        else{
            alert("Thanks for submission")
            console.log("valid form")
        }   
    }
}