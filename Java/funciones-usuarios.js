// funcion que llama a agregar para luego mostrar en la ventana  
function prepararUsuario() {
    $("#agregar").click(function() {
        guardarUsuario();
    });
    $(".editar").click(function() {
        CargarValoresUsuario(this.id);
    });
}

//guardar Usuario
function guardarUsuario() {

    // obtener datos del form
    var cedula = document.getElementById('cedula').value;
    alias = document.getElementById('alias').value;
    nombre = document.getElementById('nombre').value;
    role = document.getElementById('role').value;
    contrasena = document.getElementById('contrasena').value;

    // crear objeto usuarios
    var usuario = {
        "cedula": cedula,
        "alias": alias,
        "nombre": nombre,
        "role": role,
        "contrasena": contrasena
    };

    // leer los usuarios de localstorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (usuarios === null) {
        usuarios = [];
    }

    // agregar los usuarios
    usuarios.push(usuario);

    // volver guardar en localstoraage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    location.href = "Usuarios.html";
}

// Mostrar Usuarios
function mostrarUsuarios() {

    //agregar las filas y columnas a la tabla
    var columnas = "<tr><th>Cedula</th><th>Usuario</th><th>Nombre</th><th>Role</th><th>Contraseña</th><th>Opciones</th></tr>";

    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    var usuario = columnas;
    //agregar los usuarios a la tabla 
    for (var i = 0; i < usuarios.length; i++) {

        if (usuarios[i] != undefined) {
            usuario += "<tr>";
            usuario += '<td class="lbl-cedula"><a data-toggle="modal" data-target="#miventana">' + usuarios[i].cedula + '</a></td>';
            usuario += '<td class="lbl-alias">' + usuarios[i].alias + '</td>';
            usuario += '<td class="lbl-nombre">' + usuarios[i].nombre + '</td>';
            usuario += '<td class="lbl-role">' + usuarios[i].role + '</td>';
            usuario += '<td class="lbl-contrasena">' + usuarios[i].contrasena + '</td>';
            usuario += "<td>";
            usuario += '<div class="btn-group">';
            usuario += ' <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">Opciones<span class="caret"></span></button>';
            usuario += '<ul class="dropdown-menu" role="menu"><li><a data-toggle="modal" data-target="#miventana" class="editar" id="' + usuarios[i].cedula + '" href="editar.html?codigo=' + usuarios[i].cedula + '">Editar</a></li><li><a class="eliminar" id="' + usuarios[i].cedula + '" href="#">Eliminar</a></li></ul>';
            usuario += '</div>';
            usuario += "</td>";
            usuario += "</tr>";
        }
    };
    //mostrarlos en la tabla
    document.getElementById("tabla-usuario").innerHTML = usuario;
}



// funcion de editar usuarios 
function CargarValoresUsuario(codigo) {

    var cedula_usuario;
    var alias_usuario;
    var nombre_usuario;
    var role_usuario;
    var contrasena_usuario;

    var usuarios = JSON.parse(localStorage.getItem('usuarios'));

    var cedula_usuario = codigo;



    for (var i = 0; i < usuarios.length; i++) {

        if (usuarios[i] != undefined) {

            if (usuarios[i].cedula == cedula_usuario) {

                alias_usuario = usuarios[i].alias;
                nombre_usuario = usuarios[i].nombre;
                role_usuario = usuarios[i].role;
                contrasena_usuario = usuarios[i].contrasena;

            }

        }
    };


    document.getElementById("cedula").value = cedula_usuario;
    document.getElementById("alias").value = alias_usuario;
    document.getElementById("nombre").value = nombre_usuario;
    document.getElementById("role").value = role_usuario;
    document.getElementById("contrasena").value = contrasena_usuario;

}

//editar Usuarios
function editarUsuario() {
debugger;
    $("#editar-usuario").click(function()

        {
            var cedula_usuario;
            var alias_usuario;
            var nombre_usuario;
            var role_usuario;

            var usuarios = JSON.parse(localStorage.getItem('usuarios'));


            cedula_usuario = document.getElementById('cedula').value;
            alias_usuario = document.getElementById('alias').value;
            nombre_usuario = document.getElementById('nombre').value;
            role_usuario = document.getElementById('role').value;
            contrasena_usuario = document.getElementById('contrasena').value;


            for (var i = 0; i < usuarios.length; i++) {

                if (usuarios[i] != undefined) {


                    if (usuarios[i].cedula == cedula_usuario) {

                        usuarios[i].alias = alias_usuario;
                        usuarios[i].nombre = nombre_usuario;
                        usuarios[i].role = role_usuario;
                        usuarios[i].contrasena = contrasena_usuario;

                    }
                }
            };

            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert('Usuario modificado con exito');

            location.reload(true);

        });
}

//funcion que elimina los usuarios
function eliminarUsuarios() {

    $(".eliminar").click(function() {

        var cedula_usuario = $(this).attr("id");

        var usuarios = JSON.parse(localStorage.getItem('usuarios'));

        for (var i = 0; i < usuarios.length; i++) {

            if (usuarios[i] != undefined) {

                if (usuarios[i].cedula == cedula_usuario) {

                    delete usuarios[i];

                }
            }

        };

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Carrera eliminada');

        location.reload(true);


    });
}
