

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
    var carreras = JSON.parse(localStorage.getItem('carreras'));
    if (carreras === null) {
        carreras = [];
    }

    // agregar el estudiante
    carreras.push(carrera);

    // volver guardar en localstoraage
    localStorage.setItem('carreras',JSON.stringify(carreras));

}


// Editar Carreras
function editarCarreras(){

        

}


// Mostrar Carreras
function mostrarCarrera(bbcodigo, bbnombre){

    
        var columnas = "<tr><th>Codigo</th><th>Nombre</th><th>Opciones</th></tr>";

        var carreras = JSON.parse(localStorage.getItem('carreras'));
        var carrera = columnas;

        for (var i = 0 ; i < carreras.length; i++) {
            
            if(carreras[i] != undefined)
            {
            carrera += "<tr>";
            carrera += '<td class="lbl-codigo"><a href="#">'+carreras[i].codigo+'</a></td>';
            carrera +=  '<td class="lbl-nombre">'+carreras[i].nombre+'</td>';
            carrera += "<td>";
            carrera += '<div class="btn-group">';
            carrera += ' <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">Opciones<span class="caret"></span></button>';
            carrera += '<ul class="dropdown-menu" role="menu"><li><a class="editar" id="'+carreras[i].codigo+'" href="editar.html?codigo='+carreras[i].codigo+'">Editar</a></li><li><a class="eliminar" id="'+carreras[i].codigo+'" href="#">Eliminar</a></li></ul>';
            carrera += '</div>';
            carrera += "</td>";
            carrera += "</tr>";
            }
        };

        document.getElementById("tabla-carreras").innerHTML = carrera;  
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


