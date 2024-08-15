function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


      //Las contraseñas deben coincidir en los dos campos//
document.addEventListener('DOMContentLoaded', () => {
    const regBtn = document.getElementById('regBtn');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    

    regBtn.addEventListener('click', () => {
        // Oculta las alertas por defecto
       

        // Compara las contraseñas
        if (password1.value !== password2.value) {
            // Contraseñas coinciden
            alert('Las contraseñas no coinciden');
        } else {
            // Contraseñas no coinciden
            ;
        }
    });
});
