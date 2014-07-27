//guardar usuario
function guardarUsuario() {
    // obtener datos del form
    var codigo = document.getElementById('codigo').value,
        name = document.getElementById('name').value,
    
    // crear objeto estudiante
    var usuario = { "codigo": codigo, "name": name };
    
    // leer los estudiantes de localstorage
 usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario === null) {
        usuario = [];
    }

    // agregar el estudiante
    usuario.push(usuario);

    // volver guardar en localstoraage
    localStorage.setItem('usuario',JSON.stringify(usuario));
}


//Eliminar Carreras 
function eliminarCarrera(element) {
    if (confirm('Deseas eliminar el usuario selecionada')) {
        alert('El usuario: '+element.value+ ' ha sido eliminado');
        document.location.href='editar-usuario.html';
    } else {
        document.location.href='Usuarios.html';
    }
}