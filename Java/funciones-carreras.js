// funcion que llama a agregar para luego mostrar en la ventana  
function preparar() {
    $("#agregar").click(function() {
        guardarCarrera();
    });
    $(".editar").click(function() {
        CargarValoresCarrera(this.id);
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

    var columnas = "<tr><th>Codigo</th><th>Nombre</th><th>Opciones</th></tr>";

    var carreras = JSON.parse(localStorage.getItem('carreras'));
    var carrera = columnas;

    for (var i = 0; i < carreras.length; i++) {

        if (carreras[i] != undefined) {
            carrera += "<tr>";
            carrera += '<td class="lbl-codigo"><a data-toggle="modal" data-target="#modal-vista">' + carreras[i].codigo + '</a></td>';
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

//editar carreras
function CargarValoresCarrera(codigo){

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

        alert('Carrera eliminada');

        location.reload(true);

    });
}
