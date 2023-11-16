const loginButton = document.getElementById('login-form-submit');
const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@uci\.edu$/;
    return emailRegex.test(email);
}

function loginProcess() {
    const email = emailField.value;
    const password = passwordField.value;

    let valid = true;

    if (!validateEmail(email)) {
        emailField.style.borderColor = 'red';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailField.style.borderColor = '';
        emailError.style.display = 'none';
    }

    if (password.trim() === '') {
        passwordField.style.borderColor = 'red';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordField.style.borderColor = '';
        passwordError.style.display = 'none';
    }

    if (valid) {
        console.log('Login successful for email:', email);
        // Perform login logic here
    }

    return valid;
}

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (loginProcess()) {
        // Proceed with login if validation succeeds
    }
});

emailField.addEventListener('input', function() {
    if (validateEmail(emailField.value)) {
        emailField.style.borderColor = '';
        emailError.style.display = 'none';
    }
});

passwordField.addEventListener('input', function() {
    if (passwordField.value.trim() !== '') {
        passwordField.style.borderColor = '';
        passwordError.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Execute code after the DOM is fully loaded
    console.log('DOM Loaded');

    var slider = document.getElementById("range");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    };
})
