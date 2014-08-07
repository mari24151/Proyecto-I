

function preparar() {   
    $( "#agregar" ).click(function() { guardarCarrera() ;});
}

//guardar carreras
function guardarCarrera() {

    // obtener datos del form
    var codigo = document.getElementById('codigo').value,
        nombre= document.getElementById('nombre').value,
    
    // crear objeto estudiante
    var carrera = { "codigo": codigo, "nombre": nombre };
    
    // leer los estudiantes de localstorage
    var carrera = JSON.parse(localStorage.getItem('carrera'));
    if (carrera === null) {
        carrera = [];
    }

    // agregar el estudiante
    carrera.push(carrera);

    // volver guardar en localstoraage
    localStorage.setItem('carrera',JSON.stringify(carrera));
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

    var codigo = document.getElementById('codigo').value,
        name = document.getElementById('name').value;

    
    //var carreras = {"codigo": codigo, "name": name };
     
     var nuevo = document.createElement("name");
     nuevo.innerHTML = codigo;


    var otrlista = document.getElementById("otrlista")
    otrlista.appendChild(nuevo);

    document.getElementById("name").value = " ";

}


// leer Carreras
function leerCarrera(abcodigo, abnombre){
    
}
