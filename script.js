const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const confirm_psw = document.getElementById('confirm_Password');



//show error message 

function showError(input, message) {
    const formControll = input.parentElement;
    formControll.className = 'form-control error';
    const small = formControll.querySelector('small');
    small.innerText = message;

}
//show success message
function showsuccess(input) {
    const formControll = input.parentElement;
    formControll.className = 'form-control success';


}
//check email isvalid 
function isValid(email) {
    const checkemail = '/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i';
    return checkemail.test(String(email).toLowerCase());
}
//check  password match


function checkPassworMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'password not match');
    }
}

form.addEventListener('submit', function(e) {

    // e.preventDefault();
    if (username.value === '') {
        showError(username, 'username is required ');
    } else {
        showsuccess(username);
    }


    if (email.value === '') {
        showError(email, 'Email is required ');
    } else {
        showsuccess(email);
    }
    if (password.value === '') {
        showError(password, 'Password is required ');
    } else {
        showsuccess(password);
    }
    if (confirm_psw.value === '') {
        showError(confirm_psw, 'confirm password is required ');
    } else {
        showsuccess(confirm_psw);
    }
    checkPassworMatch(password, confirm_psw);

    form.reset();
});