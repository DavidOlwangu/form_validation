function checkdata() {
    let username = document.getElementById("name");
    let email_address = document.getElementById("email");

    // Get error message elements
    let nameError = document.getElementById("usernameError");
    let mailError = document.getElementById("emailError");

    // Reset error messages
    nameError.innerHTML = "";
    mailError.innerHTML = "";

    //Assume form is valid until on submitting when errors are checked
    let status = true;

    // Validates name
    if (username.value == ""){
        nameError.innerHTML = "Name cannot be empty";
        status = false;
    } 

    // Validates email address
    if (email_address.value == ""){
        mailError.innerHTML = "Email cannot be empty";
        status = false;
    } 
    return status;
};


