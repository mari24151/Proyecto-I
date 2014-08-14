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

    
        var columnas = "<tr><th>Cedula</th><th>Nombre Usuario</th><th>Nombre</th><th>Opciones</th></tr>";

        var usuarios = JSON.parse(localStorage.getItem('usuarios'));
        var usuario = columnas;

        for (var i = 0 ; i < usuarios.length; i++) {
            
            if(usuarios[i] != undefined)
            {
            usuario += "<tr>";
            usuario += '<td class="lbl-codigo"><a href="#">'+usuarios[i].cedula+'</a></td>';
            usuario +=  '<td class="lbl-alias">'+usuarios[i].alias+'</td>';
            usuario +=  '<td class="lbl-nombre">'+usuarios[i].nombre+'</td>';
            usuario += "<td>";
            usuario += '<div class="btn-group">';
            usuario += ' <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">Opciones<span class="caret"></span></button>';
            usuario += '<ul class="dropdown-menu" role="menu"><li><a class="editar" id="'+usuarios[i].cedula+'" href="editar.html?codigo='+usuarios[i].cedula+'">Editar</a></li><li><a class="eliminar" id="'+usuarios[i].cedula+'" href="#">Eliminar</a></li></ul>';
            usuario += '</div>';
            usuario += "</td>";
            usuario += "</tr>";
            }
        };

        document.getElementById("tabla-usuario").innerHTML = usuario;  
}

// funcion de editar usuarios 
function editarUsuarios(){

//    var cedulaUsuario;
//    var aliasUsuario;
//    var nombreUsuario;
//    var usuarios = JSON.parse(localStorage.getItem('usuarios'));

//    var cedulaUsuario = window.location.href.slice(window.location.href.indexOf('=') + 1);



//    for (var i = 0; i < usuarios.length; i++) {

//                if( usuarios[i] != undefined)
//            {


//              if(usuarios[i].cedula == cedulaUsuario)
//                {

//                  aliasUsuario = usuarios[i].alias;

//                }else if (usuarios[i].nombre == nombreUsuario);

//            }
        

//    };


//    document.getElementById("cedula").value = cedula_usuario;
//    document.getElementById("alias").value = aliasUsuario;
//    document.getElementById("nombre").value = nombreUsuario;


//        $("#btn-editar").click(function() 

//            {

//                for (var i = 0; i < usuarios.length; i++) {

//                if(usuarios[i] != undefined)
//            {


//            if(carreras[i].cedula == cedulaUsuario)
//            {

//                usuarios[i].alias = document.getElementById("alias").value;

//            }else if (carreras[i].nombre == nombreUsuario);

//            }
        

//            };

//            localStorage.setItem('usuarios',JSON.stringify(usuarios));    

 
//            });


//}





//funcion que elimina los usuarios
function  eliminarUsuarios(){


        $(".eliminar").click(function() 
            {

            var cedula_usuario =  $(this).attr("id");

            var usuarios = JSON.parse(localStorage.getItem('usuarios'));

            for (var i = 0; i < usuarios.length; i++) {

                if(usuarios[i] != undefined)
            {

                if(usuarios[i].cedula == cedula_usuario)
                {

                        delete usuarios[i];

                }
            }

            };

         localStorage.setItem('usuarios',JSON.stringify(usuarios));

            document.getElementById("mensaje").innerHTML = '<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Carrera eliminada con exito!</div>';
        
                mostrarUsuarios();

                eliminarUsuarios();

            });
}





