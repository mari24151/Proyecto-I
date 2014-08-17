// funcion que llama a las dunciones agregar and editar a sus indicados botones  
function prepararEstudiantes() {
    $("#agregar").click(function() {
        guardarEstudiante();
    });
    $(".editar").click(function() {
        CargarValoresEstudiante(this.id);
    });
}

//guardar Estudiantes
function guardarEstudiante() {

    // obtener datos del form
    var cedula = document.getElementById('cedula').value;
    nombre = document.getElementById('nombre').value;
    carrera = document.getElementById('carrera').value;
    ingles = document.getElementById('ingles').value;


    // crear objeto estudiantes
    var estudiante = {
        "cedula": cedula,
        "nombre": nombre,
        "carrera": carrera,
        "ingles": ingles
    };

    // leer los estudiantes de localstorage
    var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
    if (estudiantes === null) {
        estudiantes = [];
    }

    // agregar los estudiantes
    estudiantes.push(estudiante);

    // volver guardar en localstoraage
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

    location.href = "Estudiantes.html";
}

// Mostrar estudiantes en la tabla 
function mostrarEstudiante() {


    //agregar las filas y columnas a la tabla
    var columnas = "<tr><th>Cedula</th><th>Nombre</th><th>Carrera</th><th>Estado de Ingles</th><th>Opciones</th></tr>";

    var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
    var estudiante = columnas;
    //agregar los usuarios a la tabla 
    for (var i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i] != undefined) {
            estudiante += "<tr>";
            estudiante += '<td class="lbl-cedula"><a href="#">' + estudiantes[i].cedula + '</a></td>';
            estudiante += '<td class="lbl-nobre">' + estudiantes[i].nombre + '</td>';
            estudiante += '<td class="lbl-carrera">' + estudiantes[i].carrera + '</td>';
            estudiante += '<td class="lbl-ingles">' + estudiantes[i].ingles + '</td>';
            estudiante += "<td>";
            estudiante += '<div class="btn-group">';
            estudiante += ' <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">Opciones<span class="caret"></span></button>';
            estudiante += '<ul class="dropdown-menu" role="menu"><li><a data-toggle="modal" data-target="#miventana" class="editar" id="' + usuarios[i].cedula + '" href="editar.html?codigo=' + usuarios[i].cedula + '">Editar</a></li><li><a class="eliminar" id="' + usuarios[i].cedula + '" href="#">Eliminar</a></li></ul>';
            estudiante += '</div>';
            estudiante += "</td>";
            estudiante += "</tr>";
        }
    };
    //mostrarlos en la tabla
    document.getElementById("tabla-estudiante").innerHTML = estudiante;
}



// funcion que carga el valor para editarlo 
function CargarValoresEstudiante(codigo) {

    var cedula_estudiante;
    var nombre_estudiante;
    var carrera_estudiante;
    var ingles_estudiantes;

    var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));

    var cedula_estudiante = codigo;



    for (var i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i] != undefined) {
            if (estudiantes[i].cedula == cedula_usuario) {

                alias_usuario = usuarios[i].alias;

            }

        }


    };


    document.getElementById("cedula").value = cedula_estudiante;
    document.getElementById("nombre").value = nombre_estudiante;
    document.getElementById("carrera").value = carrera_estudiante;
    document.getElementById("ingles").value = ingles_estudiante;

}

//editar estudiantes
function editarEstudiante() {

    $("#btn-editar").click(function()

        {
            var cedula_estudiante;
            var nombre_estudiante;
            var carrera_estudiante;
            var ingles_estudiante;

            var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));


            cedula = document.getElementById('cedula').value;
            nombre = document.getElementById('nombre').value;
            carrera = document.getElementById('carrera').value;
            ingles = document.getElementById('ingles').value;


            for (var i = 0; i < estudiantes.length; i++) {

                if (estudiantes[i] != undefined) {


                    if (estudiantes[i].estudiante == estudiantes) {

                        estudiantes[i].cedula = cedula_estudiante;

                    }

                }


            };

            localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

            alert('Usuario modificada con exito');

            location.reload(true);

        });
}

//funcion que elimina los estudiantes
function eliminarEstudiante() {

    
    $(".eliminar").click(function() {

        var cedula_estudiante = $(this).attr("id");

        var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));

        for (var i = 0; i < estudiantes.length; i++) {

            if (estudiantes[i] != undefined) {

                if (estudiantes[i].cedula == cedula_estudiante) {

                    delete estudiantes[i];

                }
            }

        };

        localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

        alert('Estudiante eliminada');

        location.reload(true);


    });
}
