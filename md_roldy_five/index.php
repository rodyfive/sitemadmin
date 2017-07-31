<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta name="viewport" content="width=device-width,user-escalabel=no,initial-scale=1.0, maximum-scale=1.0, minimun-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/materialize.min.css">
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
	<header>
		<ul id="dropdown1" class="dropdown-content">
			<li><a href="#!">Ordenes por realizar</a></li>
			<li><a href="#!">Total por mes</a></li>
			<!--<li class="divider"></li>-->
			</ul>
			<ul id="dropdown2" class="dropdown-content">
			<li><a href="#!">Ordenes por realizar</a></li>
			<li><a href="#!">Total por mes</a></li>
			<!--<li class="divider"></li>-->
			</ul>

		<nav>
		    <div class="nav-wrapper teal darken-2">
		      <a href="#!" class="brand-logo"><i class="material-icons left large">home</i>Modisteria Roldy Five</a>
		      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		      <ul class="right hide-on-med-and-down">
		        <li><a href="index.php?modulo=cliente&elemento=index.php"><i class="material-icons left large">supervisor_account</i>Cliente</a></li>
		        <li><a href="index.php?modulo=medidas&elemento=index.php"><i class="material-icons left large">assignment</i>Medidas</a></li> 
		        <li><a href="index.php?modulo=orden&elemento=index.php"><i class="material-icons left large">shopping_cart</i>Orden</a></li>
		       	<li><a class="dropdown-button" href="#!" data-activates="dropdown2"><i class="material-icons left">trending_down</i>Reportes<i class="material-icons right">arrow_drop_down</i></a></li>
		      </ul>
		      <ul class="side-nav" id="mobile-demo">
		        <li><a href="index.php?modulo=cliente&elemento=index.php">Cliente</a></li>
		        <li><a href="index.php?modulo=medidas&elemento=index.php">Medidas</a></li>
		        <li><a href="index.php?modulo=orden&elemento=index.php">Orden</a></li>
		        	<li><a class="dropdown-button" href="#!" data-activates="dropdown1">Reportes<i class="material-icons right">arrow_drop_down</i></a></li>
		      </ul>
		    </div>
 		 </nav>
	</header>
	<div class="container" >
		<?php
			$mod = @$_GET['modulo'];
			$m=@$_GET['elemento'];
			$archivo = 'modulos/'.$mod.'/'.$m;
			if (file_exists($archivo) and !empty($_GET['modulo']) and !empty($_GET['elemento'])) {
				include_once($archivo);
			}else{
				include_once("");
			}
		?>
	</div>

	<footer class="page-footer teal darken-2">
          
            <div class="container">

                <p class="grey-text text-lighten-4">David Raga Renteria</p>
            © 2017 Copyright Text
            </div>
          </div>
        </footer>
</body>
	<!-- <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>-->
	<script src="js/materialize.min.js"></script>
	<script >
		$(".button-collapse").sideNav();

	</script>
</html>