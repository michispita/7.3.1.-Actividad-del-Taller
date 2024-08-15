function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
//Las contraseñas deben coincidir en los dos campos//
const regBtn = document.getElementById('regBtn');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const alertDanger = document.getElementById('alert-danger');
const alertSuccess = document.getElementById('alert-success');
const terminos = document.getElementById('terminos');

regBtn.addEventListener('click', (event) => {
   
    alertDanger.classList.remove('show');
    alertSuccess.classList.remove('show');

    let isValid = true;

    // Verifica si las contraseñas coinciden
    if (password1.value !== password2.value) {
        isValid = false;
        alertDanger.textContent = 'Las contraseñas no coinciden.';
        alertDanger.classList.add('show');
    }
