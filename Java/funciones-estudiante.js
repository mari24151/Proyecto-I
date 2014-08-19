// funcion que llama a las dunciones agregar and editar a sus indicados botones  
function prepararEstudiante() {
    $("#agregar").click(function() {
        guardarEstudiante();
    });
    $(".editar").click(function() {
        CargarValoresEstudiante(this.id);
    });
     $("#vista").click(function() {
        VistaEstudiante(this.text);
    });
}

//guardar Estudiantes
function guardarEstudiante() {

    // obtener datos del form

    var cedula = document.getElementById('cedula').value;
    nombre = document.getElementById('nombre').value;
    carrera = document.getElementById('carrera').value;
    role = document.getElementById('role').value;
    imagen = document.getElementById('imagen').files[0].name;


    // crear objeto estudiantes
    var estudiante = {
        "cedula": cedula,
        "nombre": nombre,
        "carrera": carrera,
        "role": role,
        "imagen": imagen
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
    var columnas = "<tr><th>Foto</th><th>Cedula</th><th>Nombre</th><th>Carrera</th><th>Estado de Ingles</th><th>Opciones</th></tr>";

    var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
    var estudiante = columnas;
    //agregar los usuarios a la tabla 
    for (var i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i] != undefined) {
            estudiante += "<tr>";
            estudiante += '<td class="lbl-imagen"><img width="100px" heigth="100px" src="Imagenes/' + estudiantes[i].imagen + '"></img></td>';
            estudiante += '<td class="lbl-cedula"><a id="vista" data-toggle="modal" data-target="#vista-estudiante">' + estudiantes[i].cedula + '</a></td>';
            estudiante += '<td class="lbl-nobre">' + estudiantes[i].nombre + '</td>';
            estudiante += '<td class="lbl-carrera">' + estudiantes[i].carrera + '</td>';
            estudiante += '<td class="lbl-role">' + estudiantes[i].role + '</td>';
            estudiante += "<td>";
            estudiante += '<div class="btn-group">';
            estudiante += ' <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">Opciones<span class="caret"></span></button>';
            estudiante += '<ul class="dropdown-menu" role="menu"><li><a data-toggle="modal" data-target="#miventana" class="editar" id="' + estudiantes[i].cedula + '" href="editar.html?codigo=' + estudiantes[i].cedula + '">Editar</a></li><li><a class="eliminar" id="' + estudiantes[i].cedula + '" href="#">Eliminar</a></li></ul>';
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
    var imagen_estudiante;

    var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));

    var cedula_estudiante = codigo;



    for (var i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i] != undefined) {
            if (estudiantes[i].cedula == cedula_estudiante) {

                nombre_estudiante = estudiantes[i].nombre;
                carrera_estudiante = estudiantes[i].carrera;
                role_estudiante = estudiantes[i].role;
                imagen_estudiante = estudiantes[i].imagen;

            }

        }


    };


    document.getElementById("cedula").value = cedula_estudiante;
    document.getElementById("nombre").value = nombre_estudiante;
    document.getElementById("carrera").value = carrera_estudiante;
    document.getElementById("role").value = role_estudiante;
    document.getElementById("imagen").text = imagen_estudiante;

}

//editar estudiantes
function editarEstudiante() {

    $("#editar-estudiante").click(function()

        {

            var cedula_estudiante;
            var nombre_estudiante;
            var carrera_estudiante;
            var role_estudiante;
            var imagen_estudiante;

            var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));


            cedula_estudiante = document.getElementById('cedula').value;
            nombre_estudiante = document.getElementById('nombre').value;
            carrera_estudiante = document.getElementById('carrera').value;
            role_estudiante = document.getElementById('role').value;
            imagen_estudiante = document.getElementById('imagen').files[0].name;


            for (var i = 0; i < estudiantes.length; i++) {

                if (estudiantes[i] != undefined) {


                    if (estudiantes[i].cedula == cedula_estudiante) {

                        estudiantes[i].nombre = nombre_estudiante;
                        estudiantes[i].carrera = carrera_estudiante;
                        estudiantes[i].role = role_estudiante;
                        estudiantes[i].imagen = imagen_estudiante;
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

function cargarCarrera() {


    var carreras = JSON.parse(localStorage.getItem('carreras'));
    var valores;
    //agregar los usuarios a la tabla 
    for (var i = 0; i < carreras.length; i++) {

        if (carreras[i] != undefined) {

            valores += "<option>" + carreras[i].nombre + "</option>";
        }
    };
    //mostrarlos en la tabla
    document.getElementById("carrera").innerHTML = valores;


}

function VistaEstudiante(codigo) {

    var cedula_estudiante;
    var nombre_estudiante;
    var carrera_estudiante;
    var role_estudiante;
    var imagen_estudiante;

    var estudiantes = JSON.parse(localStorage.getItem('estudiantes'));

    var cedula_estudiante = codigo;



    for (var i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i] != undefined) {
            if (estudiantes[i].cedula == cedula_estudiante) {

                nombre_estudiante = estudiantes[i].nombre;
                carrera_estudiante = estudiantes[i].carrera;
                role_estudiante = estudiantes[i].role;
                imagen_estudiante= estudiantes[i].imagen;

            }

        }
    };
    document.getElementById("cedula-vista").value = cedula_estudiante;
    document.getElementById("nombre-vista").value = nombre_estudiante;
    document.getElementById("carrera-vista").value = carrera_estudiante;
    document.getElementById("role-vista").value = role_estudiante;
    document.getElementById("imagen-vista").src= "Imagenes/"+imagen_estudiante;

}
