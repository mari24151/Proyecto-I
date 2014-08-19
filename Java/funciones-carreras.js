// funcion que llama a agregar para luego mostrar en la ventana  
function preparar() {
    $("#agregar").click(function() {
        guardarCarrera();
    });
    $(".editar").click(function() {
        CargarValoresCarrera(this.id);
    });

    $(".vista").click(function() {
        VistaCarrera(this.text);
    });
}

//guardar carreras
function guardarCarrera() {

    // obtener datos del form
    var codigo = document.getElementById('codigo').value;
    nombre = document.getElementById('nombre').value;

    // crear objeto carrera
    var carrera = {
        "codigo": codigo,
        "nombre": nombre
    };

    // leer los estudiantes de localstorage
    var carreras = JSON.parse(localStorage.getItem('carreras'));
    if (carreras === null) {
        carreras = [];
    }

    // agregar el estudiante
    carreras.push(carrera);

    // volver guardar en localstoraage
    localStorage.setItem('carreras', JSON.stringify(carreras));

    location.href = "Carreras.html";

}


// Mostrar Carreras
function mostrarCarrera() {
    //mostrar columnas en la tabla
    var columnas = "<tr><th>Codigo</th><th>Nombre</th><th>Opciones</th></tr>";
    // leer las carreras
    var carreras = JSON.parse(localStorage.getItem('carreras'));
    var carrera = columnas;

    for (var i = 0; i < carreras.length; i++) {

        if (carreras[i] != undefined) {
            carrera += "<tr>";
            carrera += '<td class="lbl-codigo"><a class="vista" data-toggle="modal" data-target="#vista-carrera">' + carreras[i].codigo + '</a></td>';
            carrera += '<td class="lbl-nombre">' + carreras[i].nombre + '</td>';
            carrera += "<td>";
            carrera += '<div class="btn-group">';
            carrera += ' <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">Opciones<span class="caret"></span></button>';
            carrera += '<ul class="dropdown-menu" role="menu"><li><a data-toggle="modal" data-target="#miventana" class="editar" id="' + carreras[i].codigo + '">Editar</a></li><li><a class="eliminar" id="' + carreras[i].codigo + '" href="#">Eliminar</a></li></ul>';
            carrera += '</div>';
            carrera += "</td>";
            carrera += "</tr>";
        }
    };

    document.getElementById("tabla-carreras").innerHTML = carrera;
}

//Cargar carreras
function CargarValoresCarrera(codigo) {

    var codigo_carrera;
    var nombre_carrera;

    var carreras = JSON.parse(localStorage.getItem('carreras'));

    var codigo_carrera = codigo;



    for (var i = 0; i < carreras.length; i++) {

        if (carreras[i] != undefined) {


            if (carreras[i].codigo == codigo_carrera) {

                nombre_carrera = carreras[i].nombre;

            }
        }
    };


    document.getElementById("codigo").value = codigo_carrera;
    document.getElementById("nombre").value = nombre_carrera;
}

// edita la carrera
function editarCarrera() {


    $("#editar-carrera").click(function()

        {
            var codigo_carrera;
            var nombre_carrera;
            var carreras = JSON.parse(localStorage.getItem('carreras'));

            codigo_carrera = document.getElementById('codigo').value;
            nombre_carrera = document.getElementById('nombre').value;

            for (var i = 0; i < carreras.length; i++) {

                if (carreras[i] != undefined) {


                    if (carreras[i].codigo == codigo_carrera) {

                        carreras[i].nombre = nombre_carrera;
                    }
                }
            };

            localStorage.setItem('carreras', JSON.stringify(carreras));

            alert('Carrera modificada con exito');

            location.reload(true);


        });

}


//Eliminar Carreras 
function eliminarCarrera() {


    $(".eliminar").click(function() {

        var codigo_carrera = $(this).attr("id");

        var carreras = JSON.parse(localStorage.getItem('carreras'));

        for (var i = 0; i < carreras.length; i++) {

            if (carreras[i] != undefined) {

                if (carreras[i].codigo == codigo_carrera) {

                    delete carreras[i];
                }
            }
        };

        localStorage.setItem('carreras', JSON.stringify(carreras));
        // alert
        alert('Carrera eliminada');
        // refrescar
        location.reload(true);

    });
}

// vista de las carreras
function VistaCarrera(codigo) {

    var codigo_carrera;
    var nombre_carrera;

    var carreras = JSON.parse(localStorage.getItem('carreras'));

    var codigo_carrera = codigo;


    // condicion  recorrer
    for (var i = 0; i < carreras.length; i++) {

        if (carreras[i] != undefined) {


            if (carreras[i].codigo == codigo_carrera) {

                nombre_carrera = carreras[i].nombre;

            }
        }
    };
    // obtener info 
    document.getElementById("codigo-vista").value = codigo_carrera;
    document.getElementById("nombre-vista").value = nombre_carrera;
}
