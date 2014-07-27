//guardar estudiante
function guardarEstudiante() {
    // obtener datos del form
    var name = document.getElementById('name').value,
        apellidos = document.getElementById('apellidos').value,
        ced = document.getElementById('ced').value,
        carr = document.getElementById('carr').value,
        sex = document.getElementById('nivel').value;
        //foto = document.getElementById('first_name').value;

    // crear objeto estudiante
    var estudiante = { "name": name, "apellidos": apellidos, "ced": ced, "carr": carr, "nivel": nivel };
    
    // leer los estudiantes de localstorage
    var estudiante = JSON.parse(localStorage.getItem('estudiante'));
    if (estudiante === null) {
        estudiante = [];
    }

    // agregar el estudiante
    estudiante.push(estudiante);

    // volver guardar en localstoraage
    localStorage.setItem('estudiante',JSON.stringify(estudiante));
}

alert("El estudiante se agrego exitosamente")


//Eliminar estudiantes 
function eliminarEstudiante(element) {
    if (confirm('Deseas eliminar estudiante')) {
        alert('El estudiante: '+element.value+ ' ha sido eliminado');
        document.location.href='Editar-estudiante.html';
    } else {
        document.location.href='Estudiantes.html';
    }
}


// Editar estudiante
function editarEtudiante(){

    var name = document.getElementById('name').value,
        apellidos = document.getElementById('apellidos').value,
        ced = document.getElementById('ced').value,
        carr = document.getElementById('carr').value,
        sex = document.getElementById('nivel').value;
    
    var editEstu = {"name": name, "apellidos": apellidos, "ced": ced, "carr": carr, "nivel": nivel};
}