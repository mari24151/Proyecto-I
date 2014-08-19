//llamar la funcion para agregarla a la funcion 
function prepararLogin() {
    $("#iniciar").click(function() {
        cargar();
    });
}

// funcion donde se revisa el usuario y contraseña
function cargar() {
   
   // tomar los valores de las cajas
    var usuario = document.getElementById('usuario').value;
    	contrasena = document.getElementById('contrasena').value;
    
    
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));

    for (var i = 0; i < usuarios.length; i++) {

        if (usuarios[i] != undefined) {

            if ((usuarios[i].usuario == usuario) && (usuarios[i].contrasena == contrasena)) {

                location.href = "Dahsboard.html";
            } else {
                alert('Su Usuario o Contraseña es incorrecta');
            }
        }
    };
}
