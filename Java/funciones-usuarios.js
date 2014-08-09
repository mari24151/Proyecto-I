// funcion que llama a agregar para luego mostrar en la ventana  
function prepararUsuario() {   
    $( "#agregar" ).click(function() { guardarUsuario() ;});
}

//guardar carreras
function guardarUsuario() {

      // obtener datos del form
    var cedula = document.getElementById('cedula').value;
        alias= document.getElementById('alias').value;
        nombre= document.getElementById('nombre').value;
    
    // crear objeto usuarios
    var usuario = { "cedula": cedula, "alias": alias,"nombre": nombre };
    
    // leer los usuarios de localstorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios'));
    if (usuarios === null) {
        usuarios = [];
    }

    // agregar los usuarios
    usuarios.push(usuario);

    // volver guardar en localstoraage
    localStorage.setItem('usuarios',JSON.stringify(usuarios));
}

// Mostrar Usuarios en la tabla 
function mostrarUsuarios(){

    
        var columnas = "<tr><th>Cedula</th><th>Nombre</th><th>Opciones</th></tr>";

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

