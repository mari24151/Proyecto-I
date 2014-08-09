// funcion que llama a agregar para luego mostrar en la ventana  
function prepararUsuario() {   
    $( "#agregar" ).click(function() { guardarUsuario() ;});
}

//guardar carreras
function guardarUsuario() {

      // obtener datos del form
    var cedula = document.getElementById('cedula').value;
        alias= document.getElementById('alias').value;
        nombre= document.getElementById('nombre').value;
    
    // crear objeto usuarios
    var usuario = { "cedula": cedula, "alias": alias,"nombre": nombre };
    
    // leer los usuarios de localstorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (usuarios === null) {
        usuarios = [];
    }

    // agregar los usuarios
    usuarios.push(usuario);

    // volver guardar en localstoraage
    localStorage.setItem('usuarios',JSON.stringify(usuarios));

}


