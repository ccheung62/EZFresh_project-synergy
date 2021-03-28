// Initate AOS (text animation library)
AOS.init();

let username;

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

// runs when the DOM finish loading
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createForm = document.querySelector("#signup");
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
        if (loginForm.querySelector(".password").value === "password"){
            console.log("successful login");
            username = loginForm.querySelector(".username").value;
            console.log("username", username);
            window.location.href = "home.html";
        }
        else {
            // let the user know how to login after 9 attempts
            if (attempt < 9){
                setFormMessage(loginForm, "Incorrect username/password combination");
                attempt++;
            }
            else {
                setFormMessage(loginForm, "Put password as \"password\"");
            }
        }
    });
    createForm.addEventListener("submit", e => {
        console.log("you pressed the submit button");
        console.log("createForm", createForm);
        e.preventDefault();
        console.log(createForm.querySelectorAll("formErrMsg"));
        createForm.querySelectorAll("formErrMsg").forEach(inputErr => {
            console.log("inputErr", inputErr)
            if(inputErr.textContent.length > 0){
                setFormMessage(createForm, "Requirements are not fullfilled");
            }
            else{
                username = createForm.querySelector(".username").value;
                window.location.href = "home.html";
            }
        })
    });

    document.querySelectorAll(".loginInput").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (inputElement.classList.contains("username")){
                if(e.target.value === null || e.target.value.length === 0){
                    setInputError(inputElement, "Username can't be empty");
                }
                else{
                    clearInputError(inputElement);
                }
            }
            else if (inputElement.classList.contains("emailadd")){
                if(!e.target.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                    setInputError(inputElement, "Invalid email address");
                }
                else{
                    clearInputError(inputElement);
                }
            }
            else if(inputElement.classList.contains("password")){
                if(e.target.value === null || e.target.value.length < 4){
                    setInputError(inputElement, "Password must be at least 4 characters long");
                }
                else{
                    clearInputError(inputElement);
                }
            }
            else if(inputElement.classList.contains("confirmpass")){
                if(e.target.value != inputElement.parentElement.parentElement.querySelector(".password").value){
                    setInputError(inputElement, "Password does not match");
                }
                else{
                    clearInputError(inputElement);
                }
            }
        });
    });
});

// Responsive navbar
if(document.querySelector(".navbar") !== null){
    const navbar = document.querySelector(".navbar");
    window.onscroll = function(e) {
        if (this.scrollY < 50){
            navbar.classList.add("topNavBar");
        }
        else {
            navbar.classList.remove("topNavBar");
            // "false" for down and "true" for up
            if (this.oldScroll > this.scrollY){
                navbar.classList.remove("formHidden");
                console.log("Is the hidden class there?",navbar.classList.contains("formHidden"));
            }
            else{
                navbar.classList.add("formHidden");
                console.log("did I add the hidden class?",navbar.classList.contains("formHidden"));
            }
        }
    this.oldScroll = this.scrollY;
    }
}
// remove transparency when toggle is opened
function switchNavBar(){
    if (this.scrollY < 50){
        if (document.querySelector(".navbar-toggler").getAttribute("aria-expanded") === "true" || false){
            document.querySelector(".navbar").classList.remove("topNavBar");
        }
        else{
            console.log("they closed the toggle make the navbar invisible again");
            document.querySelector(".navbar").classList.add("topNavBar");
        }
    }
}

