<!DOCTYPE html>
<html lang="es">
    <head>

        <meta charset="utf-8">
        <meta name="viewport"content="width=device-width, initial-scale=1, sgrink-tofit=no">
        <meta name="keywords" content="Car wash, venta de productos de limpieza,auto fenesse ">
        <meta name="description" content="Venta de productos para limpieza en linea">
        <title>Car Wash AUto Fenesse </title>
    
     
 <!-- Referencia Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" 
    crossorigin="anonymous">

      <!-- Referencia Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" 
    crossorigin="anonymous"></script>

 
   


    <!--Referencia a hoja de estilo-->
    <link rel="stylesheet" type="text/css" href="css/styleb.css">
    <!--Agrega un favicon-->
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <!--Referencia de framework FontAwesome-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" 
    integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
    <!--Referencia de fuentes de Google-->
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Montserrat" rel="stylesheet">
    <!--<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">-->
    <!--<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">-->
    
    </head><!--Termina metadatos-->
  <body>
        <!-- Aquí inicia el código visible para el usuario-->
    <header class="header"><!--Inicia Encabezado-->
    <section class="header-top"><!--Inicia Barra Superior-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="header-top-center">
          <p>Envío gratis en compras a partir de $2500</p>
          </div>
        </div>
      </div>
    </div>
    </section><!--Termina Barra Superior-->
    <section><!--Inicia Barra Logo - Menú-->
      <div class="container"> <!--Estructura el contenido de tabla-->
        <div class="row"> <!--Estructura el contenido de fila-->
           <article class="col-lg-3 col-md-6 col-sm-12"><!--Inicia logo, columna 1-->
            <div class="header-logo">
              <a href="index.html"><img src="img/logop.jpg" width="25%" alt=""></a>
            </div>
           </article><!--Termina logo-->
           <article class="col-lg-6 col-md-6 col-sm-12"> <!--Inicia menu, columna 2-->
         
            <nav class="navbar navbar-expand-lg navbar-light  p-4 mt-2 header-menu">
            <div class="container-fluid justify-content-center">
              <button class="navbar-toggler " type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="shop.html">Productos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="login.html">Car Wash</a>
                  </li>
              </div>
            </div>
          </nav>
  
           </article><!--Termina menu, columna 2-->
           <article class="col-lg-3 col-md-12 col-sm-12 d-sm-none d-md-none d-lg-block"><!--Inicia liga de iconos, columna 3-->
         <div class="header-nav-option">
        <a href="#"><img src="img/fant.jpg"alt=""></a>
        <a href="#"><img src="img/c.jpg"alt=""></a>
        <a href="#"><img src="img/b.jpg"alt=""> <span>0</span></a>
        <div class="price">$0.00</div>
       </div>
           </article><!--Termina liga de iconos, columna 3-->
        </div><!--Termina estructura de fila-->
      </div><!--Termina estructura de tabla-->
  </section> <!--Termina Barra Logo - Menú-->
  </header><!--Termina Encabezado-->
  
  <main>
    <section class="container bg-light">
      <h1>Los datos proporcionados son los siguientes:</h1>
      <h3>Modelo: <span class="text-info"><?php echo $_GET["modelo"]; ?></h3>
      <h3>Servicio: <span class="text-info"><?php echo $_GET["servicio"]; ?></h3>
      <h3>Email: <span class="text-info"><?php echo $_GET["email"]; ?></h3>
      <h3>Teléfono: <span class="text-info"><?php echo $_GET["telefono"]; ?></h3>
      <h3>Contraseña: <span class="text-info"><?php echo $_GET["contraseña"]; ?></h3>
      <h3>Contraseña Confirmada: <span class="text-info"><?php echo $_GET["contraseña2"]; ?></h3>
    </section>
  </main>
  <footer><!--Inicia pie de página-->
    <h3>Sígueme</h3>
    <span >
    <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
    </span>
</footer><!--Termina pie de página-->
</body>
</html>