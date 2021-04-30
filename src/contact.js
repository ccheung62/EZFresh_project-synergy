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
    if (inputElement.classList.contains("strField")){
        if(inputElement.value === null || inputElement.value.length === 0){
            setInputError(inputElement, "This field can't be empty");
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
}
function checkContact(modalElement){
    // track if any fields are invalid
    const contact = document.querySelector(".contactForm");
    requirement = true;
    contact.querySelectorAll(".loginInput").forEach(inputElement => {
        if (!checkValid(inputElement)){
            requirement = false;
        }
    })
    // everything is properly filled in
    if (requirement){
        setFormMessage(contact, "");
        $("#tyModal").modal("show");
    }
    else{
        setFormMessage(contact, "Requirements are not fullfilled");
    }
}

// runs when the DOM finish loading
document.addEventListener("DOMContentLoaded", () => {
    const contact = document.querySelector(".contactForm");
    document.querySelectorAll(".loginInput").forEach(inputElement => {
        // check the validity of the input when the user moves on
        inputElement.addEventListener("blur", e => {
            checkValid(inputElement);
        });
    });
});