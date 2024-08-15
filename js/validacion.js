function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//Las contraseñas deben coincidir en los dos campos//

const regBtn = document.getElementById('regBtn');
regBtn.addEventListener('click', (event) => {


    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const alertDanger = document.getElementById('alert-danger');
    const alertSuccess = document.getElementById('alert-success');
    
    if (password1 !== password2) {
        //Prevenir que el formulario se envíe//
        event.preventDefault();
        //Mostrar un mensaje de error// 
        alertDanger.textContent = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo."; } 
    else { 
        //Si coinciden, permitir el envío del formulario//
        alertSuccess.textContent = ""; }
