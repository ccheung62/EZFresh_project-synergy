// Initate AOS (text animation library)
AOS.init();

let username;
let loggedin = false;

// Responsive navbar
if(document.querySelector(".navbar") !== null){
    const navbar = document.querySelector(".navbar");
    window.onscroll = function(e) {
        if (this.scrollY < 45){
            switchNavBar();
        }
        else {
            navbar.classList.remove("topNavBar");
            // "false" for down and "true" for up
            if (this.oldScroll > this.scrollY){
                navbar.classList.remove("formHidden");
            }
            else{
                navbar.classList.add("formHidden");
            }
        }
    this.oldScroll = this.scrollY;
    }
}
// remove transparency when toggle is opened
function switchNavBar(){
    if (this.scrollY < 45){
        if (document.querySelector(".navbar-toggler").getAttribute("aria-expanded") === "true" || false){
            document.querySelector(".navbar").classList.remove("topNavBar");
        }
        else{
            document.querySelector(".navbar").classList.add("topNavBar");
        }
    }
}

// Login
// creates error message on top of the form
function setFormMessage(formElement, msg){
    formElement.querySelector(".formErr").innerHTML = msg;
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
        // Switch between login and sign up page
        document.querySelector("#signUpLink").addEventListener("click", e => {
            // prevent the page from reloading when the link is pressed for smoother transition
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
                username = loginForm.querySelector(".username").value;
                loggedin = true;
                window.location.href = "home.html";
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
                username = createForm.querySelector(".username").value;
                loggedin = true;
                window.location.href = "home.html";
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




