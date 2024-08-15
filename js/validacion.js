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
   
    
    if (password1 !== password2) {
        //Prevenir que el formulario se envíe//
        event.preventDefault();
        alert("Deben ser iguales")
     } 
    else { 
        //Si coinciden, permitir el envío del formulario//
        ""; }
