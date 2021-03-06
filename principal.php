<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Aplicacion TAX-HELP</title>

    <!-- Cargando hojas de estilos -->

    <link rel="stylesheet" href="/css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<script type="text/javascript" src="/js/formulario.js"></script>
</head>

<body>
    <header class="p-3 text-white bg-color-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>
    
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Informacion</a></li>
              <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
              <li><a href="#" class="nav-link px-2 text-white">Acerca de nosotros</a></li>
            </ul>    
    
            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">Perfil</button>
              <button type="button" class="btn btn-warning">Logout</button>
            </div>
          </div>
        </div>
      </header>

      <div class ="img-hero-principal"></div>
      
      <div class="contenedor-main">
        <div class ="main">
			<form class="center-screen " data-bitwarden-watching="1">
				<?php
					$meses = array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
					foreach ($meses as $mes) {
						?>
						<div class="mes"> <?php echo $mes?></div>
						<?php
					}
				?>
			
				<button id="calcular-button" class="button">Calcular</button>
			</form>
		</div>
      </div>
      <footer class="footer">
        <p class="margin-top-18">Todos los derechos reservados marcianekecompany??</p>
      </footer>
</body>
</html>

