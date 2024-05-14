const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message'); 
let isValid = false;
let passwordsMatch = false;
function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Fill out all the fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if (password1El.value === password2El.value) {
        passwordsMatch = false;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Passwords do not match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;

    }
}
function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,

    };
    console.log(user);
}
function processFormData(e) {
    e.preventDefault();
    validateForm();
    if (isValid && passwordsMatch) {
        storeFormData();
    }
    
}
form.addEventListener('submit', processFormData);
