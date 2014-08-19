//llamar la funcion para agregarla a la funcion 
function prepararLogin() {
    $("#iniciar").click(function() {
        cargar();
    });
}

// funcion donde se revisa el usuario y contraseña
function cargar() {
debugger;
    // tomar los valores de las cajas
    var usuario = document.getElementById('usuario').value;
    contrasena = document.getElementById('contrasena').value;

    // leer valores
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    // recore toda la info 
    for (var i = 0; i < usuarios.length; i++) {

        if (usuarios[i] != undefined) {

            // busca si es correcto la descripcion
            if (usuarios[i].alias == usuario && usuarios[i].contrasena == contrasena) {
                // envia al dashboard en caso correcto
                location.href = "Dahsboard.html";
                break;
            } else {
            	//muestra alerta en caso contrario
                alert('Su Usuario o Contraseña es incorrecta');
            }
            location.reload(true);
        }
    };
}
