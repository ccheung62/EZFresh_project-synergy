// Login
// toggle the view password
function viewPassword(passwordElement){
    let passwordInput = passwordElement.querySelector(".password");
    if (passwordInput === null){
        passwordInput = passwordElement.querySelector(".confirmpass");
    }
    const eyeIcon = passwordElement.querySelector('i');
    if (passwordInput.getAttribute("type") === "password"){
        passwordInput.setAttribute("type", "text");
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
    else{
        passwordInput.setAttribute("type", "password");
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }
}
// creates error message on top of the form
function setFormMessage(formElement, msg){
    formElement.querySelector(".formErr").textContent = msg;
}
// create error message for individual inputs 
function setInputError(inputElement, message) {
    inputElement.classList.add("formInputErr");
    inputElement.parentElement.querySelector(".formErrMsg").textContent = message;
}
// erase any input error
function clearInputError(inputElement) {
    inputElement.classList.remove("formInputErr");
    inputElement.parentElement.querySelector(".formErrMsg").textContent = "";
}
// check if the parameter has valid input
function checkValid(inputElement){
    if (inputElement.classList.contains("username")){
        if(inputElement.value === null || inputElement.value.length === 0){
            setInputError(inputElement, "Username can't be empty");
            return false;
        }
        else{
            clearInputError(inputElement);
            return true;
        }
    }
    else if (inputElement.classList.contains("emailadd")){
        if(!inputElement.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            setInputError(inputElement, "Invalid email address");
            return false;
        }
        else{
            clearInputError(inputElement);
            return true;
        }
    }
    else if(inputElement.classList.contains("password")){
        if(inputElement.value === null || inputElement.value.length < 4){
            setInputError(inputElement, "Password must be at least 4 characters long");
            return false;
        }
        else{
            clearInputError(inputElement);
            return true;
        }
    }
    else if(inputElement.classList.contains("confirmpass")){
        if(inputElement.value != inputElement.parentElement.parentElement.querySelector(".password").value){
            setInputError(inputElement, "Password does not match");
            return false;
        }
        else{
            clearInputError(inputElement);
            return true;
        }
    }
}

// runs when the DOM finish loading
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createForm = document.querySelector("#signup");
    // Run when it is on the login page
    if (loginForm !== null && createForm !== null){
        //Switch between login and sign up page
        document.querySelector("#signUpLink").addEventListener("click", e => {
            // prevent the page from reloading when the link is pressed for smoother transition
            console.log("e is", e);
            e.preventDefault();
            loginForm.classList.add("formHidden");
            createForm.classList.remove("formHidden");
        });
        document.querySelector("#loginLink").addEventListener("click", e => {
            e.preventDefault();
            loginForm.classList.remove("formHidden");
            createForm.classList.add("formHidden");
        });
        // check if the correct username/password combination is used
        // username -> admin, password -> password
        let attempt = 0;
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            // hardset a username and password that works
            if (loginForm.querySelector(".username").value.length > 0 && loginForm.querySelector(".password").value === "password"){
                setFormMessage(loginForm, "");
                modalMess = "Thank you for your continuous support " + loginForm.querySelector(".username").value +
                ". Unfortunately, the website is under maintenance indefinitely. Feel free to check again from time to time?";
                loginForm.querySelector("#loginModal").querySelector(".modal-body").innerHTML = modalMess;
                $("#loginModal").modal("show");
            }
            else {
                // let the user know how to login after 5 attempts
                if (attempt < 5){
                    setFormMessage(loginForm, "Incorrect username/password combination");
                    attempt++;
                }
                else {
                    setFormMessage(loginForm, "Put password as \"password\" :)");
                }
            }
        });
        createForm.addEventListener("submit", e => {
            e.preventDefault();
            // track if any fields are invalid
            requirement = true;
            createForm.querySelectorAll(".loginInput").forEach(inputElement => {
                if (!checkValid(inputElement)){
                    requirement = false;
                }
            })
            // redirect the person if everything is valid
            if (requirement){
                setFormMessage(createForm, "");
                modalMess = "Thank you for creating an account for EZ Fresh and starting a new way to grocery!<br><br>Your username : " +  
                createForm.querySelector(".username").value + "<br>Your password : " + createForm.querySelector(".password").value +
                "<br><br>I definitely remembered that, don't worry.";
                createForm.querySelector("#signUpModal").querySelector(".modal-body").innerHTML = modalMess;
                $("#signUpModal").modal("show");
            }
            else{
                setFormMessage(createForm, "Requirements are not fullfilled");
            }
        });
        document.querySelectorAll(".loginInput").forEach(inputElement => {
            // check the validity of the input when the user moves on
            inputElement.addEventListener("blur", e => {
                checkValid(inputElement);
            });
        });
    }
});
