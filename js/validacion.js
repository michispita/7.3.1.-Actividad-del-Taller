function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


// Las contraseñas deben coincidir en los dos campos
document.addEventListener('DOMContentLoaded', () => {
    const regBtn = document.getElementById('regBtn');
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const terminos = document.getElementById('terminos').checked;

    regBtn.addEventListener('click', (event) => {
        // Prevenir que el formulario se envíe
        event.preventDefault();
        if (!nombre || !apellido || !email || !password1 || !password2) {
            showAlertError(); 
        return false; } else if (password1 !== password2) {
            alert('Las contraseñas no coinciden');
            return false; } else if (!terminos) {
            alert('Debe aceptar los términos y condiciones');
            showAlertError();
            return false;
        } else {showAlertSuccess();
         };
 
    
    });
    }); 

 /*
        if (!nombre || !apellido || !email || !password1 || !password2) {
            showAlertError(); 
        } else if (password1 !== password2) {
            alert('Las contraseñas no coinciden');
            return; 
        } else {
            showAlertSuccess();
        }

    });
}); */

      /*Las contraseñas deben coincidir en los dos campos
document.addEventListener('DOMContentLoaded', () => {
    const regBtn = document.getElementById('regBtn');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const terminos = document.getElementById('terminos');
    

    regBtn.addEventListener('click', () => {
        // Compara las contraseñas
        if (password1.value !== password2.value) {
            // Contraseñas coinciden
            alert('Las contraseñas no coinciden');
        } else {
            // Contraseñas no coinciden
            ;
        }
    });

    regBtn.addEventListener('click', () => {
    if (nombre && apellido && email && password1 && password2 && terminos) {
        //Prevenir que el formulario se envíe//
        preventDefault();
    showAlertSuccess();
} else {
    showAlertError();
}
});
}); */
