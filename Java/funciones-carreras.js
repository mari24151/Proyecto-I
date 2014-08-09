// funcion que llama a agregar para luego mostrar en la ventana  
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


// Mostrar Carreras
function mostrarCarrera(){

    
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

//editar carreras
function editarCarrera()

{

    var codigo_carrera;
    var nombre_carrera;
    var carreras = JSON.parse(localStorage.getItem('carreras'));

    var codigo_carrera = window.location.href.slice(window.location.href.indexOf('=') + 1);



         for (var i = 0; i < carreras.length; i++) 
           {

                if(carreras[i] != undefined)
               {


                 if(carreras[i].codigo == codigo_carrera)
                   {

                     nombre_carrera = carreras[i].nombre;

                    }
                }
           };


    document.getElementById("codigo").value = codigo_carrera;
    document.getElementById("nombre").value = nombre_carrera;


        $("#btn-editar").click(function() 

            {

                for (var i = 0; i < carreras.length; i++) 
                {

                    if(carreras[i] != undefined)
                       {


                          if(carreras[i].codigo == codigo_carrera)
                             {

                                carreras[i].nombre = document.getElementById("nombre").value;
                             }
                        }
                };

              localStorage.setItem('carreras',JSON.stringify(carreras));

              document.getElementById("mensaje").innerHTML = '<div class="alert alert-info" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Carrera editada con exito!</div>';
            });
}


//Eliminar Carreras 
function  eliminarCarrera()
{


        $(".eliminar").click(function() 
            {

                var codigo_carrera =  $(this).attr("id");

                var carreras = JSON.parse(localStorage.getItem('carreras'));

                for (var i = 0; i < carreras.length; i++) 
                {

                   if(carreras[i] != undefined)
                    {

                      if(carreras[i].codigo == codigo_carrera)
                        {

                        delete carreras[i];
                        }
                    }
                };

               localStorage.setItem('carreras',JSON.stringify(carreras));

               document.getElementById("mensaje").innerHTML = '<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Carrera eliminada con exito!</div>';
        
                cargarCarrera();

                eliminarCarrera();
            });       
}


