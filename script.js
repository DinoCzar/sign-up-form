const password = document.querySelector('#password');

const password_Confirm = document.querySelector('#password-confirm');

const submit_Button = document.querySelector('button');

submit_Button.addEventListener('click', (e) => {
    if (password_Confirm.value === password.value) {
        password.style.backgroundColor = 'purple';
        password_Confirm.style.backgroundColor = 'purple';
    }   else {
            password.style.backgroundColor = 'orange';
            password_Confirm.style.backgroundColor = 'orange';
    }
})