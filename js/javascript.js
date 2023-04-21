console.log("Hola mundo!");
window.onload=function(){
    
    //se obtiene el icono siguiente
    var siguiente = document.getElementById("adelante");
    //se registra el evento
    siguiente.addEventListener("click", verSiguiente);
    
    //funcion que maneja el cambio de imagenes
    //cuando el usuario da clic en el icono siguiente
    function verSiguiente(){
        var aux = document.getElementById("producto")
        var ruta= aux.src;
        if (ruta.includes('img/spray01.jpg'))
        aux.src="img/spray02.jpg";
        else if(ruta.includes('img/spray02.jpg'))
         aux.src="img/spray03.jpg";
          else if(ruta.includes('img/spray03.jpg'))
         aux.src="img/spray04.jpg";
         else
         aux.src='img/spray01.jpg';
    }
    
    
     //se obtiene el icono atras
    var vista_atras = document.getElementById("atras");
    //se registra el evento
    vista_atras.addEventListener("click", verAtras);
    
    //funcion que maneja el cambio de imagenes
    //cuando el usuario da clic en el icono siguiente
    function verAtras(){
         var aux = document.getElementById("producto")
        var ruta= aux.src;
        if (ruta.includes('img/spray01.jpg'))
        aux.src="img/spray02.jpg";
        else if(ruta.includes('img/spray02.jpg'))
         aux.src="img/spray03.jpg";
          else if(ruta.includes('img/spray03.jpg'))
         aux.src="img/spray04.jpg";
         else
         aux.src='img/spray01.jpg';
    }
    
    //se obtiene el elemenro h5 ver especificaciones
      var btn= document.getElementById("ver");
     btn.addEventListener("click", mostrarEspecificaciones)
   //funcion que crea y añade elemento html al DOM  
    function mostrarEspecificaciones()
    {
     
    var text= document.getElementById("datos");
    text.innerHTML="> Remueve el 100% <br> > con formula activada para un brillo por más de 10 dias";
    var instrucciones= document.createElement("h5");
  
   img_instrucciones.src="img/cuidados.jpg"
    instrucciones.appendChild(img_instrucciones);

    }
    //dr obtiene el elemento h5 ocultar especificaciones
    var btn2= document.getElementById("ocultar");
    btn2.addEventListener("click", ocultarEspecificaciones)
    
    //funcion elimina las especificaciones
    function ocultarEspecificaciones()
    {
     var elemento=document.getElementById("datos");
     while (elemento.firstChild){
      elemento.removeChild(elemento.firstChild);
     }
    }
    
    
    //obtiene y registra cada eveneto que cambia la foto al dar clic en los iconos de circulo
    document.getElementById("purple").addEventListener("click", function() { cambiarImagen(this);} );
    document.getElementById("yellow").addEventListener("click", function() { cambiarImagen(this);} );
    document.getElementById("azul").addEventListener("click", function() { cambiarImagen(this);} );
    
    //funcion que controla el cambio de imagenes del reloj garmin
    function cambiarImagen(objeto)
    {
     var aux = document.getElementById("producto2");
     switch (objeto.id){
      case 'purple':
            aux.src="img/tenisCoral.jpg"
            break;
     case 'azul':
             aux.src="img/tenisAzul.jpg"
            break;
         default:
              aux.src="img/tenisNegro.jpg"
     }
    }
    
    var btnch=document.getElementById("chico");
btnch.addEventListener("click",precioChico);
var btnm=document.getElementById("mediano");
btnm.addEventListener("click",precioMediano);
function precioChico()
{
var price=document.getElementById("precio");
price.innerHTML=" Desde $449.00"

}
function precioMediano()
{
var price=document.getElementById("precio");
price.innerHTML=" Desde $699.00"
}
    
    
}
