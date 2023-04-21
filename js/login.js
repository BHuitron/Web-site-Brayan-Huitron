window.onload=function(){
    
    /*Se obtiene en variables los elementos del DOM del formulario a utilizar*/
    var mail = document.getElementById("email"); //input de email
    var pass = document.getElementById("pwd"); //input de contraseña
    var error = document.getElementById("error"); //span para mostrar errores 
    var form = document.getElementById("formulario"); //formulario
    var btn_iniciar = document.getElementById("iniciar"); //botón Iniciar Sesión
    
    //Registra la funcion procesarFormulario en el evento clic del boton iniciar, al dar clic
    //desencadena la validación de correo y contraseña capturada contra lo definido en el archivo JSON
    btn_iniciar.addEventListener("click", procesarFormulario);
    
    //Función que abre la conexión con servidor para solicitar el archivo JSON
    function procesarFormulario(){
        var xhttp = new XMLHttpRequest(); //Se crea la instancia de la petición 
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                leerJSON(this) //función que obtiene y procesa la respuesta del servidor 
            }
        };
        xhttp.open("GET", "data/usuarios.json", true) //Se define que recurso JSON que se necesita
        xhttp.send()                                  //Se envia la petición
    }
    
    //Se procesa la respuesta cuando se obtiene de servidor
    function leerJSON(respuestaJSON)
    {
        //Se obtiene el archivo JSON y se convierte en un objeto de javascript
        var objJson =JSON.parse(respuestaJSON.responseText);
        var i;
        var bandera=false
        //Se recorre cada usuario para tratamiento
        for (i in objJson.usuarios)
        {
            //Se valida si el correo y contraseña es igual
            //a la capturada por el usuario en el formulario
            if (objJson.usuarios[i].correo == mail.value && objJson.usuarios[i].pwd == pass.value )
            bandera=true //Si hay considencia se cambia el valor de esta bandera
        }
    
        //Se valida el valor de la bandera, si es falsa significa que no encontro coincidencias en 
        //el archivo JSON con el usuario y contraseña y muestra el mensaje de error
        if (bandera==false) 
        {
            error.style.color="red";
            error.innerHTML="Correo o contraseña incorrectos, intente de nuevo"
        }
        //Hubo coincidencia con usuario y contraseña
        //y envia los datos al servidor haciendo el submit del formulario
        else
        {
           form.submit(); 
        }
    }

    //Se registra el evento focus para que cuando se tenga el foco en el input de email
    //y contraseña se limpien si tienen valores al igual el mensaje de error
    mail.addEventListener("focus", limpiarMensajeEmail);
    pass.addEventListener("focus", limpiarMensajePwd);
    //Funcion para limpiar valores del input email
    function limpiarMensajeEmail() {
        error.innerHTML="";
        mail.value=""
    }
    //Funcion para limpiar valores del input contraseña
    function limpiarMensajePwd(){
        error.innerHTML="";
        pass.value=""
    }
    
}