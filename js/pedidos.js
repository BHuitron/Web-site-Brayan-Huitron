window.onload=function(){
    //se obtiene el valor del correo del usuario que ha iniciado sesión
    var mail = document.getElementById("correo");
    
    //se solicita la servidor el archivo de usuarios JSON
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this .status == 200){
            leerJSON(this)//funcion que procesa los datos
        }
    };
    xhttp.open("GET", "data/usuarios.json", true) //se solicita el recurso de archivo JSON
    xhttp.send()//se envia la solicitud al servidor
    
/*cuando el servidor responde se procesa la informacion,
obteniendo los datos del pedido del usuario*/
function leerJSON(respuestaJSON)
{
    //se ontiene la respuesta del servidor (archivo JSON), en un objetivo de javascriot
    var objJson = JSON.parse(respuestaJSON.responseText);
    var i=0, j;
    //se obtiene el cuerpo de la tabla de donde se añadiran las filas de cada pedido
var tabla=document.getElementById("tabla")
//se recorre cada usuario
for (i in objJson.usuarios)
{
    //se valida que el correo corresponda al correo del usuario que ha iniciado sesion
    if (objJson.usuarios[i].correo == mail.innerHTML.trim() )
{
    j=0;
    /*cuando el correo coincide se obtiene los pedidos del usuario
    y se crean los elementos del DOM HTML para formar las filas de cada 
    pedido */
    for (j in objJson.usuarios[i].pedidos)
    {
        var tr= document.createElement("tr")
        var td_pedido = document.createElement("td")
        //se obtiene el numero de pedido
        td_pedido.innerHTML = objJson.usuarios[i].pedidos[j].numero
        var td_fecha = document.createElement("td")
        //se obtiene la fecha de pedido
        td_fecha.innerHTML = objJson.usuarios[i].pedidos[j].fecha
        var td_total = document.createElement("td")
        //se obtiene el monto del pedido
        td_total.innerHTML =objJson.usuarios[i].pedidos[j].total
        var td_estatus = document.createElement("td")
        //se obtiene el estatus del pedido
        td_estatus.innerHTML = objJson.usuarios[i].pedidos[j].estatus
        var td_boton = document.createElement("td")
        //se genera el botón que va en el ultima fila
        var boton = document.createElement("button")
        boton.innerHTML="detalle"
        boton.className="btn btn-sm btn-outline-info"
        boton.type="button"
        /*se añaden todos los elementos a una fila y la fila se agraga 
        a la tabla de pedidos*/
        td_boton.appendChild(boton)
        tr.appendChild(td_pedido)
        tr.appendChild(td_fecha)
        tr.appendChild(td_total)
        tr.appendChild(td_estatus)
        tr.appendChild(td_boton)
        tabla.appendChild(tr)
        

        }
    
      }
    
    }

  }
}