
//guardar carreras
function guardarCarrera() {

     //darle la funcion al boton
    $( "#agregar" ).click(function() { guardarCarrera() ;});
    // obtener datos del form
    var codigo = document.getElementById('codigo').value,
        name = document.getElementById('name').value,
    
    // crear objeto estudiante
    var carrera = { "codigo": codigo, "name": name };
    
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