
var button = document.getElementById("btn")
var nameInput = document.getElementById("nameBox")
var email = document.getElementById("emailBox")
var password = document.getElementById("password")
var form = document.getElementById("form")
var nameReg = /^[a-zA-Z\s]+$/
var emailReg = /^[a-zA-Z0-9]+@gmail\.com$/



form.addEventListener("keyup", function(){  

    var validation = true
    if (nameInput.value === '') {
        document.getElementById("nameError").textContent = "*Name is Required*"
        validation = false
    } else if (nameReg.test(nameInput.value) == false) {
        document.getElementById("nameError").textContent = "*Name must contain a letter*"
        validation = false
    } else {
        document.getElementById("nameError").textContent = ""
       
    }


    if (email.value === '') {
        document.getElementById("emailError").textContent = "*Email is Required*"
        validation = false
    } else if (emailReg.test(email.value) == false) {
        document.getElementById("emailError").textContent = "*Please enter a valid email address.*"
        validation = false
    } else {
        document.getElementById("emailError").textContent = ""
          
    }


    if (password.value === '') {
        document.getElementById("passError").textContent = "*Password is Required*"
        validation = false
    }
    else if (password.value.length < 6) {
        document.getElementById("passError").textContent = "*Password must be at least 6 characters.*"
        validation = false
    } else {
        document.getElementById("passError").textContent = ""   
           
    }
if (validation) {
        button.disabled = false;
 } else{
    button.disabled = true;
 }

       
})


button.addEventListener("click", (event) => {
            event.preventDefault()
    
            alert("Submitted Successfully!")

            nameInput.value = ""
            email.value = ""
            password.value = ""
            button.disabled = true;
           
        })
         
