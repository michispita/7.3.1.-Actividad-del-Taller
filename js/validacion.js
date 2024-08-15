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
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const terminos = document.getElementById('terminos');
    

    if (nombre && apellido && email && password1 && password2 && password1 === password2 && terminos) {
            //Prevenir que el formulario se envíe//
            event.preventDefault();
        showAlertSuccess();
    } else {
        showAlertError();
    }

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

    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
   
    
    if (password1 !== password2) {
        //Prevenir que el formulario se envíe//
        event.preventDefault();
        alert("Deben ser iguales")
     } 
    else { 
        //Si coinciden, permitir el envío del formulario//
        ""; }


