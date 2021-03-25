// creates error message on top of the form
function setFormMessage(formElement, msg){
    // if (!formElement.classList.contains("formErr")){
    //     formElement.classList.add("formErr");
    // }
    const messageElement = formElement.querySelector(".formErr");
    messageElement.textContent = msg;
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
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        console.log("you are trying to submit your login");
        console.log("e", e);
        console.log(e.target.value);
        console.log("username is", loginForm.querySelector(".username").textContent);
        console.log("password is", loginForm.querySelector(".password").textContent);
        if (loginForm.querySelector(".username").textContent === "admin" && loginForm.querySelector(".password").textContent === "password"){
            console.log("successful login");
            window.location.href = "home.html";
        }
        else {
            setFormMessage(loginForm, "Incorrect username/password combination");
        }
    });

    document.querySelectorAll(".loginInput").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            // console.log("e", e);
            // console.log("inputElement", inputElement);
            // console.log("input", input);
            console.log("parent element", inputElement.parentElement);
            // console.log("does it contain username", input.classList.contains("username"));
            // console.log("e.target.value", e.target.value);

            // console.log("if it contains username", inputElement.classList.contains("username"));
            // console.log("the text inside username", loginForm.querySelector(".username").textContent);
            // console.log("is the value null?", e.target.value === null);
            // console.log("the lenght is", e.target.value.length === 0);
            // console.log("formErr is ", inputElement.querySelector(".formErr") === null);
             
            if (inputElement.classList.contains("username")){
                if(e.target.value === null || e.target.value.length === 0){
                    setInputError(inputElement, "Username can't be empty");
                }
                else{
                    clearInputError(inputElement);
                }
            }
            else if(inputElement.classList.contains("password")){
                if(e.target.value === null || e.target.value.length === 0){
                    setInputError(inputElement, "Password can't be empty");
                }
                else{
                    clearInputError(inputElement);
                }
            }
            // switch (e.target.classList){
            //     case "username":
            //         if (e.target.value.length > 0){
            //             setInputError(inputElement, "Username can't be empty");
            //         }
            //     case "username":
            //         if (e.target.value.length > 0 && e.target.value.length < 10){
            //             setInputError(inputElement, "Password must be at least 10 characters in length");
            //         }
            // }
            // if (e.target.class === "username" && e.target.value.length > 0 && e.target.value.length < 10) {
            //     setInputError(inputElement, "Username must be at least 10 characters in length");
            // }
        });

        // inputElement.addEventListener("input", e => {
        //     clearInputError(inputElement);
        // });
    });
});
