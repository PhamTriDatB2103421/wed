// Get the email and password input elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Get the email and password validation icons
const emailCheckIcon = document.getElementById('email-check');
const emailExclamationIcon = document.getElementById('email-exclamation');
const passwordCheckIcon = document.getElementById('password-check');
const passwordExclamationIcon = document.getElementById('password-exclamation');

// Add event listener for email input change
emailInput.addEventListener('input', function () {
    const email = emailInput.value;

    // Validate the email
    const isEmailValid = validateEmail(email);

    // Show or hide the email validation icons based on email validity
    if (isEmailValid) {
        emailCheckIcon.style.display = 'block';
        emailExclamationIcon.style.display = 'none';
    } else {
        emailCheckIcon.style.display = 'none';
        emailExclamationIcon.style.display = 'block';
    }

    // Check overall form validity
    checkFormValidity();
});

// Add event listener for password input change
passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;

    // Validate the password
    const isPasswordValid = validatePassword(password);

    // Show or hide the password validation icons based on password validity
    if (isPasswordValid) {
        passwordCheckIcon.style.display = 'block';
        passwordExclamationIcon.style.display = 'none';
    } else {
        passwordCheckIcon.style.display = 'none';
        passwordExclamationIcon.style.display = 'block';
    }

    // Check overall form validity
    checkFormValidity();
});

// Email validation function
function validateEmail(email) {
    // You can define your own email validation rules here
    // For example, using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password validation function
function validatePassword(password) {
    // You can define your own password validation rules here
    // For example, password must be at least 8 characters long
    return password.length >= 8;
}

// Check overall form validity
function checkFormValidity() {
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);

    // Enable or disable the submit button based on form validity
    const submitButton = document.getElementById('submit-button');
    submitButton.disabled = !(isEmailValid && isPasswordValid);
}
