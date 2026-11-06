
function mostrarLogin() {

    document.getElementById("formLogin").style.display = "block";
    document.getElementById("formRegistro").style.display = "none";

    document.getElementById("btnLogin").classList.add("activo");
    document.getElementById("btnRegistro").classList.remove("activo");

}

function mostrarRegistro() {

    document.getElementById("formLogin").style.display = "none";
    document.getElementById("formRegistro").style.display = "block";

    document.getElementById("btnRegistro").classList.add("activo");
    document.getElementById("btnLogin").classList.remove("activo");

}

// COMPROBAR CONTRASEÑAS
document.getElementById("formRegistro").addEventListener("submit", function(event) {

    const password = document.getElementById("passwordRegistro").value;
    const repetirPassword = document.getElementById("repassword").value;

    if (password !== repetirPassword) {

        event.preventDefault();
        alert("Las contraseñas no coinciden");

    } else {

        event.preventDefault();
        alert("Registro completado visualmente");

    }

});

// FORMULARIO DE INICIO DE SESIÓN
document.getElementById("formLogin").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Formulario de inicio de sesión enviado");

});

