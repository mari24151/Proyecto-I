// funcion que llama a las dunciones agregar and editar a sus indicados botones  
function prepararEstudiante() {
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
    role = document.getElementById('role').value;


    // crear objeto estudiantes
    var estudiante = {
        "cedula": cedula,
        "nombre": nombre,
        "carrera": carrera,
        "role": role
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

debugger;
    //agregar las filas y columnas a la tabla
    var columnas = "<tr><th>Cedula</th><th>Nombre</th><th>Carrera</th><th>Estado de Ingles</th><th>Opciones</th></tr>";

    var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
    var estudiante = columnas;
    //agregar los usuarios a la tabla 
    for (var i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i] != undefined) {
            estudiante += "<tr>";
            estudiante += '<td class="lbl-cedula"><a data-toggle="modal" data-target="#miventana">' + estudiantes[i].cedula + '</a></td>';
            estudiante += '<td class="lbl-nobre">' + estudiantes[i].nombre + '</td>';
            estudiante += '<td class="lbl-carrera">' + estudiantes[i].carrera + '</td>';
            estudiante += '<td class="lbl-role">' + estudiantes[i].role + '</td>';
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
    var role_estudiante;

    var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));

    var cedula_estudiante = codigo;



    for (var i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i] != undefined) {
            if (estudiantes[i].cedula == cedula_estudiante) {

                nombre_estudiante = estudiantes[i].nombre;
                carrera_estudiante = estudiantes[i].carrera;
                role_estudiante = estudiantes[i].role;

            }

        }


    };


    document.getElementById("cedula").value = cedula_estudiante;
    document.getElementById("nombre").value = nombre_estudiante;
    document.getElementById("carrera").value = carrera_estudiante;
    document.getElementById("role").value = role_estudiante;

}

//editar estudiantes
function editarEstudiante() {

    $("#editar-estudiante").click(function()

        {
            var cedula_estudiante;
            var nombre_estudiante;
            var carrera_estudiante;
            var role_estudiante;

            var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));


            cedula_estudiante = document.getElementById('cedula').value;
            nombre_estudiante = document.getElementById('nombre').value;
            carrera_estudiante = document.getElementById('carrera').value;
            role_estudiante = document.getElementById('role').value;


            for (var i = 0; i < estudiantes.length; i++) {

                if (estudiantes[i] != undefined) {


                    if (estudiantes[i].cedula== cedula_estudiante) {

                        estudiantes[i].nombre = nombre_estudiante;
                        estudiantes[i].carrera = carrera_estudiante;
                        estudiantes[i].role = role_estudiante;
                    }

                }


            };

            localStorage.setItem('estudiantes', JSON.stringify(estudiantes));

            alert('Estudiante modificada con exito');

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
