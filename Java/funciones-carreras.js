

function preparar() {   
    $( "#agregar" ).click(function() { guardarCarrera() ;});
}

//guardar carreras
function guardarCarrera() {

      // obtener datos del form
    var codigo = document.getElementById('codigo').value;
        nombre= document.getElementById('nombre').value;
    
    // crear objeto estudiante
    var carrera = { "codigo": codigo, "nombre": nombre };
    
    // leer los estudiantes de localstorage
    var carreras = JSON.parse(localStorage.getItem('carrera1'));
    if (carreras === null) {
        carreras = [];
    }

    // agregar el estudiante
    carreras.push(carrera);

    // volver guardar en localstoraage
    localStorage.setItem('carrera',JSON.stringify(carreras));
}






//Eliminar Carreras 
function eliminarCarrera(element) {
    if (confirm('Deseas eliminar la carrara selecionada')) {
        alert('La carrera: '+element.value+ ' ha sido eliminado');
        document.location.href='Editar-carreras.html';
    } else {
        document.location.href='Carreras.html';
    }
}


// Editar Carreras

function editarCarreras(){

}


// Mostrar Carreras
function mostrarCarrera(){


    
}
