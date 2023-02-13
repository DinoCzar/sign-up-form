const password = document.querySelector('#password');

const password_Confirm = document.querySelector('#password-confirm');

const submit_Button = document.querySelector('button');

submit_Button.addEventListener('click', (e) => {
    if (password_Confirm.value === password.value) {
        password.style.borderColor = 'green';
        password_Confirm.style.borderColor = 'green';
    }   else {
            password.style.borderColor = 'red';
            password_Confirm.style.borderColor = 'red';
    }
})