function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


if (nombre && apellido && email && password1 && password2 && password1 === password2 && terminos) {
    showAlertSuccess();
} else {
    showAlertError();
}